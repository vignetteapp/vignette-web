import { BsSunFill, BsMoonFill } from 'react-icons/bs'
import { AiFillGithub, AiOutlineTwitter } from 'react-icons/ai'
import { GiHamburgerMenu } from 'react-icons/gi'

import { Dialog } from '@headlessui/react'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

import { Logo } from './Logo'
import { useTranslation } from 'next-i18next'
import { setCookies } from 'cookies-next'
import { useRouter } from 'next/router'

const Nav = () => {
  const { t } = useTranslation([`nav`, `common`])
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const toggleMenu = () => (isOpen ? setIsOpen(false) : setIsOpen(true))
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()

  const router = useRouter()

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
          <Link href="/features">{t(`nav:features`)}</Link>

          <Link href="/ecosystem">{t(`nav:ecosystem`)}</Link>

          <Link href="/about">{t(`nav:about`)}</Link>

          <Link href="/blog">{t(`nav:blog`)}</Link>
        </div>
      </div>

      <div className="mr-f mx-4 ml-auto hidden items-center gap-4 sm:flex ">
        <select
          onChange={(e) => {
            setCookies(`NEXT_LOCALE`, e.target.value)
            router.push(router.asPath, undefined, {
              locale: e.target.value,
            })
          }}
          name="language"
          className="rounded bg-white px-1 text-sm outline-none dark:bg-[#181a1b] "
        >
          <option selected={router.locale == `en`} value="en">
            ENG
          </option>
          <option selected={router.locale == `ja`} value="ja">
            日本
          </option>
          <option selected={router.locale == `ko`} value="ko">
            한국
          </option>
        </select>
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
                    <a>{t(`nav:home`)}</a>
                  </Link>
                </li>
                <li>
                  <Link href="/features">
                    <a>{t(`nav:features`)}</a>
                  </Link>
                </li>
                <li>
                  <Link href="/ecosystem">
                    <a>{t(`nav:ecosystem`)}</a>
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
          </Dialog>
        )}
      </div>
    </div>
  )
}
export default Nav
