import { BsSunFill, BsMoonFill } from 'react-icons/bs'
import { AiFillGithub, AiOutlineTwitter } from 'react-icons/ai'
import { GiHamburgerMenu } from 'react-icons/gi'

import { Dialog } from '@headlessui/react'
import Link from 'next/link'
import { useEffect, useState, Fragment } from 'react'
import { useTheme } from 'next-themes'

import { Logo } from './Logo'
import { useTranslation } from 'next-i18next'
import { setCookies } from 'cookies-next'
import { NextRouter, useRouter } from 'next/router'

import { Listbox, Transition } from '@headlessui/react'

import { AiOutlineCheck } from 'react-icons/ai'
import ReactCountryFlag from 'react-country-flag'
import { BiChevronDown } from 'react-icons/bi'

interface locale {
  shortName: string
  name: string
  flag: string
}

const locales: Record<string, locale> = {
  en: { shortName: `ENG`, name: `English`, flag: `us` },
  ja: { shortName: `日本`, name: `日本語`, flag: `jp` },
  ko: { shortName: `한국`, name: `한국어`, flag: `kr` },
  'zh-CN': { shortName: `中国`, name: `简体中文`, flag: `cn` },
  'zh-TW': { shortName: `台灣`, name: `繁體中文`, flag: `tw` },
  fr: { shortName: `FR`, name: `français`, flag: `fr` },
  id: { shortName: `IDN`, name: `Indonesia`, flag: `id` },
  fil: { shortName: `FIL`, name: `Filipino`, flag: `ph` },
  de: { shortName: `DE`, name: `Deutsch`, flag: `de` },
  it: { shortName: `IT`, name: `italiano`, flag: `it` },
  nl: { shortName: `NL`, name: `Nederlands`, flag: `nl` },
  pt: { shortName: `PT`, name: `português`, flag: `pt` },
  th: { shortName: `TH`, name: `ไทย`, flag: `th` },
}

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
function MyListbox({ router }: { router: NextRouter }) {
  const [selectedLocale, setSelectedLocale] = useState(router.locale)

  return (
    <div>
      <Listbox
        value={selectedLocale}
        onChange={(selected) => {
          setSelectedLocale(selected)
          setCookies(`NEXT_LOCALE`, selected)
          router.push(router.asPath, undefined, {
            locale: selected,
          })
        }}
      >
        <Listbox.Button className="relative flex w-full cursor-default items-center rounded-lg bg-transparent pl-1 text-left text-sm font-semibold outline-none  sm:font-normal">
          <ReactCountryFlag
            countryCode={locales[selectedLocale as string].flag}
            svg
          />
          <span className="mx-1">
            {locales[selectedLocale as string].shortName}
          </span>
          <BiChevronDown />
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="w-18 absolute z-100 mt-1 max-h-96 overflow-auto rounded-md border bg-white text-black shadow-lg focus:outline-none dark:border-neutral-700 dark:bg-[#181a1b] dark:text-white">
            {Object.keys(locales).map((key) => (
              /* Use the `active` state to conditionally style the active option. */
              /* Use the `selected` state to conditionally style the selected option. */
              <Listbox.Option key={key} value={key} as={Fragment}>
                {({ active, selected }) => (
                  <li
                    className={`flex cursor-default items-center px-2 py-1 sm:px-1 lg:py-0  ${
                      active
                        ? `bg-gray-100 dark:bg-neutral-700 `
                        : `bg-white  dark:bg-[#181a1b]`
                    }`}
                  >
                    <ReactCountryFlag countryCode={locales[key].flag} svg />
                    <span className="mx-1 text-sm text-black dark:text-white">
                      {locales[key].name}
                    </span>
                    {selected && (
                      <AiOutlineCheck className="fill-black dark:fill-white" />
                    )}
                  </li>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </Listbox>
    </div>
  )
}

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
    <div className="mx-auto flex w-full max-w-7xl items-center justify-between bg-transparent py-6 px-4  sm:px-8 lg:px-4 ">
      <div className="flex items-center">
        <Link href="/" passHref>
          <a>
            <Logo />
          </a>
        </Link>

        <div className="mx-8 hidden gap-8 text-sm lg:flex lg:text-base">
          <Link href="/features">{t(`nav:features`)}</Link>

          <Link href="/about">{t(`nav:about`)}</Link>

          <Link href="/plugins">{t(`nav:plugins`)}</Link>

          <Link href="/blog">{t(`nav:blog`)}</Link>
        </div>
      </div>

      <div className=" mx-4 ml-auto hidden items-center gap-4 sm:flex ">
        <MyListbox router={router} />
        <button
          className="outline-none"
          onClick={() => setTheme(resolvedTheme === `dark` ? `light` : `dark`)}
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
          <GiHamburgerMenu
            size="28"
            className="fill-primary dark:fill-neutral-100"
          />
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
                    <MyListbox router={router} />
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
  )
}
export default Nav
