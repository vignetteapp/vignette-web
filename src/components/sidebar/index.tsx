import React, { useEffect, useState } from 'react'
import Logo from '@/components/icons/logo'
import { Icon } from '@iconify/react'
import Link from './link'
import { createRef } from 'react'
import arrayify from '@/utils/arrayify'
import hide from '@/utils/hide'
import show from '@/utils/show'
import { useMediaQuery } from 'react-responsive'

const LINKS: Record<string, string> = {
  'akar-icons:twitter-fill': `https://twitter.com/vignette_org/`,
  'bx:bxl-discord-alt': `https://discord.gg/CXEGVPhGkz`,
  'akar-icons:github-fill': `https://github.com/vignetteapp/vignette`,
}

const Sidebar = () => {
  // Sidebar link list
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

  // Highlight link when scroll
  useEffect(() => {
    const positions: number[] = [
      ...document.querySelectorAll<HTMLDivElement>(`section[data-sidebar]`),
    ].map((e) => e.offsetTop - window.innerHeight / 2)

    const main = document.getElementById(`_main`) as HTMLDivElement

    const handler = () => {
      const scroll = main.scrollTop
      const num = positions.reduce((a, n) => (n <= scroll ? n : a), 0)

      const index = positions.indexOf(num)
      setActive(index)
    }

    main.addEventListener(`scroll`, handler, true)
    return () => main.removeEventListener(`scroll`, handler, true)
  }, [])

  // Hide individual element when not in view
  const sidebar = createRef<HTMLDivElement>()
  useEffect(() => {
    const el = sidebar.current
    if (el) {
      const top = document.getElementById(`home`)?.offsetHeight as number
      const bottom = document.getElementById(`footer`)?.scrollHeight as number

      const childrens = arrayify(el.children)
        .map((e, i) =>
          e.tagName === `DIV` && i !== 0 ? arrayify(e.children) : e,
        )
        .flat() as HTMLElement[]

      const positions = childrens.map(
        (e) =>
          Number(
            e.tagName === `A` &&
              (e?.offsetParent as unknown as HTMLElement)?.offsetTop,
          ) + e.offsetTop,
      )

      const main = document.getElementById(`_main`) as HTMLDivElement

      const handler = () => {
        const scroll = main.scrollTop
        const topOffset =
          window.innerHeight - (window.innerHeight + scroll - top)
        const bottomOffset =
          bottom +
          (scroll + window.innerHeight - main.scrollHeight) +
          window.innerHeight / 16

        positions.forEach((pos, i) => {
          const clampTop = pos < topOffset
          const clampBottom = pos + 50 > window.innerHeight - bottomOffset

          const hideElement = clampTop || clampBottom
          const el = childrens[i]
          if (hideElement) return hide(el, `30px`)
          show(el, true)
        })
      }

      main.addEventListener(`scroll`, handler, true)
      return () => main.removeEventListener(`scroll`, handler, true)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [list, sidebar])
  const isMobile = useMediaQuery({ maxWidth: `768px` })

  const [opened, setOpened] = useState(false)

  const toggleNav = () => {
    if (opened) {
      setOpened(false)
    } else {
      setOpened(true)
    }
  }

  return isMobile ? (
    <>
      <nav className=" fixed lg:hidden w-screen z-50">
        <button
          className="justify-between sticky z-50 ml-auto float-right m-4 p-2 outline-none rounded-full 
opacity-80 bg-primary-dark border  dark:bg-secondary dark:border-primary dark:text-white"
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
          className={`text-black transition duration-500 z-40 top-0 flex flex-col fixed dark:text-white ${
            opened ? `open` : ``
          }`}
        >
          {Object.keys(list).map((key, i) => (
            // eslint-disable-next-line jsx-a11y/anchor-is-valid
            <a
              key={key}
              href={`#${list[key as unknown as number]}`}
              onClick={() => {
                setOpened(false)
              }}
            >
              <li className={active == i ? `active` : ``}>
                {list[key as unknown as number]}
              </li>
            </a>
          ))}
        </ul>
      </nav>

      <span className={`nav-expand z-30 ${opened ? `open` : ``}`} />
    </>
  ) : (
    <div
      ref={sidebar}
      className="fixed h-screen top-0 right-0 z-20 pr-12 py-12 flex flex-col justify-between items-end"
    >
      <Logo width="45" className="transition duration-300 ease-in-out" />

      <div id="sidebar-links" className="filter drop-shadow">
        {Object.keys(LINKS).map((key, i, arr) => (
          <a
            href={LINKS[key]}
            target="_blank"
            rel="noopener noreferrer"
            key={i}
            className="block transition duration-300 ease-in-out"
          >
            <Icon
              icon={key}
              height="36"
              className={`transition-transform duration-300 ease-in-out hover:scale-110 
              ${i !== arr.length - 1 && `mb-3`} `}
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
            link={`#${list[key as unknown as number]}`}
          />
        ))}
      </div>
    </div>
  )
}

export default Sidebar
