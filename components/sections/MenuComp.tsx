import Image from "next/legacy/image"
import { Parallax } from 'components'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import menucomp from 'public/images/comp/menucomp.png'
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
    <div className="z-40 py-8 sm:relative sm:mt-8 lg:absolute lg:inset-y-0 lg:right-0 lg:w-[calc(50%-1rem)] lg:pt-8">
      <div className=" hidden sm:block">
        <Parallax
          offset={20}
          className="absolute inset-y-0 left-1/2 z-40 mt-3 w-screen rounded-l-3xl bg-gray-50 transition-colors dark:bg-zinc-800 lg:left-80 lg:right-0 lg:w-full"
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
        className="relative z-50 -mr-40 h-full px-6 pb-8 sm:mx-auto lg:mt-14"
      >
        <motion.div
          transition={{ duration: 0.2 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className=""
        >
          <Image
            className="inline-flex h-full rounded-[0.7rem] shadow-lg sm:rounded-[1.2rem] lg:max-h-[40rem] lg:w-auto lg:max-w-none lg:rounded-[2rem] lg:shadow-2xl"
            src={menucomp}
            priority
            width={1400}
            height={800}
            alt=""
          />
        </motion.div>
      </Parallax>
    </div>
  )
}

export default MenuComp
