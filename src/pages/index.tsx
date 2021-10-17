import dynamic from 'next/dynamic'
import { Footer, SEO } from '@/components'
import { Home, About, Features, Download } from '@/components/sections'
import { NextPage } from 'next'
import OurVision from '@/components/sections/vision'
import OurTeam from '@/components/sections/team'
import Sponsors from '@/components/sections/sponsors'
import { Icon } from '@iconify/react'
import { ComponentType, useState } from 'react'
import MediaQuery from 'react-responsive'

const Index: NextPage = () => {
  const Sidebar: ComponentType = dynamic(() =>
    import(`@/components/sidebar`).then((mod) =>
      typeof window !== `undefined` && window.innerWidth > 760
        ? mod.Sidebar
        : () => <></>,
    ),
  )
  const [opened, setOpened] = useState(false)

  const toggleNav = () => {
    if (opened) {
      setOpened(false)
    } else {
      setOpened(true)
    }
  }

  return (
    <main id="_main">
      <SEO title="Home" desc="Make your streams more virtual." path="/" />

      <MediaQuery maxWidth="759px">
        <nav className=" fixed lg:hidden w-screen z-50">
          <button
            className="justify-between sticky z-50 ml-auto float-right m-4 p-2 outline-none rounded-full z-80
    opacity-80 bg-primary-dark border border-secondary-dark dark: bg-secondary dark: border-primary dark: text-white"
            onClick={() => {
              toggleNav()
            }}
          >
            <Icon
              icon="icon-park-outline:hamburger-button"
              width="1.7rem"
              height="1.7rem"
            />
          </button>
          <ul
            className={`text-black transition duration-500 z-40 top-0 flex flex-col  fixed
         dark:text-white ${opened ? `open` : ``}`}
          >
            <li className="">{opened ? `open` : `closed`} </li>
            <li className="">hi</li>
            <li>hi</li>
            <li>hi</li>
            <li>hi</li>
          </ul>
        </nav>

        <span className={`nav-expand z-30 ${opened ? `open` : ``}`} />
      </MediaQuery>

      <MediaQuery minWidth="760px">
        <Sidebar />
      </MediaQuery>

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
