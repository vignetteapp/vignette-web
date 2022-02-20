import type { NextPage, GetStaticProps } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import repoIcon from 'public/images/icons/repo.png'

import { BiGitPullRequest } from 'react-icons/bi'
import { Nav, Container, SEO, Footer } from 'components'

import { createClient } from 'redis'
import donationImage from 'public/images/donations.png'
import VignettePadding from 'public/images/logo-bg.png'
import teamMembers from 'data/members.json'

interface Member {
  name: string
  avatar: string
  id: number
  role: string
  url: string
}

const OpenSource: NextPage<cache> = ({
  contributors,
  commits,
  pullRequests,
  openIssues,
  timestamp,
}) => {
  const updatedDate = new Date(timestamp)
  updatedDate.setSeconds(0)
  return (
    <>
      <SEO title="Open Source" />
      <Nav />
      <Container className="pt-8 lg:pt-16">
        <div className="z-20 mx-auto px-4 pb-8 lg:max-w-7xl ">
          <h1 className="bg-gradient-to-br from-[#005BEA] to-[#00C6FB] bg-clip-text text-5xl font-bold text-transparent sm:text-6xl md:text-9xl">
            Open and <br />
            Transparent.
          </h1>
          <p className="my-4 mb-8 mt-8 text-lg sm:px-4 sm:text-xl lg:mb-20 lg:text-2xl">
            Vignette is made by talented individuals working in the open source
            community. The numbers you see here are the aggregate statistics of
            all our activity done in the open combined.
          </p>
          <Container offset={10} noMargin fadeIn>
            <div className="mx-auto flex flex-wrap gap-8 pb-16 text-center">
              <div className="mx-auto text-xl">
                <div className="mb-1 text-6xl font-bold">{commits}</div>
                Commits
                <BiGitPullRequest
                  className="mx-auto mt-2 fill-pinkRed"
                  size={40}
                />
              </div>
              <div className="mx-auto text-xl">
                <div className="mb-1 text-6xl font-bold">{pullRequests}</div>
                Pull Requests
                <BiGitPullRequest
                  className="mx-auto mt-2 fill-pinkRed"
                  size={40}
                />
              </div>
              <div className="mx-auto text-xl">
                <div className="mb-1 text-6xl font-bold">{openIssues}</div>
                Open Issues
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
          </Container>
        </div>
        <Container fadeIn noMargin className="mt-32 text-center ">
          <Image src={repoIcon} alt="" quality={100} width={72} height={72} />

          <h2 className="mt-8 text-2xl font-bold lg:text-3xl">
            Meet the Contributors
          </h2>
          <div className=" mx-auto  mt-6 flex max-w-7xl flex-wrap justify-center gap-4 sm:px-4  lg:p-8">
            {contributors.map((user) => (
              <Link
                passHref
                key={user.login}
                href={`https://github.com/${user.login}`}
              >
                <a className=" w-24 sm:w-32">
                  <div className="mx-auto">
                    <Image
                      width={64}
                      height={64}
                      className="rounded-full"
                      src={user.profile}
                      alt=""
                    />
                    <p className="pt-2 text-xs">
                      {user.displayName ? user.displayName : user.login}
                    </p>
                  </div>
                </a>
              </Link>
            ))}
          </div>

          <p className="mx-auto mt-10 text-sm leading-snug  text-gray-700 dark:text-gray-300 sm:max-w-xl sm:text-base">
            *This is live data from our GitHub. See yourself here? Tweet about
            it, brag it to your friends, or give yourself a pat in the back. You
            deserve it.
          </p>

          <p className="mt-4 text-xs text-gray-800 dark:text-gray-200  ">
            last updated at:
            {` `}
            {updatedDate.toLocaleTimeString()}
          </p>
        </Container>
        <Container>
          <div className="mt-20 text-center lg:mt-28">
            <div className="inline-flex overflow-hidden rounded-2xl drop-shadow-xl">
              <Image
                src={VignettePadding}
                width={64}
                height={64}
                quality={100}
              />
            </div>

            <h2 className="mt-3 text-2xl font-semibold">
              Meet the Vignette Team
            </h2>
            <p className="mx-auto mt-2 max-w-md">
              The team that started it all. We provided countless amounts of our
              knowledge, time and sometimes our own wallets to make this
              possible.
            </p>
          </div>
          <div className="mx-auto mt-10 flex max-w-7xl flex-wrap justify-center gap-4 ">
            {teamMembers.map((m: Member) => (
              <a href={m.url} key={m.name} className=" mx-8 my-2 text-center">
                <div className="inline-flex overflow-hidden rounded-full ">
                  <Image
                    alt=""
                    className=""
                    src={m.avatar}
                    width={64}
                    height={64}
                  />
                </div>
                <h4 className=" my-1 font-medium capitalize">{m.name}</h4>
                <p className="max-w-[9em] text-xs">{m.role}</p>
              </a>
            ))}
          </div>
        </Container>
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
  contributors: contributor[]
  commits: number
  pullRequests: number
  openIssues: number
  timestamp: number
}

export const getStaticProps: GetStaticProps = async () => {
  const client = createClient({
    url: process.env.REDIS_URL,
    password: process.env.REDIS_PW,
  })

  await client.connect()
  const data = await client.get(`contribs`)

  const parsed: cache = JSON.parse(data!)

  return {
    props: parsed, // will be passed to the page component as props
    revalidate: 10,
  }
}

export default OpenSource
