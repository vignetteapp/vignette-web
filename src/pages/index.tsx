import dynamic from 'next/dynamic'
import { Footer, SEO } from '@/components'
import { Home, About, Features, Download } from '@/components/sections'
import { NextPage } from 'next'
import OurVision from '@/components/sections/vision'
import OurTeam from '@/components/sections/team'
import Sponsors from '@/components/sections/sponsors'
import { ComponentType } from 'react'

const Index: NextPage = () => {
  const Sidebar: ComponentType = dynamic(() => import(`@/components/sidebar`))

  return (
    <main id="_main">
      <SEO title="Home" desc="Make your streams more virtual." path="/" />

      <Sidebar />

      <Home />
      <About />
      <Features />
      <OurVision />
      <OurTeam />
      <Sponsors />
      <Download />

      <Footer />
    </main>
  )
}

export default Index
