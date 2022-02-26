import { useRouter } from 'next/router'
import Head from 'next/head'
import Script from 'next/script'
import '@fontsource/noto-sans-jp'

const SEO: React.FC<{
  title?: string
  date?: string
  image?: string
  desc?: string
  type?: string
}> = ({ title, date, image, desc, type }) => {
  const router = useRouter()

  return (
    <>
      <Head>
        <link
          href="/fonts/Inter-roman.var.woff2"
          rel="preload"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />

        <title>
          {title ? `${title} - Vignette` : `Vignette - Streaming Redefined`}
        </title>
        <meta
          name="title"
          content={
            title ? `${title} - Vignette` : `Vignette - Streaming Redefined`
          }
        />
        <meta
          name="description"
          content={desc || `The Open Source Virtual Streamers' Toolkit.`}
        />

        <meta property="og:type" content={type || `website`} />
        <meta
          property="og:url"
          content={`https://vignetteapp.org${router.asPath}`}
        />
        <meta
          property="og:title"
          content={
            title ? `${title} - Vignette` : `Vignette - Streaming Redefined`
          }
        />
        <meta
          property="og:description"
          content={desc || `The Open Source Virtual Streamers' Toolkit.`}
        />
        <meta
          property="og:image"
          content={image || `https://vignetteapp.org/images/banner-new.jpg`}
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content={`https://vignetteapp.org${router.asPath}`}
        />
        <meta
          property="twitter:title"
          content={
            title ? `${title} - Vignette` : `Vignette - Streaming Redefined`
          }
        />
        <meta
          property="twitter:description"
          content={desc || `The Open Source Virtual Streamers' Toolkit.`}
        />
        <meta
          property="twitter:image"
          content={image || `https://vignetteapp.org/images/banner-new.jpg`}
        />
        <meta property="article:published_time" content={date} />
      </Head>
      <Script
        defer
        data-domain="vignetteapp.org"
        src="https://plausible.matterho.st/js/plausible.js"
        strategy="afterInteractive"
      />
    </>
  )
}
export default SEO
