import { Layout, Button, BottomBar, PrimaryText } from '@/components'
import { Icon } from '@iconify/react'
import Link from 'next/link'

const Home: React.FC = () => (
  <Layout id="home" className="flex flex-col hero z-30" data-sidebar>
    <div className="text-center m-auto pt-10">
      <PrimaryText className="logo p-3">Vignette</PrimaryText>

      <p className="md:text-3xl font-semibold pt-4">
        Make your streams more virtual.
      </p>
      <div className="mt-12">
        <p className="text-subtle font-medium tracking-tight">
          Free and Open Source
        </p>
        <Button>
          <Link href="/downloads">Download</Link>
        </Button>
      </div>
    </div>

    <div className="bottom-0 mx-auto flex flex-col align-center items-center mb-4">
      <p className="text-subtle text-lg tracking-tight">Learn more</p>
      <Icon icon="akar-icons:chevron-down" className="text-subtle " />
    </div>

    <BottomBar />
  </Layout>
)

export default Home
