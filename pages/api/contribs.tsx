/* eslint-disable @typescript-eslint/no-non-null-assertion */
import type { NextApiRequest, NextApiResponse } from 'next'
import { Octokit } from '@octokit/rest'

import { Endpoints } from '@octokit/types'
type getUserResponse = Endpoints['GET /users/{username}']['response']['data']

import { createClient } from 'redis'

export type contributor = {
  login: string
  displayName?: string
  contribs: number
  profile: string
}

interface cache {
  data: { contributors: contributor[]; commits: number }
  timestamp: number
}

export const fetchData = async () => {
  console.log(`updating data`)
  const totalContributors: Record<string, contributor> = {}
  const totalPRs = 0
  let totalCommits = 0

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
      const url = `${repo.commits_url.split(`{`)[0]}?sha=master&per_page=1`
      console.log(url)

      const pageString = await fetch(url, {
        headers: {
          Accept: `application/vnd.github.v3+json`,
        },
      })
        .then((data) => {
          console.log(data)
          return data.headers
        })
        .then(
          (result) =>
            result!
              .get(`link`)
              ?.split(`,`)[1]
              .match(/.*page=(?<page_num>\d+)/)!.groups!.page_num,
        )
      totalCommits = totalCommits += parseInt(pageString as string)

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
          const userData: getUserResponse = await octokit.rest.users
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            .getByUsername({ username: user.login! })
            .then((res) => res.data)

          let prevContribs = 0
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          if (totalContributors[user.login!]) {
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            prevContribs = totalContributors[user.login!].contribs
          }

          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          totalContributors[user.login!] = {
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            login: user.login!,
            displayName: userData.name as string,
            contribs: prevContribs + user.contributions,
            profile: user.avatar_url as string,
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
  const dataToSave: cache = {
    data: { contributors: contribArray, commits: totalCommits },
    timestamp: ts,
  }
  return dataToSave
}

const setData = async (
  client: ReturnType<typeof createClient>,
  data: cache,
) => {
  client.set(`contribs`, JSON.stringify(data))
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ contributors: contributor[] }>,
) {
  const client = createClient({
    url: process.env.REDIS_URL,
    password: process.env.REDIS_PW,
  })

  await client.connect()
  const data = await client.get(`contribs`)

  if (data == null) {
    const newData = await fetchData()

    res.json(newData.data)
    setData(client, newData)
  } else {
    const parsed: cache = JSON.parse(data)
    res.json(parsed.data)

    if (parsed.timestamp < Date.now() - 3600000) {
      const newData = await fetchData()
      setData(client, newData)
    }
  }

  process.env.NODE_ENV == `development` && setData(client, await fetchData())
}
