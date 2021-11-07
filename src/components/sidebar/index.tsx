import { useMediaQuery } from 'react-responsive'
import dynamic from 'next/dynamic'
import { BsTwitter, BsGithub } from 'react-icons/bs'
import { SiDiscord } from 'react-icons/si'

const LINKS: Record<string, JSX.Element> = {
  'https://go.vignetteapp.org/twitter': (
    <BsTwitter
      size="36"
      className="transition-transform duration-300 ease-in-out hover:scale-110 mb-3"
    />
  ),
  'https://go.vignetteapp.org/discord': (
    <SiDiscord
      size="36"
      className="transition-transform duration-300 ease-in-out hover:scale-110 mb-3"
    />
  ),
  'https://go.vignetteapp.org/github': (
    <BsGithub
      size="36"
      className="transition-transform duration-300 ease-in-out hover:scale-110 mb-3"
    />
  ),
}

const Sidebar: React.FC<{
  bannerOpen: boolean
}> = ({ bannerOpen }) => {
  const isMobile = useMediaQuery({ maxWidth: `768px` })
  const DynamicSidebar = isMobile
    ? dynamic(() => import(`src/components/sidebar/mobile`))
    : dynamic(() => import(`src/components/sidebar/desktop`))
  return (
    <>
      <DynamicSidebar bannerOpen={bannerOpen} />
    </>
  )
}

export { LINKS }
export default Sidebar
