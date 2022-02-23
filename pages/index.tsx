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

const Home: NextPage<cache> = ({ contributors }) => {
  return (
    <>
      <SEO />
      <Nav />
      <Container className="z-20 overflow-hidden pt-8 md:overflow-visible lg:relative">
        <div className="mx-auto grid-cols-1  pb-8 sm:px-2 lg:max-w-7xl lg:grid-cols-2 lg:gap-24 lg:px-4 lg:pt-32 lg:pb-72 xl:grid">
          <div className="lg:max-w-3xl">
            <h1 className="gradient-primary bg-clip-text text-4xl  font-bold text-transparent lg:text-8xl  xxs:text-6xl  ">
              Streaming,
              <br /> Redefined.
            </h1>
            <p className="my-4 mb-8 max-w-[22rem]  lg:mb-16 lg:max-w-[30rem] lg:text-2xl xxs:text-xl">
              Bring your inner creativity with Vignette, the open source modular
              streaming toolkit for virtual streaming.
            </p>
            <Link href="https://go.vignetteapp.org/discord" passHref>
              <a className="button">
                Join our Discord{` `}
                <span className="hidden sm:inline">for updates</span>
              </a>
            </Link>
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
              <h2 className="ml-2 text-2xl font-bold xxs:text-3xl">
                A new way to
                <br /> stream
              </h2>
            </div>
            <p className="max-w-sm py-8 lg:max-w-sm xxs:text-lg">
              Combining the best of thoughtful design, machine learning, and a
              open ecosystem, Vignette is a next-generation toolkit for
              streaming. And all you need is a camera.
            </p>
          </Container>
          <Container noMargin offset={10}>
            <Image
              src={section1comp}
              alt=""
              width={544}
              height="270.5"
              quality={90}
            />
          </Container>
        </div>
      </Container>
      <Container fadeIn noMargin offset={10}>
        <Container
          id="customization"
          className="mt-20 max-w-6xl px-4 pt-16 text-center lg:mt-28"
        >
          <Image src={puzzle} quality={95} alt="" width={60} height={60} />

          <h2 className="text-2xl font-bold xxs:text-3xl">
            Extensible by default
          </h2>
          <p className="mx-auto max-w-[34rem] pt-4 pb-8 lg:pb-12 xxs:text-lg">
            Vignette is designed with extensibility in mind. Want something?
            There&apos;s definitely an extension for it.
          </p>
          <Link href="/plugins" passHref>
            <a className="button">Explore Plugins</a>
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
            Open and
            <br /> Transparent
          </h2>
          <p className="mx-auto max-w-[22rem] pb-8 pt-4 xxs:text-lg">
            Vignette is made with the community in mind. This is why Vignette is
            licensed and created with openness and transparency in mind.
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
            <a className="button">About</a>
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

export const getStaticProps: GetStaticProps = async () => {
  const client = createClient({
    url: process.env.REDIS_URL,
    password: process.env.REDIS_PW,
  })

  await client.connect()
  const data = await client.get(`contribs`)

  const parsed: cache = JSON.parse(data as string)

  return {
    props: parsed, // will be passed to the page component as props
    revalidate: 10,
  }
}

export default Home
