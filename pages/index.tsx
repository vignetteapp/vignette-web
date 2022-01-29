import type { NextPage } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Marquee from 'react-fast-marquee'

import { Nav, Container, ExtensionCard, MenuComp } from 'components'

import sparkle from 'public/images/icons/sparkle.png'
import section1comp from 'public/images/comp/section1.png'
import puzzle from 'public/images/icons/puzzle.png'
import shipwheel from 'public/images/icons/shipwheel.png'
import Profile from 'components/Profile'

interface Extension {
  name: string
  slug: string
}
const extensions: Extension[] = [
  { name: `ayane`, slug: `/ayane` },
  { name: `ayane`, slug: `/ayane` },
  { name: `ayane`, slug: `/ayane` },
  { name: `ayane`, slug: `/ayane` },
  { name: `ayane`, slug: `/ayane` },
  { name: `ayane`, slug: `/ayane` },
  { name: `ayane`, slug: `/ayane` },
  { name: `ayane`, slug: `/ayane` },
  { name: `ayane`, slug: `/ayane` },
  { name: `ayane`, slug: `/ayane` },
  { name: `ayane`, slug: `/ayane` },
  { name: `ayane`, slug: `/ayane` },
  { name: `ayane`, slug: `/ayane` },
  { name: `ayane`, slug: `/ayane` },
  { name: `ayane`, slug: `/ayane` },
  { name: `ayane`, slug: `/ayane` },
  { name: `ayane`, slug: `/ayane` },
  { name: `ayane`, slug: `/ayane` },
  { name: `ayane`, slug: `/ayane` },
  { name: `ayane`, slug: `/ayane` },
]

const Home: NextPage = () => {
  return (
    <>
      <Nav />
      <Container className="overflow-hidden pt-8 lg:relative">
        <div className="z-20 mx-auto max-w-7xl grid-cols-1 px-4 pb-8 lg:grid-cols-2 lg:gap-24 lg:pt-32 lg:pb-64 xl:grid">
          <div className="max-w-3xl">
            <h1 className="gradient-primary bg-clip-text text-7xl font-semibold text-transparent md:text-8xl">
              Streaming
              <br /> Redefined
            </h1>
            <p className="my-4 mb-8 max-w-[22rem] text-xl lg:mb-16 lg:max-w-[30rem] lg:text-2xl">
              Bring your inner creativity with Vignette, the open source,
              modular streaming toolkit for virtual streaming.
            </p>
            <Link href="/download" passHref>
              <a className="button">Get Vignette</a>
            </Link>
          </div>
        </div>
        <MenuComp />
      </Container>
      <Container className="mx-auto mt-32 max-w-6xl px-4">
        <div className="flex flex-wrap justify-between ">
          <div>
            <div className="flex items-center">
              <Image src={sparkle} width={64} height={64} />
              <h2 className="ml-2 text-3xl font-bold lg:text-4xl">
                Productively
                <br /> Beautiful
              </h2>
            </div>
            <p className="max-w-lg py-8 text-xl lg:max-w-sm">
              Vignette has been designed from the ground up, providing a
              flexible user interface and experience that feels simple, clean,
              and powerful.
              <br />
              <br /> The best part? It&apos;s{` `}
              <span className="font-semibold">themeable.</span>
            </p>
          </div>

          <Image src={section1comp} />
        </div>
      </Container>
      <Container className="mt-32 max-w-6xl px-4 text-center">
        <Image src={puzzle} />

        <h2 className="text-3xl font-bold lg:text-4xl">
          Your workbench, Your canvas
        </h2>
        <p className="mx-auto max-w-[34rem] pt-4 pb-12 text-xl">
          From custom model formats to extensions that provides additional
          features, Vignette is a platform for creativity. Make Vignette yours.
        </p>
        <Link href="/plugins" passHref>
          <a className="button">Explore Plugins</a>
        </Link>
      </Container>
      <Container noMargin className="py-8 pt-16">
        <Marquee speed={50} gradientWidth={0}>
          {extensions.map((ext, index) => (
            <ExtensionCard key={index} name={ext.name} />
          ))}
          {` `}
        </Marquee>
        <Marquee speed={50} delay={5} gradientWidth={0}>
          {extensions.map((ext, index) => (
            <ExtensionCard key={index} name={ext.name} />
          ))}
          {` `}
        </Marquee>
      </Container>
      <Container className="mt-32 flex max-w-5xl flex-wrap-reverse gap-8">
        <div className="relative px-60 py-56">
          <Profile
            src="https://owo.whats-th.is/67Bgkty.png"
            size={90}
            className="absolute top-12 left-0"
          />

          <Profile
            src="https://owo.whats-th.is/67Bgkty.png"
            size={140}
            className=" absolute top-0 left-28"
          />
          <Profile
            src="https://owo.whats-th.is/67Bgkty.png"
            size={120}
            className=" absolute top-12 right-20"
          />
          <Profile
            src="https://owo.whats-th.is/67Bgkty.png"
            size={160}
            className="absolute top-36 left-8"
          />
          <Profile
            src="https://owo.whats-th.is/67Bgkty.png"
            size={240}
            className=" absolute bottom-4 right-5"
          />
        </div>

        <div className="mt-auto mb-8 lg:mx-auto">
          <div className="flex">
            <h2 className="mr-8 text-3xl font-bold lg:text-4xl">
              Honestly
              <br /> Transparent
            </h2>
            <Image src={shipwheel} />
          </div>
          <p className="max-w-[22rem] pt-4 pb-16 text-xl">
            Development of Vignette happens in the open, and every decision we
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
      <Container className="mt-32 pb-80">
        <h2 className="text-center text-3xl font-bold lg:text-4xl">
          Our Sponsors
        </h2>
      </Container>
    </>
  )
}

export default Home
