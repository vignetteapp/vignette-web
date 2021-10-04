import Image from 'next/image'
import Link from 'next/link'

const Footer: React.FC = () => {
  return (
    <div className="bg-primary top-shadow text-white p-6 md:p-12 flex flex-row flex-wrap z-30 relative filter drop-shadow-footer">
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
   
        <p className="mt-auto my-1 pt-8 pb-2 text-center">
          {` `}©{new Date().getFullYear()} The Vignette Authors{` `}
        </p>
        <a href="https://vercel.com/?utm_source=vignette&utm_campaign=oss" target="_blank" rel="noreferrer noopener" aria-label="Powered by Vercel" >
                <img src="https://www.datocms-assets.com/31049/1618983297-powered-by-vercel.svg" alt="Powered by Vercel" />
              </a>
      

      </div>
    </div>
  )
}
export default Footer
