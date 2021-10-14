import { Layout, Button, BottomBar, PrimaryText } from '@/components'
import { Icon } from '@iconify/react'
import Link from 'next/link'

// eslint-disable-next-line react/display-name
const Home = () => {
  return (
    <Layout
      id="home"
      className="flex flex-col hero z-30 shadow-lg min-h-screen"
      data-sidebar
    >
      <div className="text-center m-auto pt-10">
        <PrimaryText className="animate-gradient logo p-3">
          Vignette
        </PrimaryText>

        <p className="md:text-3xl text-xl font-semibold pt-4">
          Make your streams more virtual.
        </p>
        <div className="mt-12">
          <p className="text-subtle font-medium tracking-tight">
            Free and Open Source
          </p>
          <a href="#download">
            <Button className="hover:scale-105">Download</Button>
          </a>
        </div>
      </div>

      <Link href="#about" passHref>
        <a className="bottom-0 mx-auto flex flex-col align-center items-center mb-3 p-2">
          <p className="text-subtle text-lg tracking-tight">Learn more</p>
          <Icon icon="akar-icons:chevron-down" className="text-subtle " />
        </a>
      </Link>

      <BottomBar />
    </Layout>
  )
}

export default Home
