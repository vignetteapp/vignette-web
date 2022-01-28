import Container from 'components/Container'
import Nav from 'components/Nav'
import type { NextPage } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import MenuComp from 'components/MenuComp'
import Marquee from 'react-fast-marquee'

import sparkle from 'public/images/icons/sparkle.png'
import section1comp from 'public/images/comp/section1.png'
import puzzle from 'public/images/icons/puzzle.png'
import ExtensionCard from 'components/ExtensionCard'

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
      <Container className="mt-32 max-w-6xl px-4">
        <div className="flex flex-wrap justify-between gap-8">
          <div>
            <div className="flex items-center">
              <Image src={sparkle} width={64} height={64} />
              <h2 className="ml-2 text-4xl font-bold">
                Productively
                <br /> Beautiful
              </h2>
            </div>
            <p className="max-w-lg pt-8 text-xl lg:max-w-sm">
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

        <h2 className="text-4xl font-bold">Your workbench, Your canvas</h2>
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
    </>
  )
}

export default Home
