import React, { useEffect, useState, createRef } from 'react'
import Logo from '@/components/icons/logo'
import { Icon } from '@iconify/react'
import Link from './link'
import arrayify from '@/utils/arrayify'
import hide from '@/utils/hide'
import show from '@/utils/show'
import { LINKS } from '@/components/sidebar'

const Desktop = () => {
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

  return (
    <div
      ref={sidebar}
      className="fixed h-screen top-0 right-0 mr-12 py-12 flex flex-col justify-between items-end"
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

export default Desktop
