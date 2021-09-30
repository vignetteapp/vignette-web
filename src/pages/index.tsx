import { SEO } from '@/components'
import { Home, About } from '@/components/sections'

const Index: React.FC = () => {
  return (
    <>
      <SEO title="Home" desc="Make your streams more virtual" path="/" />
      <Home />
      <About />
    </>
  )
}

export default Index
