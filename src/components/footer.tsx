import ImageWithFallback from './imageWithFallback'

const Footer: React.FC = () => {
  return (
    <div
      id="footer"
      className="bg-primary top-shadow text-white p-8 md:p-9 md:px-12 mt-8  flex flex-row justify-between flex-wrap z-20 relative filter drop-shadow-footer"
    >
      <ImageWithFallback
        src="/images/logo-white.svg"
        width="274"
        height="66"
        alt="Vignette Logo"
      />

      <div className="mx-auto md:flex flex-row gap-16  font-light hidden md:visible ">
        <div className="flex flex-col">
          <span className="my-1">
            <a href="#about">About</a>
          </span>

          <span className="my-1">
            <a href="#vision">Our vision</a>
          </span>

          <span className="my-1">
            <a href="#team">Our Team</a>
          </span>
        </div>

        <div className="flex flex-col">
          <span className="my-1">
            <a href="#sponsors">Sponsors</a>
          </span>
          <span className="my-1">
            <a
              href="https://github.com/vignetteapp/vignette/releases"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download
            </a>
          </span>
          <span className="my-1">
            <a
              href="https://blog.vignetteapp.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Blog
            </a>
          </span>
        </div>
      </div>
      <div className="flex flex-col xs:text-right my-auto pt-6 md:pt-0 items-right">
        <span className="pb-1 tracking-tight text-sm">
          © {new Date().getFullYear()} The Vignette Authors
        </span>

        <a
          className="md:px-0 pt-1"
          style={{ color: `#fff` }}
          href="https://vercel.com/?utm_source=vignette&utm_campaign=oss"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Powered by Vercel"
        >
          <span className="mr-1 text-sm tracking-tight font-inter">
            Powered by
          </span>
          <ImageWithFallback
            src="/images/vercel.svg"
            alt="Powered by Vercel"
            width="67"
            height="14"
          />
        </a>
        <p className="text-subtle-dark text-xs py-1">
          JetBrains and the JetBrains logo are registered trademarks of
          JetBrains s.r.o.
        </p>
      </div>
    </div>
  )
}
export default Footer
