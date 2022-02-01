import { BsSunFill, BsMoonFill } from 'react-icons/bs'
import { Dialog } from '@headlessui/react'

import Link from 'next/link'
import { AiFillGithub, AiOutlineTwitter } from 'react-icons/ai'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useEffect, useState } from 'react'
import Logo from './Logo'
import { useTheme } from 'next-themes'

const Nav = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const toggleMenu = () => (isOpen ? setIsOpen(false) : setIsOpen(true))
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()

  // A flag to know when the page has mounted so the theme can be accessed
  useEffect(() => setMounted(true), [])

  return (
    <div className="mx-auto flex max-w-7xl items-center justify-between py-6 px-4 sm:px-8 lg:px-4 ">
      <div className="flex items-center">
        <Link href="/" passHref>
          <a className="flex items-center">
            <Logo className="h-8 w-8" />

            <span className="ml-2 flex font-spartan text-2xl font-bold dark:text-white">
              Vignette
            </span>
          </a>
        </Link>

        <div className="mx-8 hidden gap-8  md:flex ">
          <Link href="/features">Features</Link>

          <Link href="/ecosystem">Ecosystem</Link>

          <Link href="/oss">Open Source</Link>

          <Link href="/blog">Blog</Link>
        </div>
      </div>

      <div className="ml-4 hidden items-center gap-4 sm:flex ">
        <button
          onClick={() => setTheme(resolvedTheme === `dark` ? `light` : `dark`)}
        >
          {mounted &&
            (resolvedTheme == `dark` ? (
              <BsSunFill size={18} />
            ) : (
              <BsMoonFill size={18} />
            ))}
        </button>
        <Link href="https://twitter.com/vignette_org" passHref>
          <a>
            <AiFillGithub size={24} />
          </a>
        </Link>
        <Link href="https://twitter.com/vignette_org" passHref>
          <a>
            <AiOutlineTwitter size={24} />
          </a>
        </Link>

        <button className="rounded-full bg-pinkRed px-8 py-1 font-semibold text-white ">
          Download
        </button>
      </div>
      <div className="block sm:hidden">
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
            className="fixed inset-0 z-50 md:hidden"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black/20 backdrop-blur-sm dark:bg-neutral-900/80" />

            <div className="dark:highlight-white/5 fixed top-4 right-4 w-full max-w-xs rounded-lg bg-white p-6 text-base font-semibold text-gray-900 shadow-lg dark:bg-primary dark:text-gray-300">
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
                    <a>Home</a>
                  </Link>
                </li>
                <li>
                  <Link href="/features">
                    <a>Features</a>
                  </Link>
                </li>
                <li>
                  <Link href="/ecosystem">
                    <a>Ecosystem</a>
                  </Link>
                </li>
                <li>
                  <Link href="/oss">
                    <a>Open Source</a>
                  </Link>
                </li>
                <li>
                  <Link href="/blog">
                    <a>Blog</a>
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
                          <svg
                            className="h-7 w-7"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              cx="12"
                              cy="12"
                              r="3.25"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                            ></circle>
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                              d="M12 2.75V4.25"
                            ></path>
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                              d="M17.25 6.75L16.0659 7.93416"
                            ></path>
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                              d="M21.25 12.0001L19.75 12.0001"
                            ></path>
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                              d="M17.25 17.2501L16.0659 16.066"
                            ></path>
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                              d="M12 19.75V21.25"
                            ></path>
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                              d="M7.9341 16.0659L6.74996 17.25"
                            ></path>
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                              d="M4.25 12.0001L2.75 12.0001"
                            ></path>
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                              d="M7.93405 7.93423L6.74991 6.75003"
                            ></path>
                          </svg>
                        ) : (
                          <svg
                            className="h-7 w-7"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                              d="M18.25 15.7499C17.2352 16.2904 16.23 16.25 15 16.25C10.9959 16.25 7.75 13.0041 7.75 9.00001C7.75 7.77001 7.70951 6.76474 8.25 5.74994C5.96125 6.96891 4.75 9.2259 4.75 12C4.75 16.004 7.99594 19.25 12 19.25C14.7741 19.25 17.031 18.0387 18.25 15.7499Z"
                            ></path>
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                              d="M16 4.75C16 6.95914 14.9591 9 12.75 9C14.9591 9 16 11.0409 16 13.25C16 11.0409 17.0409 9 19.25 9C17.0409 9 16 6.95914 16 4.75Z"
                            ></path>
                          </svg>
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
