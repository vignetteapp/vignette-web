import Link from 'next/link'
import { LogoSquare } from './Logo'
import { useTranslation } from 'next-i18next'

const Footer = () => {
  const { t } = useTranslation(`nav`)
  return (
    <div className="mt-16 w-full bg-gray-100 px-8 py-8 text-primary dark:bg-black  lg:mt-32">
      <div className="mx-auto max-w-3xl">
        <div className="footer grid grid-cols-2  lg:grid-cols-4">
          <ul className="mb-4 gap-3 text-gray-600 dark:text-gray-200">
            <span className="font-semibold">Vignette</span>
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
          <ul className="text-gray-600 dark:text-gray-200 xs:mb-4">
            <span className="font-semibold">{t(`social`)}</span>
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
        <div className="my-8 flex justify-between border-t  border-gray-300 pt-4">
          <div className="flex items-center">
            <LogoSquare size={16} />
            <span className="ml-2 text-xs text-gray-500 dark:text-gray-200 xs:text-sm">
              Copyright © {new Date().getFullYear()} The Vignette authors.
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Footer
