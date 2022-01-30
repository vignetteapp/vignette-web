import Container from './Container'
import Link from 'next/link'
import Image from 'next/image'
import logo from 'public/images/logo.svg'

const Footer = () => {
  return (
    <Container
      noMargin
      className="mt-16 w-full bg-gray-100 px-8 py-8 text-primary lg:mt-32"
    >
      <div className="mx-auto max-w-3xl">
        <div className="grid grid-cols-4 text-sm">
          <ul className="mb-4 gap-3 text-gray-600">
            <span className="font-semibold">Vignette</span>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/ecosystem">Ecosystem</Link>
            </li>
            <li>
              <Link href="/oss">Open Source</Link>
            </li>
            <li>
              <Link href="/plugins">Plugins</Link>
            </li>
          </ul>
          <ul className="mb-4 text-gray-600">
            <span className="font-semibold">Social</span>
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
        <div className="my-8 border-t  border-gray-300 pt-4">
          <div className="flex items-center ">
            <Image src={logo} width={18} height={18} alt="" />

            <span className="ml-2 text-sm text-gray-500">
              Copyright © {new Date().getFullYear()} The Vignette authors
            </span>
          </div>
        </div>
      </div>
    </Container>
  )
}
export default Footer
