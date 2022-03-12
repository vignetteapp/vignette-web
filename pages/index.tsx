import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import type { GetStaticProps, NextPage } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Marquee from 'react-fast-marquee'
import { cache } from './about'
import { createClient } from 'redis'

import {
  Nav,
  Container,
  ExtensionCard,
  MenuComp,
  SEO,
  Footer,
} from 'components'
import extensions from 'data/extensions'

import sparkle from 'public/images/icons/sparkle.png'
import section1comp from 'public/images/comp/section1-brain.png'
import puzzle from 'public/images/icons/puzzle.png'
import shipwheel from 'public/images/icons/shipwheel.png'
import Partners from 'components/sections/Partners'
import { useRouter } from 'next/router'

const Home: NextPage<cache> = ({ contributors }) => {
  const { t } = useTranslation(`home`)
  const { locale } = useRouter()
  return (
    <>
      <SEO />
      <Nav />
      <Container className="z-20 overflow-hidden pt-8 lg:relative">
        <div className="mx-auto grid-cols-1  pb-8 sm:px-2 lg:max-w-7xl lg:grid-cols-2 lg:gap-24 lg:px-4 lg:pt-32 lg:pb-72 xl:grid">
          <div className="lg:max-w-3xl">
            <h1
              style={{
                paddingLeft: `0.2em`,
                marginLeft: `-0.2em`,
                paddingBottom: `0.2em`,
                marginBottom: `-0.2em`,
              }}
              className={
                `gradient-primary bg-clip-text text-4xl font-bold text-transparent ` +
                ([`en`, `ko`, `fil`, `de`].includes(locale as string)
                  ? `xxs:text-6xl lg:text-8xl   `
                  : `xxs:text-5xl lg:text-7xl `)
              }
            >
              {t(`title1`)}
              <br /> {t(`title2`)}
            </h1>
            <p className="my-4 mb-8 max-w-[22rem]  xxs:text-xl lg:mb-16 lg:max-w-[30rem] lg:text-2xl">
              {t(`hero-p`)}
            </p>

            <a
              href="https://go.vignetteapp.org/discord"
              className="button inline-block sm:hidden"
            >
              {t(`join-discord-short`)}
            </a>
            <a
              href="https://go.vignetteapp.org/discord"
              className="button hidden sm:inline-block"
            >
              {t(`join-discord-long`)}
            </a>
          </div>
        </div>
        <MenuComp />
      </Container>
      <Container
        offset={10}
        fadeIn
        id="design"
        className="mx-auto mt-20 max-w-6xl px-4 pt-16 lg:mt-28"
      >
        <div className="flex flex-wrap justify-between ">
          <Container noMargin>
            <div className="flex items-center">
              <Image src={sparkle} width={64} height={64} alt="" />
              <h2 className="ml-2 max-w-[14rem] text-2xl font-bold xxs:text-3xl">
                {t(`design-title-line1`)}
                <br /> {t(`design-title-line2`)}
              </h2>
            </div>
            <p className="max-w-sm py-8 xxs:text-lg lg:max-w-sm">
              {t(`design-p`)}
            </p>
          </Container>
          <Container noMargin offset={10}>
            <Image
              src={section1comp}
              alt=""
              width={544}
              height={270.5}
              quality={90}
            />
          </Container>
        </div>
      </Container>
      <Container fadeIn noMargin offset={10}>
        <Container
          id="plugins"
          className="mt-20 max-w-6xl px-4 pt-16 text-center lg:mt-28"
        >
          <Image src={puzzle} quality={95} alt="" width={60} height={60} />

          <h2 className="text-2xl font-bold xxs:text-3xl">
            {t(`plugins-title`)}
          </h2>
          <p className="mx-auto max-w-[34rem] pt-4 pb-8 xxs:text-lg lg:pb-12">
            {t(`plugins-p`)}
          </p>
          <Link href="/plugins" passHref>
            <a className="button"> {t(`explore-plugins-button`)}</a>
          </Link>
        </Container>
        <Container noMargin offset={10} className=" pt-16">
          <Marquee speed={50} gradientWidth={0}>
            {extensions.map((ext, index) => (
              <ExtensionCard key={index} name={ext.name} />
            ))}
          </Marquee>
          <Marquee speed={40} delay={0.3} className="pb-8" gradientWidth={0}>
            {extensions.map((ext, index) => (
              <ExtensionCard key={index} name={ext.name} />
            ))}
          </Marquee>
        </Container>
      </Container>

      <Container
        fadeIn
        offset={10}
        id="transparency"
        className="mt-20 max-w-5xl  gap-8 pt-16 lg:mt-28 "
      >
        <div className="mx-auto mt-auto mb-6 text-center lg:mb-8">
          <Image quality={95} src={shipwheel} alt="" width={60} height={60} />
          <h2 className="text-3xl font-bold xxs:text-3xl">
            {t(`transparency-title-line1`)}
            <br /> {t(`transparency-title-line2`)}
          </h2>
          <p className="mx-auto max-w-[22rem] pb-8 pt-4 xxs:text-lg">
            {t(`transparency-p`)}
          </p>
          <div className="mx-auto mb-8 flex flex-wrap justify-center gap-4 sm:max-w-7xl sm:gap-8">
            {contributors.map((c) => (
              <div
                key={c.login}
                className="relative h-11 w-11  lg:h-16 lg:w-16"
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
          <Link href="/about" passHref>
            <a className="button">{t(`about-button`)}</a>
          </Link>
        </div>
      </Container>
      <Container offset={10} fadeIn>
        <Partners />
      </Container>

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
