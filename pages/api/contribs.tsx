/* eslint-disable @typescript-eslint/no-non-null-assertion */
import type { NextApiRequest, NextApiResponse } from 'next'
import { Octokit } from '@octokit/rest'

import { Endpoints } from '@octokit/types'
type getUserResponse = Endpoints['GET /users/{username}']['response']['data']

import { graphql } from '@octokit/graphql'
import { createClient } from 'redis'

export type contributor = {
  login: string
  displayName?: string
  contribs: number
  profile: string
}

export interface cache {
  contributors: contributor[]
  commits: number
  pullRequests: number
  openIssues: number
  timestamp: number
}

export const fetchData = async () => {
  const graphqlWithAuth = graphql.defaults({
    headers: {
      authorization: `token ${process.env.GITHUB_TOKEN}`,
    },
  })

  const totalContributors: Record<string, contributor> = {}
  let totalPRs = 0
  let totalCommits = 0
  let openIssues = 0

  const octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN,
  })

  const repos = await octokit.rest.repos
    .listForOrg({
      org: `vignetteapp`,
      type: `public`,
    })
    .then((res) => res.data)

  for (const repo of repos) {
    if (!repo.fork) {
      const { repository } = await graphqlWithAuth(
        `
        query repo($owner: String!, $name: String!) {
          repository(owner: $owner, name: $name) {
            pullRequests {
              totalCount
            }
            commits: object(expression: "HEAD") {
              ... on Commit {
                history {
                  totalCount
                }
              }
            }
            issues: issues(states:OPEN){
              totalCount
            }
          }
        }
        `,
        {
          owner: `vignetteapp`,
          name: repo.name,
        },
      )

      totalCommits = totalCommits + repository.commits.history.totalCount
      totalPRs = totalPRs + repository.pullRequests.totalCount
      openIssues = openIssues + repository.issues.totalCount

      const contributors = await octokit.rest.repos
        .listContributors({
          owner: `vignetteapp`,
          repo: repo.name,
          anon: `false`,
          per_page: 15,
        })
        .then((res) => res.data)

      for (const user of contributors) {
        if (
          !user.login?.includes(`dependabot`) &&
          !user.login?.includes(`[bot]`)
        ) {
          let prevContribs = 0

          if (totalContributors[user.login!]) {
            prevContribs = totalContributors[user.login!].contribs!
          }

          totalContributors[user.login!] = {
            login: user.login as string,
            contribs: prevContribs + user.contributions,
            profile: user.avatar_url as string,
          }
          if (!totalContributors[user.login!].displayName) {
            const userdata: getUserResponse = await octokit.rest.users
              .getByUsername({
                username: user.login as string,
              })
              .then((res) => res.data)

            totalContributors[user.login!].displayName = userdata.name as string
          }
        }
      }
    }
  }

  const contribArray: contributor[] = []

  Object.keys(totalContributors).forEach((key) => {
    contribArray.push(totalContributors[key])
  })

  contribArray.sort((a, b) => b.contribs - a.contribs)
  contribArray.slice(0, 100)

  const ts = Date.now()
  const dataToSave = {
    contributors: contribArray,
    commits: totalCommits,
    pullRequests: totalPRs,
    openIssues: openIssues,
    timestamp: ts,
  }
  return dataToSave
}

const setData = async (
  client: ReturnType<typeof createClient>,
  data: {
    contributors: contributor[]
    commits: number
    pullRequests: number
    openIssues: number
    timestamp: number
  },
) => {
  client.set(`contribs`, JSON.stringify(data))
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{
    contributors: contributor[]
    commits: number
    pullRequests: number
    openIssues: number
    timestamp: number
  }>,
) {
  const client = createClient({
    url: process.env.REDIS_URL,
    password: process.env.REDIS_PW,
  })

  await client.connect()
  const data = await client.get(`contribs`)

  if (data == null) {
    const newData = await fetchData()

    res.json(newData)
    setData(client, newData)
  } else {
    const parsed: cache = JSON.parse(data)
    res.json(parsed)
    console.log("test123")
    if (Date.now() - parsed.timestamp > 3600000) {
      const newData = await fetchData()
      setData(client, newData)
    }
  }

  //process.env.NODE_ENV == `development` && setData(client, await fetchData())
}
