import type { NextPage } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Blajah from 'public/images/blahaj.jpg'
import { useRouter } from 'next/router'

import { Nav, Container, SEO, Footer } from 'components'

const Custom404: NextPage = () => {
  const router = useRouter()
  return (
    <>
      <SEO />
      <Nav />
      <Container className="overflow-hidden pt-8 lg:relative">
        <div className="z-20 mx-auto grid-cols-1 text-center xl:grid">
          <h1 className="text-6xl font-semibold lg:text-8xl">
            You hit a dead end.
          </h1>
          <br></br>
          <p className="text-xl lg:text-2xl">
            Here's a BLÅHAJ to guide you back.
          </p>
          <br></br>
          <div>
            <Image src={Blajah} alt="" width="712px" height="466px"></Image>
            <br></br>
            <button
              onClick={() => router.back()}
              className="m-3 rounded-full bg-pinkRed px-8 py-1 font-semibold text-white "
            >
              Go Back
            </button>
            <br></br>
            <Link
              passHref={true}
              href="https://www.ikea.com/us/en/p/blahaj-soft-toy-shark-90373590/"
            >
              <button className="m-3 rounded-full bg-yellow-500 px-8 py-1 font-semibold text-white ">
                Get a BLÅHAJ
              </button>
            </Link>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  )
}

export default Custom404
