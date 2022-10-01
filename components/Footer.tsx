import Link from 'next/link'
import { Logo, LogoSquare } from './Logo'
import { useTranslation } from 'next-i18next'

const Footer = () => {
  const { t } = useTranslation(`nav`)
  return (
    <div className=" mt-16  border-t bg-neutral-50  text-primary dark:bg-black lg:mt-32">
      <div className="container mx-auto w-full px-6 py-12">
        <div className="footer grid grid-cols-2  lg:grid-cols-4">
          <div className="hidden -translate-y-0.5 lg:block">
            <Logo className="align-bottom" width={100} height={23} />
          </div>
          <ul className="mb-4 gap-3 text-[15px] text-neutral-600 dark:text-gray-400">
            <span className="mb-4 block text-black dark:text-white">
              Vignette
            </span>
            <li>
              <Link href="/">{t(`home`)}</Link>
            </li>
            <li>
              <Link href="/about">{t(`about`)}</Link>
            </li>
            <li>
              <Link href="/plugins">{t(`plugins`)}</Link>
            </li>
            <li>
              <Link href="/blog">{t(`blog`)}</Link>
            </li>
            <li>
              <Link href="/contact">{t(`contact`)}</Link>
            </li>
          </ul>
          <ul className="text-neutral-600 dark:text-gray-400 xs:mb-4">
            <span className="mb-4 block text-black dark:text-white">
              {t(`social`)}
            </span>
            <li>
              <Link href="https://github.com/vignetteapp">GitHub</Link>
            </li>
            <li>
              <Link href="https://go.vignetteapp.org/discord">Discord</Link>
            </li>
            <li>
              <Link href="https://twitter.com/vignette_org">Twitter</Link>
            </li>
          </ul>
        </div>
        <div className="mt-12 block lg:hidden">
          <Logo className="align-bottom" />
        </div>
        <div className="mt-8 flex justify-between ">
          <div className="flex items-center">
            <span className=" text-neutral-600 dark:text-gray-400 sm:text-sm">
              Copyright © {new Date().getFullYear()} The Vignette authors. All
              rights reserved.
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Footer
