/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Octokit } from '@octokit/rest'

import { Endpoints } from '@octokit/types'
type getUserResponse = Endpoints['GET /users/{username}']['response']['data']

import { graphql } from '@octokit/graphql'
import { createClient } from '@vercel/kv'

type contributor = {
  login: string
  displayName?: string
  contribs: number
  profile: string
}

interface cache {
  contributors: contributor[]
  commits: number
  pullRequests: number
  openIssues: number
  timestamp: number
}

const fetchData = async () => {
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
      const { repository }: any = await graphqlWithAuth(
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

const asdf = async () => {
  const client = createClient({
    url: process.env.KV_REST_API_URL as string,
    token: process.env.KV_REST_API_TOKEN as string
  })

  const data: any = await client.get(`contribs`)

  if (data == null) {
    const newData = await fetchData()

    setData(client, newData)
  } else {
    const parsed: cache = JSON.parse(data)

    if (Date.now() - parsed.timestamp > 3600000) {
      const newData = await fetchData()
      setData(client, newData)
    }
  }
}
asdf()
