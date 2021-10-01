import Image from 'next/image'
import Link from 'next/link'

const Footer: React.FC = () => {
  return (
    <div className="bg-primary text-white p-6 md:p-12 flex flex-row flex-wrap z-30 relative">
      <Image
        src="/images/logo-white.svg"
        width="339"
        height="83"
        alt="Vignette Logo"
      />
      <div className="mx-auto md:flex flex-row gap-16 text-lg font-light hidden md:visible">
        <div className="flex flex-col">
          <span className="my-1">
            <Link href="/#about">About</Link>
          </span>
          <span className="my-1">
            <Link href="/#about">Our vision</Link>
          </span>
          <span className="my-1">
            <Link href="/#about">Our Team</Link>
          </span>
        </div>
        <div className="flex flex-col">
          <span className="my-1">
            <Link href="/#about">Sponsors</Link>
          </span>
          <span className="my-1">
            <Link href="https://github.com/vignetteapp/vignette/releases">
              Download
            </Link>
          </span>
        </div>
      </div>
      <div className="flex flex-col">
        <p className="mt-auto my-1">
          {` `}©{new Date().getFullYear()} The Vignette Authors{` `}
        </p>
      </div>
    </div>
  )
}
export default Footer
