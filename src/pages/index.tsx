import dynamic from 'next/dynamic'
import { Footer, SEO } from '@/components'
import { Home, About, Features, Download } from '@/components/sections'
import { NextPage } from 'next'
import OurVision from '@/components/sections/vision'
import OurTeam from '@/components/sections/team'
import Sponsors from '@/components/sections/sponsors'
import { useEffect, useRef } from 'react'
import wait from '@/utils/wait'

const Index: NextPage = () => {
  const Sidebar = dynamic(() => import(`@/components/sidebar`))

  const homeRef = useRef<HTMLDivElement>(null)
  const aboutRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const homeBoundary = homeRef.current?.offsetHeight as number

    const handler = async ({ deltaY }: WheelEvent) => {
      const scrollY = window.scrollY

      await wait(100)

      // Scroll down
      if (deltaY > 0 && scrollY < homeBoundary) window.scrollTo(0, homeBoundary)
      // Scroll up
      else if (deltaY < 0 && scrollY <= homeBoundary) window.scrollTo(0, 0)
    }

    window.addEventListener(`wheel`, handler, true)
    return () => window.removeEventListener(`wheel`, handler, true)
  }, [])

  return (
    <>
      <SEO title="Home" desc="Make your streams more virtual." path="/" />
      <Sidebar />

      <Home ref={homeRef} />
      <About ref={aboutRef} />
      <Features />
      <OurVision />
      <OurTeam />
      <Sponsors />
      <Download />

      <Footer />
    </>
  )
}

export default Index
