import logo from 'public/images/logo.svg'
import Image from 'next/image'
import Link from 'next/link'
import { AiFillGithub, AiOutlineTwitter } from 'react-icons/ai'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useState } from 'react'

const Nav = () => {
  const [menuOpened, setMenuOpened] = useState<boolean>(false)
  const toggleMenu = () =>
    menuOpened ? setMenuOpened(false) : setMenuOpened(true)
  return (
    <div className="mx-auto flex max-w-7xl items-center justify-between py-6 px-4 sm:px-8 lg:px-4 ">
      <div className="flex items-center">
        <Link href="/" passHref>
          <a className="flex items-center">
            <div className="">
              <Image
                className=" "
                src={logo}
                width={32}
                height={32}
                layout="fixed"
                alt=""
                priority
              />
            </div>

            <span className="ml-2 flex font-spartan text-2xl font-bold">
              Vignette
            </span>
          </a>
        </Link>

        <div className="mx-8 hidden gap-8  md:flex ">
          <Link href="/features">Features</Link>

          <Link href="/ecosystem">Ecosystem</Link>

          <Link href="/oss">Open Source</Link>
        </div>
      </div>

      <div className="ml-4 hidden items-center gap-4 sm:flex ">
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
          <GiHamburgerMenu size="28" color="#323232" />
        </button>
        {menuOpened && (
          <div
            className="fixed inset-0 z-50 md:hidden"
            id="headlessui-dialog-1"
            role="dialog"
            aria-modal="true"
          >
            <div
              className="fixed inset-0 bg-black/20 backdrop-blur-sm dark:bg-gray-900/80"
              id="headlessui-dialog-overlay-2"
              aria-hidden="true"
            ></div>
            <div className="dark:highlight-white/5 fixed top-4 right-4 w-full max-w-xs rounded-lg bg-white p-6 text-base font-semibold text-gray-900 shadow-lg dark:bg-gray-800 dark:text-gray-400">
              <button
                onClick={() => setMenuOpened(false)}
                className="absolute top-5 right-5 flex h-8 w-8 items-center justify-center text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300"
                tabIndex={0}
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
                  <Link href="/" passHref>
                    <a className="hover:text-teal-400 dark:hover:text-teal-500">
                      Home
                    </a>
                  </Link>
                </li>
                <li>
                  <a
                    className="hover:text-teal-400 dark:hover:text-teal-500"
                    href="/features"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-teal-400 dark:hover:text-teal-500"
                    href="/ecosystem"
                  >
                    Ecosystem
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-teal-400 dark:hover:text-teal-500"
                    href="/oss"
                  >
                    Open Source
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-teal-400 dark:hover:text-teal-500"
                    href="/stats"
                  >
                    Stats
                  </a>
                </li>
              </ul>
              <div className="mt-6 border-t border-gray-200 pt-6 dark:border-gray-200/10">
                <button
                  aria-label="Toggle Dark Mode"
                  type="button"
                  className="dark:bg-midnight-hover general-ring-state flex w-full items-center justify-center rounded-full bg-gray-200 py-3"
                >
                  <div>
                    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24">
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
                  </div>
                  <p className="ml-3 font-semibold">Change to light theme</p>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
export default Nav
