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
  template?: boolean
}> = ({ title, date, image, desc, type, template = true }) => {
  const router = useRouter()
  const { t } = useTranslation(`common`)

  const templateTitle = title
    ? t(`title-template`, { title: title })
    : t(`default-title`)
  return (
    <>
      <Head>
        <link
          rel="preload"
          as="style"
          href="https://fonts.vignetteapp.org/pretendard-std/pretendard-std.css"
        />
        {/* {router.locale == `ja` && (
          <link
            href="/fonts/PretendardJPVariable.woff2"
            rel="preload"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
        )}
        {router.locale == `en` && (
          <link
            href="/fonts/pretendard-std/PretendardStd-Bold.woff2"
            rel="preload"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
        )} */}
        <title>{template ? templateTitle : title}</title>
        <meta name="title" content={template ? templateTitle : title} />
        <meta name="description" content={desc || t(`desc`)} />
        <meta property="og:type" content={type || `website`} />
        <meta
          property="og:url"
          content={`https://vignetteapp.org${router.asPath}`}
        />
        <meta property="og: title" content={template ? templateTitle : title} />
        <meta property="og:description" content={desc || t(`desc`)} />
        <meta
          property="og:image"
          content={image || `https://vignetteapp.org/images/banner.png`}
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content={`https://vignetteapp.org${router.asPath}`}
        />
        <meta
          property="twitter:title"
          content={template ? templateTitle : title}
        />
        <meta property="twitter:description" content={desc || t(`desc`)} />
        <meta
          property="twitter:image"
          content={image || `https://vignetteapp.org/images/banner.png`}
        />
        <meta property="article:published_time" content={date} />
      </Head>
      <Script
        defer
        data-domain="vignetteapp.org"
        src="https://stats.willit.fail/js/plausible.js"
        strategy="afterInteractive"
      />
    </>
  )
}
export default SEO
