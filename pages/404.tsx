import type { NextPage } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Blahaj from 'public/images/blahaj.jpg'
import text404 from 'public/images/404text.png'

import { useRouter } from 'next/router'

import { Nav, Container, SEO, Footer } from 'components'

const Custom404: NextPage = () => {
  const router = useRouter()
  return (
    <>
      <SEO title="You hit a dead end." />
      <Nav />
      <Container className=" max-w-7xl ">
        <div className="z-20 mx-auto  text-center ">
          <div className="animation-flicker   mt-4">
            <Image src={text404} alt="404" width={207} height={45} />
          </div>

          <h1 className="text-6xl font-semibold lg:text-7xl">
            You hit a dead end.
          </h1>
          <p className="my-5 mt-6 text-xl lg:text-2xl">
            Here&apos;s a BLÅHAJ to guide you back.
          </p>
          <div className="my-2 mx-auto inline-flex overflow-clip rounded-xl drop-shadow-lg">
            <Image src={Blahaj} alt="" width="712" height="450" />
          </div>
          <div className="mx-auto mt-8 mb-8 flex justify-center">
            <button
              onClick={() => router.back()}
              className="mx-3 w-44 items-center rounded-full bg-pinkRed px-8 py-1 text-lg font-semibold text-white "
            >
              Go Back
            </button>
            <Link
              passHref
              href="https://www.ikea.com/us/en/p/blahaj-soft-toy-shark-90373590/"
            >
              <a className="mx-3 inline-flex w-44 items-center rounded-full bg-yellow-500 px-8 py-1  font-semibold text-white ">
                <span className="mx-auto">Get a BLÅHAJ</span>
              </a>
            </Link>
          </div>

          <a
            href="https://twitter.com/niichi021"
            className="pt-4 text-sm text-gray-700 dark:text-gray-300"
          >
            (image sauce)
          </a>
        </div>
      </Container>
      <Footer />
    </>
  )
}

export default Custom404
