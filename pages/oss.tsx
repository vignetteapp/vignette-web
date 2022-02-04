import type { NextPage, GetStaticProps } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import repoIcon from 'public/images/icons/repo.png'

import { BiGitPullRequest } from 'react-icons/bi'
import { Nav, Container, SEO, Footer, FadeIn } from 'components'

import { Octokit } from '@octokit/rest'

import { Endpoints } from '@octokit/types'
type getUserResponse = Endpoints['GET /users/{username}']['response']['data']

import { createClient } from 'redis'

const OpenSource: NextPage<{ data: contributor[] }> = ({ data }) => {
  return (
    <>
      <SEO />
      <Nav />
      <Container className="pt-8 lg:pt-16">
        <div className="z-20 mx-auto px-4 pb-8 lg:max-w-7xl ">
          <h1 className="bg-gradient-to-br from-blue-500 to-deepFuscia bg-clip-text text-5xl font-semibold text-transparent sm:text-6xl md:text-9xl">
            Open and <br />
            Transparent
          </h1>
          <p className="my-4 mb-8 mt-8 px-4 text-lg sm:text-xl lg:mb-20 lg:text-2xl">
            Vignette is made by talented individuals working in the open source
            community. The numbers you see here are the aggregate statistics of
            all our activity done in the open combined.
          </p>
          <FadeIn>
            <div className="mx-auto flex flex-wrap gap-8 pb-16 text-center">
              <div className="mx-auto text-xl">
                <div className="mb-1 text-6xl font-bold">727</div>
                Pull Requests
                <BiGitPullRequest
                  className="mx-auto mt-2 fill-pinkRed"
                  size={40}
                />
              </div>
              <div className="mx-auto text-xl">
                <div className="mb-1 text-6xl font-bold">727</div>
                Open Issues
                <BiGitPullRequest
                  className="mx-auto mt-2 fill-pinkRed"
                  size={40}
                />
              </div>

              <div className="mx-auto text-xl">
                <div className="mb-1 text-6xl font-bold">727</div>
                Commits
                <BiGitPullRequest
                  className="mx-auto mt-2 fill-pinkRed"
                  size={40}
                />
              </div>
            </div>
            <div className="w-full text-center">
              <a
                href="https://github.com/vignetteapp"
                className="button mx-auto "
              >
                Visit Our Github
              </a>
            </div>
          </FadeIn>
          <FadeIn className="mt-32 text-center ">
            <Image src={repoIcon} alt="" />

            <h2 className="mt-4 text-2xl font-bold lg:text-3xl">
              Meet the Contributors
            </h2>
            <div className="mt-6 grid grid-cols-2 gap-4 px-4 lg:grid-cols-8 lg:p-8">
              {data.map((user) => (
                <Link
                  passHref
                  key={user.login}
                  href={`https://github.com/${user.login}`}
                >
                  <a>
                    <div className="rounded-xl border border-gray-200 p-4 shadow dark:border-gray-700">
                      <Image
                        width={64}
                        height={64}
                        className="rounded-full"
                        src={user.profile}
                      />
                      <p className="pt-2 text-xs">
                        {user.displayName ? user.displayName : user.login}
                      </p>
                    </div>
                  </a>
                </Link>
              ))}
            </div>
            <p className="mx-auto mt-8 max-w-xl text-sm text-gray-700 dark:text-gray-300 sm:text-base">
              *This is live data from our GitHub, see yourself here? Tweet about
              it, brag it to your friends, or give yourself a pat in the back.
              You deserve it.
            </p>
          </FadeIn>
        </div>
      </Container>

      <Footer />
    </>
  )
}

type contributor = {
  login: string
  displayName?: string
  contribs: number
  profile: string
}

interface cache {
  data: contributor[]
  timestamp: number
}

const fetchData = async () => {
  const totalContributors: Record<string, contributor> = {}

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

  const contribArray: contributor[] = []

  Object.keys(totalContributors).forEach((key) => {
    contribArray.push(totalContributors[key])
  })

  contribArray.sort((a, b) => b.contribs - a.contribs)
  contribArray.slice(0, 100)

  const ts = Date.now()

  const dataToSave = {
    data: contribArray,
    timestamp: ts,
  }
  return dataToSave
}

export const getStaticProps: GetStaticProps = async () => {
  const client = createClient({
    url: process.env.REDIS_URL,
    password: process.env.REDIS_PW,
  })

  await client.connect()
  let data = await client.get(`contribs`)

  if (data == null) {
    client.set(`contribs`, JSON.stringify(await fetchData()))
  } else {
    const parsed: cache = JSON.parse(data)
    if (parsed.timestamp < Date.now() - 3600000) {
      client.set(`contribs`, JSON.stringify(await fetchData()))
    }
  }
  process.env.NODE_ENV == `development` &&
    client.set(`contribs`, JSON.stringify(await fetchData()))

  data = await client.get(`contribs`)

  const parsed: cache = JSON.parse(data as string)

  return {
    props: { data: parsed.data }, // will be passed to the page component as props
    revalidate: 120,
  }
}

export default OpenSource
