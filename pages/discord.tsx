import type { GetStaticProps, NextPage } from 'next'
import Link from 'next/link'

import { useRouter } from 'next/router'

import { Nav, SEO, Footer } from 'components'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import Button from 'components/Button'

const discord: NextPage = () => {
  const { t } = useTranslation(`discord`)
  const { locale } = useRouter()


  return (
    <>
      <SEO title={`WE HAVE DISCORD!!`}/>
      <Nav />
      <div
        className="z-20 mt-[74px] overflow-x-clip pt-8 lg:relative"
        id="content"
      >
      <div className="mx-auto mt-8 max-w-7xl grid-cols-1 px-6 lg:grid-cols-2 lg:gap-24 lg:pt-20 lg:pb-[14rem] xl:grid">
          <div className="pb-8 lg:max-w-4xl">
            <h1
              className={
                `gradient-primary bg-gradient-to-br bg-clip-text text-6xl font-bold text-transparent ` +
                ([`en`, `ko`, `fil`, `de`].includes(locale as string)
                  ? `xs:text-6xl lg:text-7xl   `
                  : `xs:text-5xl lg:text-6xl `)
              }
            >
              {t(`title1`)}
              <br /> 
            </h1>

            <p className="my-4 text-lg text-black dark:text-neutral-200 xs:text-xl lg:mb-8 lg:max-w-[36ch] ">
              {t(`hero-p`)}
            </p>
              <p className="my-4 text-lg text-black dark:text-neutral-200 xs:text-xl lg:mb-8 lg:max-w-[36ch] ">
              {t(`discord-invite`)}
            </p>

            <Button
            //small-button
              href="https://discord.gg/rsPNAxwweg"
              className=" inline-block sm:hidden"
              
            >
              {t(`join-discord-short`)}&rarr;
            </Button>
            <Button
              size="large"
              href="https://discord.gg/rsPNAxwweg"
              className=" hidden sm:inline-block"
            >
              {t(`join-discord-long`)} &rarr;
            </Button>
          </div>
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
        `discord`,
        `nav`,
        `common`,
      ])),
    },
    revalidate: 10,
  }
}
export default discord
