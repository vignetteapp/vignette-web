import { BsSunFill, BsMoonFill } from 'react-icons/bs'
import { AiFillGithub, AiOutlineTwitter } from 'react-icons/ai'
import { GiHamburgerMenu } from 'react-icons/gi'

import { Dialog } from '@headlessui/react'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

import { Logo } from './Logo'
import { useTranslation } from 'next-i18next'

const Nav = () => {
  const { t } = useTranslation(`nav`)
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const toggleMenu = () => (isOpen ? setIsOpen(false) : setIsOpen(true))
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()

  // A flag to know when the page has mounted so the theme can be accessed
  useEffect(() => setMounted(true), [])

  return (
    <div className="mx-auto flex w-full max-w-7xl items-center justify-between bg-white py-6 px-4 dark:bg-[#181a1b] sm:px-8 lg:px-4 ">
      <div className="flex items-center">
        <Link href="/" passHref>
          <a>
            <Logo />
          </a>
        </Link>

        <div className="mx-8 hidden gap-8 text-sm lg:flex lg:text-base">
          <Link href="/features">{t(`features`)}</Link>

          <Link href="/ecosystem">{t(`ecosystem`)}</Link>

          <Link href="/about">{t(`about`)}</Link>

          <Link href="/blog">{t(`blog`)}</Link>
        </div>
      </div>

      <div className="mr-f mx-4 ml-auto hidden items-center gap-4 sm:flex ">
        <button
          className="outline-none"
          onClick={() => setTheme(resolvedTheme === `dark` ? `light` : `dark`)}
        >
          {mounted &&
            (resolvedTheme == `dark` ? (
              <BsSunFill size={18} />
            ) : (
              <BsMoonFill size={18} />
            ))}
        </button>
        <Link href="https://github.com/vignetteapp" passHref>
          <a className="outline-none">
            <AiFillGithub size={24} />
          </a>
        </Link>
        <Link href="https://twitter.com/vignette_org" passHref>
          <a className="outline-none">
            <AiOutlineTwitter size={24} />
          </a>
        </Link>

        <button className="rounded-full bg-pinkRed px-8 py-1 font-semibold text-white ">
          Download
        </button>
      </div>
      <div className="flex items-center lg:hidden">
        <button className="" onClick={toggleMenu}>
          <GiHamburgerMenu
            size="28"
            className="fill-primary dark:fill-neutral-100"
          />
        </button>
        {isOpen && (
          <Dialog
            open={isOpen}
            onClose={() => setIsOpen(false)}
            className="fixed inset-0 z-50 lg:hidden"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black/20 backdrop-blur-sm dark:bg-neutral-900/80 " />

            <div className="dark:highlight-white/5 fixed top-4 right-4 w-full max-w-xs rounded-lg bg-white p-6 text-base font-semibold text-gray-900 shadow-lg dark:bg-neutral-900 dark:text-gray-300">
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-5 right-5 flex h-8 w-8 items-center justify-center text-gray-500 hover:text-gray-600 dark:text-gray-200 dark:hover:text-gray-100"
              >
                <span className="sr-only">Close navigation</span>
                <svg
                  viewBox="0 0 10 10"
                  className="h-2.5 w-2.5 overflow-visible"
                  aria-hidden="true"
                >
                  <path
                    d="M0 0L10 10M10 0L0 10"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  ></path>
                </svg>
              </button>
              <ul className="space-y-6">
                <li>
                  <Link href="/">
                    <a>{t(`home`)}</a>
                  </Link>
                </li>
                <li>
                  <Link href="/features">
                    <a>{t(`features`)}</a>
                  </Link>
                </li>
                <li>
                  <Link href="/ecosystem">
                    <a>{t(`ecosystem`)}</a>
                  </Link>
                </li>
                <li>
                  <Link href="/about">
                    <a>{t(`about`)}</a>
                  </Link>
                </li>
                <li>
                  <Link href="/blog">
                    <a>{t(`blog`)}</a>
                  </Link>
                </li>
              </ul>
              <div className="mt-6 border-t border-gray-200 pt-6 dark:border-gray-200/10">
                <button
                  aria-label="Toggle Dark Mode"
                  type="button"
                  className="general-ring-state flex w-full items-center justify-center rounded-full bg-gray-200 py-3 dark:bg-neutral-700"
                  onClick={() =>
                    setTheme(resolvedTheme === `dark` ? `light` : `dark`)
                  }
                >
                  {mounted && (
                    <>
                      <div>
                        {resolvedTheme === `dark` ? (
                          <BsSunFill size={18} />
                        ) : (
                          <BsMoonFill size={18} />
                        )}
                      </div>
                      {resolvedTheme === `dark` ? (
                        <p className="ml-3 font-semibold">
                          Change to light theme
                        </p>
                      ) : (
                        <p className="ml-3 font-semibold">
                          Change to dark theme
                        </p>
                      )}
                    </>
                  )}
                </button>
              </div>
            </div>
          </Dialog>
        )}
      </div>
    </div>
  )
}
export default Nav
