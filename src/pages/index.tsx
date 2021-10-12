import dynamic from 'next/dynamic'
import { Footer, SEO } from '@/components'
import { Home, About, Features, Download } from '@/components/sections'
import { NextPage } from 'next'
import OurVision from '@/components/sections/vision'
import OurTeam, { Member } from '@/components/sections/team'
import Sponsors, { Sponsor } from '@/components/sections/sponsors'
import { getPlaiceholder } from 'plaiceholder'

import Members from '@/public/members.json'
import SponsorsList from '@/public/sponsors.json'

interface IProps {
  team: Member[]
  sponsors: Sponsor[]
  videoPlaceholder: any
}

const Index: NextPage<IProps> = ({ team, sponsors, videoPlaceholder }) => {
  const Sidebar = dynamic(() => import(`@/components/sidebar`))
  return (
    <>
      <SEO title="Home" desc="Make your streams more virtual." path="/" />
      <Sidebar />

      <Home />
      <About />
      <Features videoPlaceholder={videoPlaceholder} />
      <OurVision />
      <OurTeam list={team} />
      <Sponsors list={sponsors} />
      <Download />

      <Footer />
    </>
  )
}

export const getStaticProps = async () => {
  const team = await Promise.all(
    Members.map(async (m: Member) => {
      const { blurhash } = await getPlaiceholder(m.avatar)

      m.blurHash = blurhash
      return m
    }),
  )

  const sponsors = await Promise.all(
    SponsorsList.map(async (s: Sponsor) => {
      const { blurhash } = await getPlaiceholder(s.logo)

      s.blurHash = blurhash
      return s
    }),
  )

  const { blurhash: videoPlaceholder } = await getPlaiceholder(
    `/images/video.webp`,
  )

  return {
    props: {
      team,
      sponsors,
      videoPlaceholder,
    },
  }
}

export default Index
