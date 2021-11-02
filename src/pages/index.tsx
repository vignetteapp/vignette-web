import { Footer, SEO } from '@/components'
import { Home, About, Features, Download } from '@/components/sections'
import { NextPage } from 'next'
import OurVision from '@/components/sections/vision'
import OurTeam from '@/components/sections/team'
import Sponsors from '@/components/sections/sponsors'
import Sidebar from '@/components/sidebar'
import { useState } from 'react'

const Index: NextPage = () => {
  const [opened, setOpened] = useState(true)
  return (
    <main id="_main">
      <SEO title="Home" desc="Make your streams more virtual." path="/" />

      <Sidebar bannerOpen={opened} />

      <Home bannerOpened={opened} setBannerOpened={setOpened} />
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
