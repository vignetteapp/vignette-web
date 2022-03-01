import { useRouter } from 'next/router'
import Head from 'next/head'
import Script from 'next/script'
import { useTranslation } from 'next-i18next'

const SEO: React.FC<{
  title?: string
  date?: string
  image?: string
  desc?: string
  type?: string
}> = ({ title, date, image, desc, type }) => {
  const router = useRouter()
  const { t } = useTranslation()

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

        {router.locale == `ja` && (
          <link
            href="/fonts/noto-sans-jp-v40-japanese-700.woff2"
            rel="preload"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
        )}
        {router.locale == `ko` && (
          <link
            href="/fonts/noto-sans-kr-v40-korean-700.woff2"
            rel="preload"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
        )}
        <title>{title ? t(`title`, { title }) : t(`default-title`)}</title>
        <meta
          name="title"
          content={title ? t(`title`, { title }) : t(`default-title`)}
        />
        <meta name="description" content={desc || t(`desc`)} />
        <meta property="og:type" content={type || `website`} />
        <meta
          property="og:url"
          content={`https://vignetteapp.org${router.asPath}`}
        />
        <meta
          property="og: title"
          content={title ? t(`title`, { title }) : t(`default-title`)}
        />
        <meta property="og:description" content={desc || t(`desc`)} />
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
          content={title ? t(`title`, { title }) : t(`default-title`)}
        />
        <meta property="twitter:description" content={desc || t(`desc`)} />
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
