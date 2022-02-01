import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'
import Head from 'next/head'

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
        <link
          href="/fonts/Spartan.woff2"
          rel="preload"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </Head>
      <NextSeo
        title={
          title || `Vignette - The open source virtual streamers' toolkit.`
        }
        description={desc || `The open source virtual streamers' toolkit.`}
        canonical={`https://vignetteapp.org${router.asPath}`}
        openGraph={{
          type: type,
          url: `https://vignetteapp.org${router.asPath}`,
          title: title || `Jeeho Ahn | Portfolio`,
          article: { publishedTime: date },

          description: desc || `The Open Source Vtuber Toolkit.`,
          site_name: title || `The open source virtual streamers' toolkit`,
          images: [
            {
              url: image || `https://encore.vignetteapp.org/images/banner.jpg`,
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
