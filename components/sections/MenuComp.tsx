import menucomp from 'public/images/comp/menucomp.png'
import Image from 'next/future/image'
import { Parallax } from 'components'
import { motion } from 'framer-motion'
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
    <motion.div
      transition={{ duration: 0.2 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className=""
    >
      <div className="z-40 mt-8 py-8 sm:relative sm:py-16 lg:absolute lg:inset-y-0 lg:right-0 lg:w-[calc(50%-1rem)] lg:pt-8">
        <div className=" hidden sm:block">
          <Parallax
            offset={20}
            className="absolute inset-y-0 left-1/2 z-40 mt-3 w-screen rounded-l-3xl  bg-gray-50 dark:bg-zinc-800 lg:left-80 lg:right-0 lg:w-full"
          />
          <Parallax offset={30} className="relative z-50">
            <svg
              className="absolute right-1/2 top-4  -mr-3 lg:left-0 lg:m-0"
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
        <Parallax
          offset={mobile ? 20 : 50}
          className="relative z-50 -mr-40 mt-6 px-12 pb-8 sm:mx-auto lg:mt-14"
        >
          <Image
            className="inline-flex rounded-[1.8vw] shadow-xl ring-opacity-5 lg:max-h-[40rem] lg:w-auto lg:max-w-none "
            priority
            src={menucomp}
            alt=""
            width={1386}
            height={686}
            quality={90}
          />
        </Parallax>
      </div>
    </motion.div>
  )
}

export default MenuComp
