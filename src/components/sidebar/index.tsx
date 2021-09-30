import { useEffect, useState } from 'react'
import Logo from '../logo'
import Link from './link'

const Sidebar: React.FC = () => {
  const [list, setList] = useState<Record<string, string>>({})
  const [active, setActive] = useState(0)

  useEffect(() => {
    const sections = document.querySelectorAll(`section[data-sidebar]`)

    const newList: Record<string, string> = {}
    sections.forEach((el) => (newList[el.id] = el.id.replace(/-/i, ` `)))

    setList(newList)
  }, [])

  return (
    <div className="fixed h-screen top-0 right-0 z-20 pr-12 py-12 flex flex-col justify-between items-end">
      <Logo width="42" />

      <div className="flex flex-col items-end">
        {Object.keys(list).map((key, i) => (
          // eslint-disable-next-line jsx-a11y/anchor-is-valid
          <Link
            key={i}
            text={list[key]}
            link={`#${key}`}
            active={i === active}
            onClick={() => setActive(i)}
          />
        ))}
      </div>
    </div>
  )
}

export default Sidebar
