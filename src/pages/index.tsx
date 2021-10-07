import dynamic from 'next/dynamic'
import { Footer, SEO } from '@/components'
import { Home, About, Features } from '@/components/sections'
import { NextPage } from 'next'
import OurVision from '@/components/sections/vision'
import OurTeam from '@/components/sections/team'

const Index: NextPage = () => {
  const Sidebar = dynamic(() => import(`@/components/sidebar`))
  return (
    <>
      <SEO title="Home" desc="Make your streams more virtual." path="/" />
      <Sidebar />

      <Home />
      <About />
      <Features />
      <OurVision />
      <OurTeam />

      <Footer />
    </>
  )
}

export default Index
