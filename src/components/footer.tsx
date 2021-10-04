import Image from 'next/image'
import Link from 'next/link'

const Footer: React.FC = () => {
  return (
    <div className="bg-primary top-shadow text-white p-4 md:p-8 px-12 flex flex-row flex-wrap z-30 relative filter drop-shadow-footer">
      <Image
        src="/images/logo-white.svg"
        width="305"
        height="75"
        alt="Vignette Logo"
      />

      <div className="mx-auto md:flex flex-row gap-16  font-light hidden md:visible ">
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
      <div className="flex flex-col md:text-center my-auto pt-6 md:pt-0 ">
        <span className="pb-1 text-center tracking-tight text-sm">
          {` `}©{new Date().getFullYear()} The Vignette Authors{` `}
        </span>

        <a
          className="  px-4 md:px-0"
          style={{ color: `#fff` }}
          href="https://vercel.com/?utm_source=vignette&utm_campaign=oss"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Powered by Vercel"
        >
          <span className="mr-1 text-sm tracking-tight">Powered by</span>
          <Image
            src="/images/vercel.svg"
            alt="Powered by Vercel"
            width="67"
            height="14"
          />
        </a>
      </div>
    </div>
  )
}
export default Footer
