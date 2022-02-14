import menucomp from 'public/images/comp/menucomp.png'
import Image from 'next/image'
import { Container, Parallax } from 'components'

import { useState, useEffect } from 'react'

// Hook
const useWindowSize = () => {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  })
  useEffect(() => {
    // Handler to call on window resize
    const handleResize = () => {
      // Set window width/height to state
      if (typeof window != undefined) {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        })
      }
    }
    // Add event listener
    window.addEventListener(`resize`, handleResize)
    // Call handler right away so state gets updated with initial window size
    handleResize()
    // Remove event listener on cleanup
    return () => window.removeEventListener(`resize`, handleResize)
  }, []) // Empty array ensures that effect is only run on mount
  return windowSize
}

const MenuComp = () => {
  const size = useWindowSize()
  const mobile = size.width < 1024

  return (
    <div className="sm:mx-auto sm:max-w-7xl sm:px-6 ">
      <div className="py-8 sm:relative sm:mt-4 sm:py-16 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:pt-8">
        <div className="hidden sm:block">
          <Parallax
            offset={20}
            className="absolute inset-y-0 top-0 left-1/2 mt-3 w-screen rounded-l-3xl bg-gray-100 transition duration-100 dark:bg-zinc-800 lg:left-80 lg:right-0 lg:w-full"
          />
          <Parallax offset={30}>
            <svg
              className="absolute right-1/2 top-4 -mr-3 lg:left-0 lg:m-0"
              width="404"
              height="392"
              fill="none"
              viewBox="0 0 404 392"
            >
              <defs>
                <pattern
                  id="837c3e70-6c3a-44e6-8854-cc48c737b659"
                  x="0"
                  y="0"
                  width="20"
                  height="20"
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x="0"
                    y="0"
                    width="4"
                    height="4"
                    className="text-gray-200 transition duration-100 dark:text-neutral-600"
                    fill="currentColor"
                  ></rect>
                </pattern>
              </defs>
              <rect
                width="404"
                height="392"
                fill="url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"
              ></rect>
            </svg>
          </Parallax>
        </div>
        <Container
          parallax
          noMargin
          offset={mobile ? 10 : 50}
          className="relative -mr-40 mt-8 px-12 pb-8 sm:mx-auto lg:mt-14"
        >
          <div className="hidden w-full rounded-[17px] shadow-2xl ring-opacity-5 lg:inline-flex lg:h-full lg:w-auto lg:max-w-none">
            <Image
              className=""
              priority
              src={menucomp}
              alt=""
              layout="fixed"
              width={1043}
              height={643}
              quality={90}
            />
          </div>
          <div className=" inline-flex w-full rounded-[17px] shadow-2xl ring-opacity-5 lg:hidden">
            <Image
              className=""
              priority
              src={menucomp}
              alt=""
              width={1043}
              height={643}
              quality={90}
            />
          </div>
        </Container>
      </div>
    </div>
  )
}

export default MenuComp
