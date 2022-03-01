import type { GetStaticProps, NextPage } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Blahaj from 'public/images/blahaj.jpg'
import text404 from 'public/images/404text.png'

import { useRouter } from 'next/router'

import { Nav, Container, SEO, Footer } from 'components'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'

const Custom404: NextPage = () => {
  const router = useRouter()
  const { t } = useTranslation(`404`)
  const { slug } = router.query

  const inConstruction = [`blog`, `plugins`].includes(slug as string)

  return (
    <>
      <SEO
        title={
          inConstruction
            ? `This page is currently being developed.`
            : `You hit a dead end.`
        }
      />
      <Nav />
      <Container className=" max-w-7xl ">
        <div className="z-20 mx-auto  text-center ">
          {!inConstruction ? (
            <>
              <div className="animation-flicker mt-4">
                <Image src={text404} alt="404" width={207} height={45} />
              </div>

              <h1 className="text-6xl font-semibold lg:text-7xl">
                {t(`dead-end`)}
              </h1>
              <p className="my-5 mt-6 text-xl lg:text-2xl">{t(`guide-back`)}</p>
            </>
          ) : (
            <>
              <h1 className="mt-8 text-3xl font-semibold lg:text-4xl">
                {t(`in-construction`)}
              </h1>
              <p className="mt-4 text-lg">{t(`check-later`)}</p>
              <p className="my-2 mb-4 text-sm lg:text-lg">
                {t(`blahaj-while-waiting`)}
              </p>
            </>
          )}

          <div className="my-2 mx-auto inline-flex overflow-clip rounded-xl drop-shadow-lg">
            <Image src={Blahaj} alt="" width="712" height="450" />
          </div>
          <div className="mx-auto mt-8 mb-8 flex justify-center">
            <button
              onClick={() => router.back()}
              className="mx-3 w-44 items-center rounded-full bg-pinkRed px-8 py-1 text-lg font-semibold text-white "
            >
              {t(`go-back`)}
            </button>
            <Link
              passHref
              href="https://www.ikea.com/us/en/p/blahaj-soft-toy-shark-90373590/"
            >
              <a className="mx-3 inline-flex w-44 items-center rounded-full bg-yellow-500 px-8 py-1  font-semibold text-white ">
                <span className="mx-auto">{t(`get-blahaj`)}</span>
              </a>
            </Link>
          </div>

          <a
            href="https://twitter.com/niichi021"
            className="pt-4 text-sm text-gray-700 dark:text-gray-300"
          >
            {t(`image-sauce`)}
          </a>
        </div>
      </Container>
      <Footer />
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, [
        `404`,
        `nav`,
        `common`,
      ])),
    }, // will be passed to the page component as props
    revalidate: 10,
  }
}
export async function getStaticPaths() {
  return {
    paths: [
      // String variant:
      `/blog`,
      `/features`,
      `/plugins`,
    ],
    fallback: true,
  }
}

export default Custom404
