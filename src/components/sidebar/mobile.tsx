import { useState, useEffect } from 'react'
import { Icon } from '@iconify/react'
import { LINKS } from '@/components/sidebar'

const Mobile = () => {
  const [opened, setOpened] = useState(false)
  const [active, setActive] = useState(0)

  // Sidebar link list
  const [list, setList] = useState<Record<number, string>>({})

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLDivElement>(
      `section[data-sidebar]`,
    )
    const newList: Record<number, string> = {}
    sections.forEach((el) => (newList[el.offsetTop] = el.id.replace(/-/i, ` `)))

    setList(newList)
  }, [])

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

  const toggleNav = () => {
    if (opened) {
      setOpened(false)
    } else {
      setOpened(true)
    }
  }
  return (
    <>
      <nav className=" fixed lg:hidden w-screen z-50 font-inter">
        <button
          className="justify-between sticky z-50 ml-auto float-right m-4 p-2 outline-none rounded-full 
opacity-80 bg-primary-dark border  dark:bg-secondary dark:border-primary dark:text-white"
          onClick={() => {
            handler()
            toggleNav()
          }}
        >
          <Icon
            icon="icon-park-outline:hamburger-button"
            width="1.7rem"
            height="1.7rem"
          />
        </button>
        <div
          className={`mobile flex flex-col justify-between ${opened ? `open` : ``
            } `}
        >
          <ul
            className={`text-black pt-32 transition duration-500 z-40 mx-auto flex flex-col dark:text-white  
          `}
          >
            {Object.keys(list).map((key, i) => (
              <li key={key} className={`${active == i ? `active` : ``}`}>
                <a
                  href={`#${list[key as unknown as number]}`}
                  onClick={() => {
                    setOpened(false)
                  }}
                >
                  {list[key as unknown as number]}
                </a>
              </li>
            ))}
            <li>
              <a
                href="https://blog.vignetteapp.org"
                target="_blank"
                rel="noreferrer"
              >
                Blog
              </a>
            </li>
          </ul>
          <svg height="0">
            <linearGradient
              id="secondaryGradient"
              x1="-30"
              y1="30.4717"
              x2="30.936"
              y2="90.4644"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#6A99DD" />
              <stop offset="1" stopColor="#BE58CB" />
            </linearGradient>
          </svg>
          <div
            id="sidebar-links"
            className={`flex gap-4 mb-28 items-baseline justify-center flex-row mx-auto text-center transition-opacity duration-700 
             ${opened ? `opacity-1` : `opacity-0`}`}
          >
            {Object.keys(LINKS).map((key, i) => (
              <a
                key={i}
                href={LINKS[key]}
                target="_blank"
                rel="noopener noreferrer"
                className="text-center"
              >
                <Icon icon={key} height="26" width="26" />
              </a>
            ))}
          </div>
        </div>
      </nav>

      <span className={`nav-expand z-30 ${opened ? `open` : ``}`} />
    </>
  )
}
export default Mobile
