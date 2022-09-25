import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import type { GetStaticProps, NextPage } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { cache } from './about'
import { createClient } from 'redis'

import { Nav, MenuComp, SEO, Footer } from 'components'

import sparkle from 'public/images/icons/sparkle.png'
import section1comp from 'public/images/comp/section1-brain.png'
import puzzle from 'public/images/icons/puzzle.png'
import shipwheel from 'public/images/icons/shipwheel.png'
import Partners from 'components/sections/Partners'
import { useRouter } from 'next/router'
import Button from 'components/Button'
import Fadein from 'components/FadeIn'

const Home: NextPage<cache> = ({ contributors }) => {
  const { t } = useTranslation(`home`)
  const { locale } = useRouter()
  return (
    <>
      <SEO />
      <Nav />
      <div
        className="z-20 overflow-hidden bg-gradient-to-br pt-8 lg:relative"
        id="content"
      >
        <div className="mx-auto max-w-7xl grid-cols-1 px-6 pb-8 lg:max-w-7xl lg:grid-cols-2 lg:gap-24 lg:pt-24 lg:pb-72 xl:grid">
          <div className="pb-8 lg:max-w-3xl">
            <h1
              style={{
                paddingLeft: `0.2em`,
                marginLeft: `-0.2em`,
                paddingBottom: `0.2em`,
                marginBottom: `-0.2em`,
              }}
              className={
                `gradient-primary bg-clip-text text-6xl font-bold tracking-tight text-transparent ` +
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
              href="https://go.vignetteapp.org/discord"
              className=" hidden sm:inline-block"
            >
              {t(`join-discord-long`)} &rarr;
            </Button>
          </div>
        </div>
        <MenuComp />
      </div>

      <Fadein id="design" className="container mx-auto mt-20 pt-16 lg:mt-28">
        <div className="flex flex-wrap justify-between ">
          <div>
            <div className="flex items-center gap-4">
              <Image src={sparkle} width={64} height={64} alt="" />
              <h2 className="max-w-[14rem] text-2xl font-bold xxs:text-2xl">
                {t(`design-title-line1`)}
                <br /> {t(`design-title-line2`)}
              </h2>
            </div>
            <p className="max-w-sm py-4 pb-6 sm:py-6 sm:text-lg lg:max-w-sm">
              {t(`design-p`)}
            </p>
          </div>
          <div>
            <Image
              src={section1comp}
              alt=""
              width={544}
              height={270.5}
              quality={90}
            />
          </div>
        </div>
      </Fadein>
      <Fadein>
        <div
          id="plugins"
          className="container mt-20 pt-16 text-center lg:mt-28"
        >
          <Image src={puzzle} quality={95} alt="" width={60} height={60} />

          <h2 className="text-2xl font-bold xxs:text-2xl">
            {t(`plugins-title`)}
          </h2>
          <p className="mx-auto max-w-[34rem] pt-4 sm:text-lg">
            {t(`extensions-in-development`)}
          </p>
          {/* <Link href="/plugins" passHref>
            <a className="button"> {t(`explore-plugins-button`)}</a>
          </Link> */}
        </div>
        {/* <div noMargin offset={10} className=" pt-16">
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
        </div> */}
      </Fadein>

      <Fadein
        id="transparency"
        className="container mt-20  gap-8 pt-16 lg:mt-28 "
      >
        <div className="mx-auto mt-auto mb-6 text-center lg:mb-8">
          <Image quality={95} src={shipwheel} alt="" width={60} height={60} />
          <h2 className="text-3xl font-bold xxs:text-2xl">
            {t(`transparency-title-line1`)}
            <br /> {t(`transparency-title-line2`)}
          </h2>
          <p className="mx-auto max-w-[22rem] pb-8 pt-4 sm:text-lg">
            {t(`transparency-p`)}
          </p>
          <div className="mx-auto mb-8 flex flex-wrap justify-center gap-4 sm:max-w-7xl sm:gap-8">
            {contributors.map((c) => (
              <div
                key={c.login}
                className="relative h-11 w-11  rounded-full bg-slate-100 dark:bg-neutral-800 lg:h-16 lg:w-16"
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
      <Fadein className="container">
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
