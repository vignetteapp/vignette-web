import About from '@/components/sections/about'
import Home from '@/components/sections/home'
import Sidebar from '@/components/sidebar'

const Index: React.FC = () => {
  return (
    <>
      <Sidebar />

      <Home />
      <About />
    </>
  )
}

export default Index
