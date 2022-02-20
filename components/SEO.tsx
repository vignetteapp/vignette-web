import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Script from 'next/script'

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
      </Head>
      <Script
        defer
        data-domain="vignetteapp.org"
        src="https://plausible.matterho.st/js/plausible.js"
        strategy="afterInteractive"
      ></Script>

      <NextSeo
        title={title ? `${title} - Vignette` : `Vignette - Streaming Redefined`}
        description={desc || `The Open Source Virtual Streamers' Toolkit.`}
        canonical={`https://vignetteapp.org${router.asPath}`}
        openGraph={{
          type: type,
          url: `https://vignetteapp.org${router.asPath}`,
          title: title || `Vignette - Streaming Redefined`,
          article: { publishedTime: date },

          description: desc || `The Open Source Virtual Streamers' Toolkit.`,
          site_name: title || `Vignette - Streaming Redefined`,
          images: [
            {
              url:
                image || `https://encore.vignetteapp.org/images/banner-new.jpg`,
            },
          ],
        }}
        twitter={{
          handle: `@vignette_org`,
          cardType: `summary_large_image`,
        }}
      />
    </>
  )
}
export default SEO
