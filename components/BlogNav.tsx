import { BsSunFill, BsMoonFill } from 'react-icons/bs'
import { AiFillGithub, AiOutlineTwitter } from 'react-icons/ai'
import { GiHamburgerMenu } from 'react-icons/gi'

import { Dialog, Transition } from '@headlessui/react'
import Link from 'next/link'
import { useEffect, useState, Fragment } from 'react'
import { useTheme } from 'next-themes'

import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'

import { CountrySelect } from './Nav'

// en: `ENG`,
// ja: `日本`,
// ko: `한국`,
// 'zh-CN': `中国`,
// 'zh-TW': `中国`,
// fil: `FIL`,
// fr: `FR`,
// id: `IDN`,
// de: `DE`,
// it: `IT`,
// nl: `NL`,

const Nav: React.FC = () => {
  const { t } = useTranslation([`nav`, `common`])
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const toggleMenu = () => (isOpen ? setIsOpen(false) : setIsOpen(true))
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()

  const router = useRouter()

  // A flag to know when the page has mounted so the theme can be accessed
  useEffect(() => setMounted(true), [])

  return (
    <>
      {` `}
      <a
        href="#content"
        className="text-md absolute -top-7 z-50 ml-3 -translate-y-12 transform rounded-md border border-gray-300 bg-white px-3 py-2 tracking-tight outline-none transition-transform duration-100 focus:translate-y-12 dark:border-neutral-700 dark:bg-black lg:ml-8"
      >
        Skip to content
      </a>
      {` `}
      <div className="relative z-30 mx-auto flex w-full max-w-7xl items-center justify-between bg-transparent py-6 px-4  sm:px-8 lg:px-4 ">
        <div className="flex items-center">
          <Link href="/blog" passHref>
            <a className="text-lg font-bold lg:text-xl">
              {t(`blog:nav-title`)}
            </a>
          </Link>
        </div>

        <div className=" mx-4 ml-auto hidden items-center gap-4 sm:flex ">
          <CountrySelect router={router} />
          <button
            className="outline-none"
            onClick={() =>
              setTheme(resolvedTheme === `dark` ? `light` : `dark`)
            }
          >
            {mounted ? (
              resolvedTheme == `dark` ? (
                <BsSunFill size={18} />
              ) : (
                <BsMoonFill size={18} />
              )
            ) : (
              <div className="w-[18px]" />
            )}
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
            {t(`download`)}
          </button>
        </div>
        <div className="flex items-center lg:hidden">
          <button className="" onClick={toggleMenu}>
            <GiHamburgerMenu size="28" className="fill-neutral-100" />
          </button>
          <Transition appear show={isOpen} as={Fragment}>
            <Dialog
              open={isOpen}
              onClose={() => setIsOpen(false)}
              className="fixed inset-0 z-50 lg:hidden"
            >
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-100"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-75"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Dialog.Overlay className="fixed inset-0 bg-black/20 backdrop-blur-sm dark:bg-neutral-900/80 " />
              </Transition.Child>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-100"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-75"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
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
                        <a>{t(`nav:home`)}</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/features">
                        <a>{t(`nav:features`)}</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/about">
                        <a>{t(`nav:about`)}</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog">
                        <a>{t(`nav:blog`)}</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact">
                        <a>{t(`nav:contact`)}</a>
                      </Link>
                    </li>
                    <li>
                      <CountrySelect router={router} />
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
                              {t(`common:switch-theme-light`)}
                            </p>
                          ) : (
                            <p className="ml-3 font-semibold">
                              {t(`common:switch-theme-dark`)}
                            </p>
                          )}
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </Transition.Child>
            </Dialog>
          </Transition>
        </div>
      </div>
    </>
  )
}
export default Nav
