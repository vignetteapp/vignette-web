import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import type { GetStaticProps, NextPage } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { cache } from './about'
import { createClient } from 'redis'

import { Nav, MenuComp, SEO, Footer, ExtensionCard } from 'components'

import sparkle from 'public/images/icons/sparkle.png'
import section1comp from 'public/images/comp/section1-brain.png'
import puzzle from 'public/images/icons/puzzle.png'
import shipwheel from 'public/images/icons/shipwheel.png'
import Partners from 'components/sections/Partners'

import { useRouter } from 'next/router'
import Button from 'components/Button'
import Fadein from 'components/FadeIn'
import Marquee from 'react-fast-marquee'
import extensions from 'data/extensions'

const Home: NextPage<cache> = ({ contributors }) => {
  const { t } = useTranslation(`home`)
  const { locale } = useRouter()
  return (
    <>
      <SEO />
      <Nav />
      <div
        className="z-20 mt-[74px] overflow-x-clip pt-8 lg:relative"
        id="content"
      >
        <div className="mx-auto mt-8 max-w-7xl grid-cols-1 px-6 lg:grid-cols-2 lg:gap-24 lg:pt-24 lg:pb-64 xl:grid">
          <div className="pb-8 lg:max-w-4xl">
            <h1
              className={
                `gradient-primary bg-gradient-to-br bg-clip-text text-6xl font-bold tracking-tight text-transparent ` +
                ([`en`, `ko`, `fil`, `de`].includes(locale as string)
                  ? `xs:text-7xl lg:text-8xl   `
                  : `xs:text-6xl lg:text-7xl `)
              }
            >
              {t(`title1`)}
              <br /> {t(`title2`)}
            </h1>
            <p className="my-4 text-lg text-neutral-900 dark:text-neutral-300 xs:text-xl lg:mb-8 lg:max-w-[36ch] ">
              {t(`hero-p`)}
            </p>

            <Button
              href="https://go.vignetteapp.org/discord"
              className=" inline-block sm:hidden"
            >
              {t(`join-discord-short`)}&rarr;
            </Button>
            <Button
              size="large"
              href="https://go.vignetteapp.org/discord"
              className=" hidden sm:inline-block"
            >
              {t(`join-discord-long`)} &rarr;
            </Button>
          </div>
        </div>
        <MenuComp />
      </div>

      <Fadein id="design" className="relative mx-auto  ">
        <div className="relative md:bg-none">
          <div className="flex w-full items-center justify-center px-6 pt-8 ">
            <div className="w-full">
              <div className="container grid grid-cols-1 items-center md:grid-cols-2">
                <div className="mb-8 md:mb-0">
                  <div className="mb-7 flex justify-center text-sm text-neutral-900 dark:text-[#ABB3BF] md:justify-start">
                    <hr className="absolute top-0 left-0 hidden w-full dark:border-neutral-700 sm:block md:top-24" />
                  </div>
                  <div className="text-center text-neutral-800 dark:text-neutral-300 md:text-left">
                    <div className="flex flex-col items-center pt-4 md:items-start">
                      <span className="text-sm font-semibold uppercase text-pinkRed">
                        {t(`design-smalltitle`)}
                      </span>
                      <h2 className="text-3xl font-semibold tracking-[-0.04em] md:text-[40px] md:leading-[48px]">
                        {t(`design-title-line1`)}
                        {` `}
                        {t(`design-title-line2`)}
                      </h2>
                      <p className="max-w-[480px] pt-3 text-base md:text-lg">
                        {t(`design-p`)}
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-center pt-7 md:justify-start">
                    <Button>Learn more &rarr;</Button>
                  </div>
                </div>
                <div className="relative z-40 rounded-[50px] bg-gray-50 text-center dark:bg-neutral-900 sm:p-8">
                  <div className="rounded-[25px] border bg-white p-6 text-center shadow-md dark:bg-[#181a1b] sm:p-8 sm:shadow-xl">
                    <Image
                      src={section1comp}
                      alt=""
                      width={1280}
                      height={720}
                      quality={90}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fadein>

      <div className="mt-28 border-neutral-800 bg-gray-50 py-16 shadow-inner dark:border-t dark:border-b dark:bg-neutral-900">
        <Fadein>
          <div id="extensions" className="container  text-center ">
            {/* <Image src={puzzle} quality={95} alt="" width={60} height={60} /> */}
            <span className="text-sm font-semibold uppercase text-pinkRed">
              {t(`extensions-smalltitle`)}
            </span>
            <h2 className="text-2xl font-bold tracking-[-0.04em] text-neutral-800  dark:text-neutral-100 xxs:text-3xl">
              {t(`extensions-title`)}
            </h2>
            <p className="mx-auto max-w-[34rem] pt-4 italic text-neutral-900 dark:text-neutral-300 sm:text-lg">
              {t(`extensions-in-development`)}
            </p>
            {/* <Link href="/extensions" passHref>
            <a className="button"> {t(`explore-extensions-button`)}</a>
          </Link> */}
          </div>
          <div className=" mt-8" title="In development...">
            <Marquee speed={50} gradientWidth={0}>
              {extensions.map((ext, index) => (
                <ExtensionCard key={index} name={ext.name} />
              ))}
            </Marquee>
          </div>
        </Fadein>
      </div>
      <Fadein id="transparency" className="container mt-20  gap-8  ">
        <div className="mx-auto mt-auto mb-6  text-center lg:mb-8">
          {/* <Image quality={95} src={shipwheel} alt="" width={60} height={60} /> */}

          <span className="text-sm font-semibold uppercase text-pinkRed">
            {t(`transparency-smalltitle`)}
          </span>
          <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100  xxs:text-3xl xs:text-3xl">
            {t(`transparency-title-line1`)}
            {` `}
            {t(`transparency-title-line2`)}
          </h2>
          <p className="mx-auto max-w-[24rem] pb-8 pt-3 text-neutral-900 dark:text-neutral-300 sm:text-xl">
            {t(`transparency-p`)}
          </p>
          <div className="mx-auto mb-8 flex flex-wrap justify-center gap-4 sm:max-w-5xl sm:gap-8">
            {contributors.map((c) => (
              <div
                key={c.login}
                className="relative h-11 w-11 rounded-full bg-slate-100 shadow dark:bg-neutral-800 lg:h-16 lg:w-16"
              >
                <Image
                  src={c.profile}
                  layout="fill"
                  className="rounded-full"
                  alt=""
                />
              </div>
            ))}
          </div>
          <Button href="/about">{t(`about-button`)} &rarr;</Button>
        </div>
      </Fadein>
      <Fadein>
        <Partners />
      </Fadein>

      <Footer />
    </>
  )
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
      contributors: parsed.contributors,
      ...(await serverSideTranslations(locale as string, [
        `home`,
        `nav`,
        `common`,
      ])),
    }, // will be passed to the page component as props
    revalidate: 10,
  }
}

export default Home
