import { Layout, Button, BottomBar, PrimaryText } from '@/components'
import Link from 'next/link'

import Banner from '@/components/banner'
import React, { SetStateAction, Dispatch } from 'react'

// eslint-disable-next-line react/display-name
const Home: React.FC<{
  bannerOpened: boolean
  setBannerOpened: Dispatch<SetStateAction<boolean>>
}> = ({ bannerOpened, setBannerOpened }) => {
  return (
    <Layout id="home" className="lg:z-30" data-sidebar>
      <Banner open={bannerOpened} setOpen={setBannerOpened} />
      <div className="flex flex-col hero z-30 shadow-lg min-h-screen ">
        <div className="text-center m-auto pt-10">
          <PrimaryText className="logo p-3">Vignette</PrimaryText>

          <p className="md:text-3xl text-xl font-semibold pt-4 p-1 dark:text-gray-200">
            Make your streams more virtual.
          </p>
          <div className="mt-12">
            <p className="text-subtle dark:text-subtle-dark font-medium tracking-tight">
              Free and Open Source
            </p>
            <a href="#download">
              <Button className="hover:scale-105">Download</Button>
            </a>
          </div>
        </div>

        <Link href="#about" passHref>
          <a className="bottom-0 mx-auto flex flex-col align-center items-center p-4 md:pb-6 pb-12">
            <p className="text-subtle dark:text-subtle-dark text-lg tracking-tight">
              Learn more
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              role="img"
              className="text-subtle dark:text-subtle-dark "
              width="1.3rem"
              height="1.3rem"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 24 24"
            >
              <g fill="none">
                <path
                  d="M4 9l8 8l8-8"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </g>
            </svg>
          </a>
        </Link>

        <BottomBar />
      </div>
    </Layout>
  )
}

export default Home
