import type { GetStaticProps, NextPage } from 'next'
import Link from 'next/link'
import Image from "next/legacy/image"
import Blahaj from 'public/images/blahaj.jpg'
import text404 from 'public/images/404text.png'

import { useRouter } from 'next/router'

import { Nav, SEO, Footer } from 'components'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import Button from 'components/Button'

const Custom404: NextPage = () => {
  const router = useRouter()
  const { t } = useTranslation(`404`)
  const path = router.asPath
  console.log(path)
  const inConstruction = [`/features`, `/plugins`].includes(path as string)

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
      <div className="container mt-24" id="content">
        <div className="z-20 mx-auto  text-center ">
          {!inConstruction ? (
            <>
              <div className="animation-flicker mt-4">
                <Image
                  src={text404}
                  alt="404"
                  width={207}
                  height={45}
                  className="mx-auto"
                />
              </div>

              <h1 className="text-5xl font-semibold lg:text-6xl">
                {t(`dead-end`)}
              </h1>
              <p className="my-5 mt-4 text-xl ">{t(`guide-back`)}</p>
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

          <Image
            src={Blahaj}
            alt=""
            className=" my-2 mx-auto max-h-[26rem] w-auto rounded-xl border"
          />

          <div className="mx-auto mt-8 mb-8 flex flex-wrap justify-center gap-4">
            <Button
              type="primary"
              className="whitespace-nowrap bg-pinkRed"
              onClick={() => router.back()}
            >
              {t(`go-back`)}
            </Button>

            <Button
              type="secondary"
              href="https://www.ikea.com/us/en/p/blahaj-soft-toy-shark-90373590/"
              className="whitespace-nowrap"
            >
              <span className="mx-auto">{t(`get-blahaj`)}</span>
            </Button>
          </div>

          <a
            href="https://twitter.com/niichi021"
            className="pt-4 text-sm text-gray-700 dark:text-gray-300"
          >
            {t(`image-sauce`)}
          </a>
        </div>
      </div>
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
    },
  }
}
export default Custom404
