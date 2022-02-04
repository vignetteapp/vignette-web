import type { NextApiRequest, NextApiResponse } from 'next'
import { Octokit } from '@octokit/rest'

import { Endpoints } from '@octokit/types'
type getUserResponse = Endpoints['GET /users/{username}']['response']['data']

type contributor = {
  login: string
  displayName?: string
  contribs: number
  social: {
    twitter?: string
    blog?: string
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<contributor[]>,
) {
  // eslint-disable-next-line no-var
  var totalContributors: Record<string, contributor> = {}

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
    const contributors = await octokit.rest.repos
      .listContributors({
        owner: `vignetteapp`,
        repo: repo.name,
        anon: `false`,
        per_page: 15,
      })
      .then((res) => res.data)

    for (const user of contributors) {
      if (!user.login?.includes(`dependabot`)) {
        const userData: getUserResponse = await octokit.rest.users
          .getByUsername({ username: user.login! })
          .then((res) => res.data)

        let prevContribs = 0
        if (totalContributors[user.login!]) {
          prevContribs = totalContributors[user.login!].contribs
        }

        totalContributors[user.login!] = {
          login: user.login!,
          displayName: userData.name as string,
          contribs: prevContribs + user.contributions,
          social: {
            twitter: userData.twitter_username as string,
            blog: userData.blog as string,
          },
        }
      }
    }
  }

  // eslint-disable-next-line no-var
  var contribArray: contributor[] = []

  Object.keys(totalContributors).forEach((key) => {
    contribArray.push(totalContributors[key])
  })
  contribArray.sort((a, b) => b.contribs - a.contribs)

  res.setHeader(`cache-control`, `public, max-age=43200`)
  res.json(contribArray)
}
