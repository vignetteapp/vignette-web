import type { NextPage } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Marquee from 'react-fast-marquee'

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
import section1comp from 'public/images/comp/section1.png'
import puzzle from 'public/images/icons/puzzle.png'
import shipwheel from 'public/images/icons/shipwheel.png'
import avatar from 'public/images/avatar.png'
import Sponsors from 'components/sections/Sponsors'

const Home: NextPage = () => {
  return (
    <>
      <SEO />
      <Nav />
      <Container className="overflow-hidden pt-8 lg:relative">
        <div className="z-20 mx-auto grid-cols-1 px-4 pb-8 lg:max-w-7xl lg:grid-cols-2 lg:gap-24  lg:pt-32 lg:pb-64 xl:grid">
          <div className="lg:max-w-3xl">
            <h1 className="gradient-primary bg-clip-text text-6xl font-semibold text-transparent lg:text-8xl">
              Streaming,
              <br /> Redefined.
            </h1>
            <p className="my-4 mb-8 max-w-[22rem] text-xl lg:mb-16 lg:max-w-[30rem] lg:text-2xl">
              Bring your inner creativity with Vignette, the open source modular
              streaming toolkit for virtual streaming.
            </p>
            <Link href="/download" passHref>
              <a className="button">Get Vignette</a>
            </Link>
          </div>
        </div>
        <MenuComp />
      </Container>
      <Container
        parallax
        offset={10}
        fadeIn
        id="design"
        className="mx-auto mt-28 max-w-6xl px-4 pt-16"
      >
        <div className="flex flex-wrap justify-between ">
          <Container noMargin>
            <div className="flex items-center">
              <Image src={sparkle} width={64} height={64} alt="" />
              <h2 className="ml-2 text-3xl font-bold lg:text-4xl">
                Productively
                <br /> Beautiful
              </h2>
            </div>
            <p className="max-w-lg py-8 text-lg lg:max-w-sm lg:text-xl">
              Vignette has been designed from the ground up, providing a
              flexible user interface and experience that feels simple, clean,
              and powerful.
              <br />
              <br /> The best part? It&apos;s{` `}
              <span className="font-semibold">themeable.</span>
            </p>
          </Container>
          <Container noMargin offset={10}>
            <Image src={section1comp} alt="" />
          </Container>
        </div>
      </Container>
      <Container fadeIn noMargin parallax offset={10}>
        <Container
          id="customization"
          className="mt-28 max-w-6xl px-4 pt-16 text-center"
        >
          <Image src={puzzle} quality={95} alt="" />

          <h2 className="text-3xl font-bold lg:text-4xl">
            Your workbench, Your canvas
          </h2>
          <p className="mx-auto max-w-[34rem] pt-4 pb-8 text-lg lg:pb-12 lg:text-xl">
            From custom model formats to extensions that provides additional
            features, Vignette is a platform for creativity. Make Vignette
            yours.
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
        parallax
        offset={10}
        id="transparency"
        className="mt-28 flex max-w-5xl flex-wrap-reverse gap-8 pt-16 lg:flex-nowrap"
      >
        <Image src={avatar} width={520} height={460} alt="" />

        <div className="mx-auto mt-auto mb-6 lg:mb-8">
          <div className="flex">
            <h2 className="mr-6 text-3xl font-bold lg:text-4xl">
              Honestly
              <br /> Transparent
            </h2>
            <Image quality={95} src={shipwheel} alt="" />
          </div>
          <p className="max-w-[22rem] pb-8 pt-4 text-lg lg:pb-16 lg:text-xl">
            The development of Vignette happens in the open. Every decision we
            make, the community always has a say. Vignette is an ecosystem and a
            community, not a product.
          </p>
          <Link href="/about">
            <a className="rounded-full bg-pinkRed px-20 py-3 text-lg font-bold text-white shadow">
              About Us
            </a>
          </Link>
        </div>
      </Container>
      <Container parallax offset={10} fadeIn>
        <Sponsors />
      </Container>

      <Footer />
    </>
  )
}

export default Home
