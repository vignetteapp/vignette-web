import { useMediaQuery } from 'react-responsive'
import dynamic from 'next/dynamic'

const LINKS: Record<string, string> = {
  'akar-icons:twitter-fill': `https://twitter.com/vignette_org/`,
  'akar-icons:github-fill': `https://github.com/vignetteapp/vignette`,
  'bx:bxl-discord-alt': `https://discord.gg/CXEGVPhGkz`,
}

const Sidebar = () => {
  const isMobile = useMediaQuery({ maxWidth: `767px` })
  const DynamicSidebar = isMobile
    ? dynamic(() => import(`src/components/sidebar/mobile`))
    : dynamic(() => import(`src/components/sidebar/desktop`))
  return (
    <>
      <DynamicSidebar />
    </>
  )
}

export { LINKS }
export default Sidebar
