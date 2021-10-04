import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Logo from '@/components/icons/logo'
import { Icon } from '@iconify/react'
import Link from './link'

const LINKS: Record<string, string> = {
  'akar-icons:twitter-fill': `https://twitter.com/vignette_org/`,
  'bx:bxl-discord-alt': `https://discord.gg/CXEGVPhGkz`,
  'akar-icons:github-fill': `https://github.com/vignetteapp/vignette`,
}

const Sidebar = () => {
  const router = useRouter()
  const [list, setList] = useState<Record<number, string>>({})
  const [active, setActive] = useState(0)
  useEffect(() => {
    const sections = document.querySelectorAll<HTMLDivElement>(
      `section[data-sidebar]`,
    )
    const newList: Record<number, string> = {}
    sections.forEach((el) => (newList[el.offsetTop] = el.id.replace(/-/i, ` `)))

    setList(newList)
  }, [])

  return (
    <div className="fixed h-screen top-0 right-0 z-20 pr-12 py-12 md:flex flex-col justify-between items-end hidden">
      <Logo width="45" />

      <div id="sidebar-links" className="filter drop-shadow">
        {Object.keys(LINKS).map((key, i, arr) => (
          <a
            href={LINKS[key]}
            target="_blank"
            rel="noopener noreferrer"
            key={i}
          >
            <Icon
              icon={key}
              height="36"
              className={`transition - transform duration - 300
  ease -in -out hover: scale - 110 ${i !== arr.length - 1 && `mb-3`} `}
            />
          </a>
        ))}
      </div>

      <div className="flex flex-col items-end pb-4">
        {Object.keys(list).map((key, i) => (
          // eslint-disable-next-line jsx-a11y/anchor-is-valid
          <Link
            key={i}
            text={list[key as unknown as number]}
            active={i === active}
            onClick={() => {
              setActive(i)
              router.push(`#` + list[key as unknown as number])
            }}
          />
        ))}
      </div>
    </div>
  )
}
export default Sidebar
