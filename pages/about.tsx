import type { NextPage, GetStaticProps } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import repoIcon from 'public/images/icons/repo.png'

import { BiGitPullRequest } from 'react-icons/bi'
import { Nav, Container, SEO, Footer } from 'components'

import { createClient } from 'redis'
import donationImage from 'public/images/donations.png'
import VignettePadding from 'public/images/logo-bg.svg'
import teamMembers from 'data/members.json'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'

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
}) => {
  const { t } = useTranslation(`about`)

  return (
    <>
      <SEO title="About" />
      <Nav />
      <Container className="pt-8 lg:pt-16">
        <div className="z-20 mx-auto px-2 pb-8 lg:max-w-7xl ">
          <h1 className="lg:text-0xl bg-gradient-to-br from-[#005BEA] to-[#00C6FB] bg-clip-text text-4xl font-bold text-transparent xxs:text-5xl lg:text-9xl">
            {t(`title1`)} <br />
            {t(`title2`)}
          </h1>
          <p className="my-4 mb-8 mt-8 text-lg sm:px-2 sm:text-xl lg:mb-20 lg:text-2xl">
            {t(`hero-p`)}
          </p>
          <Container offset={10} noMargin fadeIn>
            <div className="mx-auto flex flex-wrap gap-8 pb-16 text-center">
              <div className="mx-auto text-xl">
                <div className="mb-1 text-6xl font-bold">{commits}</div>
                {t(`commits`)}
                <BiGitPullRequest
                  className="mx-auto mt-2 fill-pinkRed"
                  size={40}
                />
              </div>
              <div className="mx-auto text-xl">
                <div className="mb-1 text-6xl font-bold">{pullRequests}</div>
                {t(`pull-requests`)}
                <BiGitPullRequest
                  className="mx-auto mt-2 fill-pinkRed"
                  size={40}
                />
              </div>
              <div className="mx-auto text-xl">
                <div className="mb-1 text-6xl font-bold">{openIssues}</div>
                {t(`open-issues`)}
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
                {t(`visit-github-button`)}
              </a>
            </div>
          </Container>
        </div>
        <Container fadeIn noMargin className="mt-32 text-center ">
          <Image src={repoIcon} alt="" quality={100} width={72} height={72} />

          <h2 className="mt-8 text-2xl font-bold lg:text-3xl">
            {t(`section1-title`)}
          </h2>
          <div className=" mx-auto  mt-6 flex max-w-6xl flex-wrap justify-center gap-4 px-0 lg:p-8 ">
            {contributors.map((user) => (
              <Link
                passHref
                key={user.login}
                href={`https://github.com/${user.login}`}
              >
                <a className="p-4">
                  <div className="mx-auto">
                    <Image
                      width={64}
                      height={64}
                      className="rounded-full"
                      src={user.profile}
                      alt=""
                    />
                  </div>
                </a>
              </Link>
            ))}
          </div>

          <p className="mx-auto mt-8 text-xs leading-snug  text-gray-700 dark:text-gray-300 sm:max-w-md sm:text-sm">
            {t(`section1-p`)}
          </p>

          <p className="mt-4 text-xs text-gray-800 dark:text-gray-200  ">
            {t(`updates-daily-text`)}
          </p>
        </Container>
        <Container>
          <div className="mt-14 text-center lg:mt-28">
            <div className="inline-flex overflow-hidden rounded-2xl drop-shadow-xl">
              <Image
                alt=""
                src={VignettePadding}
                width={64}
                height={64}
                quality={100}
              />
            </div>

            <h2 className="mt-3 text-2xl font-semibold">
              {t(`section2-title`)}
            </h2>
            <p className="mx-auto mt-2 max-w-md">{t(`section2-p`)}</p>
          </div>
          <div className="mx-auto mt-10 flex flex-wrap justify-center gap-4 lg:max-w-5xl ">
            {teamMembers.map((m: Member) => (
              <a
                href={m.url}
                key={m.name}
                className=" my-2 text-center lg:mx-8"
              >
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
        <Container className="mt-12 text-center">
          <Image src={donationImage} width={549} height={549} alt="" />
          <h1 className="text-3xl font-bold"> {t(`section3-title`)}</h1>
          <p className="mx-auto mt-2 mb-2 max-w-[34em]">{t(`section3-p`)}</p>
          <a className=" text-pinkRed hover:underline">
            {t(`how-vignette-gives-back-button`)}
          </a>
        </Container>
      </Container>

      <Footer />
    </>
  )
}

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

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const client = createClient({
    url: process.env.REDIS_URL,
    password: process.env.REDIS_PW,
  })

  await client.connect()
  const data = await client.get(`contribs`)

  const parsed: cache = JSON.parse(data as string)

  return {
    props: {
      ...parsed,
      ...(await serverSideTranslations(locale as string, [
        `about`,
        `nav`,
        `common`,
      ])),
    }, // will be passed to the page component as props
    revalidate: 10,
  }
}

export default OpenSource
