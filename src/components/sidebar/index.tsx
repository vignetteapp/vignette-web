import { useMediaQuery } from 'react-responsive'
import dynamic from 'next/dynamic'

const LINKS: Record<string, string> = {
  'akar-icons:twitter-fill': `https://twitter.com/vignette_org/`,
  'akar-icons:discord-fill': `https://discord.vignetteapp.org`,
  'akar-icons:github-fill': `https://github.com/vignetteapp/vignette`,
  'simple-icons:opencollective': `https://opencollective.com/vignette`,
}

const Sidebar = () => {
  const isMobile = useMediaQuery({ maxWidth: `768px` })
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
