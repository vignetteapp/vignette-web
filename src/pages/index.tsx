import Sidebar from '@/components/sidebar'
import { Footer, SEO } from '@/components'
import { Home, About, Features } from '@/components/sections'

const Index: React.FC = () => {
  return (
    <>
      <SEO title="Home" desc="Make your streams more virtual." path="/" />
      <script async src="https://arc.io/widget.min.js#vY1i5ZSD"></script>
      <Sidebar />

      <Home />
      <About />

      <Features />
      <Footer />
    </>
  )
}

export default Index
