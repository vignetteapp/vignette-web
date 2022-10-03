import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import type { GetStaticProps, NextPage } from 'next'
import Image from 'next/image'
import { cache } from './about'

import { Nav, SEO, Footer } from 'components'
import envelope from 'public/images/envelope.png'

import { SiDiscord, SiGithub, SiTwitter } from 'react-icons/si'
const Home: NextPage<cache> = () => {
  const { t } = useTranslation(`contact`)
  return (
    <>
      <SEO title={t(`page-title`)} />
      <Nav />
      <div
        id="content"
        className="container z-20 mx-auto max-w-7xl overflow-hidden pt-8 text-center lg:relative lg:pt-20"
      >
        <div className=" flex justify-center">
          <h1
            style={{
              paddingLeft: `0.2em`,
              marginLeft: `-0.2em`,
              paddingBottom: `0.2em`,
              marginBottom: `-0.2em`,
            }}
            className="gradient-primary max-w-2xl bg-clip-text text-4xl font-bold text-transparent xxs:text-5xl lg:text-7xl"
          >
            {t(`title`)}
          </h1>
        </div>

        <p className="mx-auto mt-8 max-w-md text-lg lg:mt-16">
          {t(`hero-p-1`)} {` `}
          <span className="font-bold">{t(`hero-p-2`, { members: 89 })}</span>
          {` `}
          {t(`hero-p-3`)}
        </p>
        <div className="mx-auto mt-10 flex  flex-wrap justify-center gap-8 p-4 ">
          <div className="flex h-96 w-full max-w-[16rem] flex-col justify-between rounded-xl border p-8 px-10 text-center shadow dark:border-neutral-700">
            <div className="item-center dark:border-none-neutral-700 mx-auto flex h-24 w-24 items-center justify-center rounded-xl border bg-[#2732cc] dark:border dark:border-none ">
              <SiDiscord size={48} color="white" className=" " />
            </div>
            <h3 className=" mt-4 text-xl font-bold">Discord</h3>
            <p className="mx-auto mt-2 mb-10 max-w-[16rem] text-center text-sm">
              {t(`discord-p`)}
            </p>
            <a
              className="button-small w-full"
              href="https://discord.gg/rsPNAxwweg"
            >
              {t(`join-button`)}
            </a>
          </div>

          <div className="flex h-96 w-[16rem] flex-col justify-between rounded-xl border p-8 px-10 text-center shadow dark:border-neutral-700">
            <div>
              <div className=" item-center mx-auto flex h-24 w-24 items-center justify-center rounded-xl border bg-white dark:border-none dark:border-neutral-700">
                <SiGithub size={48} color="black" className=" " />
              </div>
              <h3 className=" mt-4 text-xl font-bold">GitHub</h3>
              <p className="mx-auto mt-2  mb-10 max-w-[10rem] text-center text-sm">
                {t(`github-p`)}
              </p>
            </div>
            <a
              className="button-small w-full"
              href="https://github.com/vignetteapp"
            >
              {t(`visit-button`)}
            </a>
          </div>

          <div className="flex h-96 w-[16rem] flex-col justify-between rounded-xl border p-8 px-10 text-center shadow dark:border-neutral-700">
            <div>
              <div className="item-center mx-auto flex h-24 w-24 items-center justify-center rounded-xl border bg-white dark:border-none dark:border-neutral-700">
                <SiTwitter size={48} className="fill-[#59adff] " />
              </div>
              <h3 className=" mt-4 text-xl font-bold">Twitter</h3>
              <p className="mx-auto mt-2 max-w-[10rem] text-center text-sm">
                {t(`twitter-p`)}
              </p>
            </div>
            <a
              className="button-small w-full"
              href="https://twitter.com/vignette_org"
            >
              {t(`visit-button`)}
            </a>
          </div>

          <div className="flex h-96 w-[16rem] flex-col justify-between rounded-xl border p-8 px-10 text-center shadow dark:border-neutral-700">
            <div>
              <div className="item-center mx-auto flex h-24 w-24 items-center justify-center rounded-xl border bg-pinkRed dark:border-none dark:border-neutral-700">
                <Image src={envelope} width={48} height={48} alt="" />
              </div>
              <h3 className=" mt-4 text-xl font-bold">{t(`anything-else`)}</h3>
              <p className="mx-auto mt-2 max-w-[18rem] text-center text-sm">
                {t(`email-p`)}
              </p>
            </div>
            <a
              className="button-small w-full"
              href="mailto:hello@vignetteapp.org"
            >
              {t(`email-us-button`)}
            </a>
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
        `contact`,
        `nav`,
        `common`,
      ])),
    }, // will be passed to the page component as props
    revalidate: 10,
  }
}

export default Home
