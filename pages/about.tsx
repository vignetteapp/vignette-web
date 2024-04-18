/* eslint-disable prettier/prettier */
import type { NextPage, GetStaticProps } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'

import repoIcon from 'public/images/icons/repo.png'

import { BiGitPullRequest } from 'react-icons/bi'
import { Nav, SEO, Footer } from 'components'

import { createClient } from '@vercel/kv'
import donationImage from 'public/images/donations.png'
import VignettePadding from 'public/images/logo-bg.svg'
import teamMembers from 'data/members.json'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import Fadein from 'components/FadeIn'
import Button from 'components/Button'

export interface Member {
  name: string
  avatar: string
  id: number
  role: string
  url: string
}

interface pageProps extends cache {
  netReceived: number
  totalPaid: number
  balance: number
}

const splitAt = (xs: string, index: number) => [
  xs.slice(0, index),
  xs.slice(index),
]

const OpenSource: NextPage<pageProps> = ({
  contributors,
  commits,
  netReceived,
  pullRequests,
  openIssues,
  totalPaid,
  balance,
}) => {
  const { t } = useTranslation(`about`)
  const [isOpen, setIsOpen] = useState(false)

  return <>
    <SEO title={t(`page-title`)} />
    <Nav />
    <div className="mt-[74px] pt-8 lg:pt-16" id="content">
      <div className="z-20 mx-auto px-2 pb-8 lg:max-w-7xl ">
        <h1 className="bg-gradient-to-br from-[#005BEA] to-[#00C6FB] bg-clip-text text-center text-4xl font-bold text-transparent xxs:text-6xl lg:text-8xl">
          {t(`title1`)} <br />
          {t(`title2`)}
        </h1>
        <p className="my-4 mx-auto mb-8 mt-8 max-w-4xl text-center sm:px-2 sm:text-lg lg:mb-20 lg:text-xl">
          {t(`hero-p`)}
        </p>
        <Fadein>
          <div className="mx-auto flex flex-wrap gap-8 pb-16 text-center">
            <div className="mx-auto">
              <div className="mb-1 text-4xl font-bold sm:text-6xl">
                {commits}
              </div>
              {t(`commits`)}
              <BiGitPullRequest
                className="mx-auto mt-2 fill-pinkRed"
                size={40}
              />
            </div>
            <div className="mx-auto">
              <div className="mb-1 text-4xl font-bold sm:text-6xl">
                {pullRequests}
              </div>
              {t(`pull-requests`)}
              <BiGitPullRequest
                className="mx-auto mt-2 fill-pinkRed"
                size={40}
              />
            </div>
            <div className="mx-auto">
              <div className="mb-1 text-4xl font-bold sm:text-6xl">
                {openIssues}
              </div>
              {t(`open-issues`)}
              <BiGitPullRequest
                className="mx-auto mt-2 fill-pinkRed"
                size={40}
              />
            </div>
          </div>
          <div className="w-full text-center">
            <Button
              href="https://github.com/vignetteapp"
              className="button mx-auto "
            >
              {t(`visit-github-button`)}
            </Button>
          </div>
        </Fadein>
      </div>
      <Fadein className="mt-32 text-center ">
        <Image src={repoIcon} alt="" quality={100} width={72} height={72} className="inline-block" />

        <h2 className="mt-8 text-2xl font-bold lg:text-3xl">
          {t(`section1-title`)}
        </h2>
        <div className=" mx-auto  mt-6 flex max-w-6xl flex-wrap justify-center gap-4 px-0 lg:p-8 ">
          {contributors.map((user) => (
            (<Link
              passHref
              key={user.login}
              href={`https://github.com/${user.login}`}
              className="p-4">

              <div className="mx-auto">
                <Image
                  width={64}
                  height={64}
                  className="rounded-full"
                  src={user.profile}
                  alt=""
                />
              </div>

            </Link>)
          ))}
        </div>

        <p className="mx-auto mt-8 text-xs leading-snug  text-neutral-800 dark:text-neutral-300 sm:max-w-md sm:text-sm">
          {t(`section1-p`)}
        </p>

        <p className="mt-4 text-xs text-neutral-800 dark:text-neutral-200  ">
          {t(`updates-daily-text`)}
        </p>
      </Fadein>
      <div className="container mt-12 text-center">
        <Image src={donationImage}  className="inline-block" width={400} height={400} alt="" />
        <h1 className="text-3xl font-bold"> {t(`section3-title`)}</h1>
        <p className="mx-auto mt-2 mb-2 max-w-[34em]">{t(`section3-p`)}</p>
        <button
          onClick={() => setIsOpen(true)}
          className="font-semibold text-pinkRed hover:underline"
        >
          {t(`gives-back-button`)}
        </button>
        <Transition appear show={isOpen} as={Fragment}>
          <Dialog
            as="div"
            className="fixed inset-0 z-10 overflow-y-auto"
            onClose={() => setIsOpen(false)}
          >
            <div className="min-h-screen px-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Dialog.Overlay className="fixed inset-0" />
              </Transition.Child>
              <Dialog.Overlay className="fixed inset-0 bg-black/20 backdrop-blur-sm dark:bg-neutral-900/80 " />
              {/* This element is to trick the browser into centering the modal contents. */}
              <span
                className="inline-block h-screen align-middle"
                aria-hidden="true"
              >
                &#8203;
              </span>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <div className="prose-md prose my-8 inline-block w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white px-6 py-4 text-left align-middle shadow-xl transition-all  dark:prose-invert dark:bg-black ">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 "
                  >
                    {t(`gives-back-button`)}
                  </Dialog.Title>
                  <div className="mt-2">
                    <ReactMarkdown>{t(`gives-back-p`)}</ReactMarkdown>
                  </div>

                  <div className="mt-6">
                    <Button
                      className="button-small inline-flex justify-center border border-transparent bg-pinkRed px-4 py-2 text-sm font-medium text-white hover:bg-[#ff2277] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:bg-pinkRed"
                      onClick={() => setIsOpen(false)}
                    >
                      {t(`got-it-button`)}
                    </Button>
                  </div>
                </div>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition>
        <div className="mx-auto my-10 flex w-full max-w-5xl flex-wrap justify-center gap-6 text-lg lg:gap-20 lg:text-xl ">
          <div className="w-40 md:w-52">
            <h3 className="mb-1 text-3xl font-bold lg:text-5xl">
              {netReceived}
            </h3>
            {t(`earned`)}
          </div>

          <div className="w-40 md:w-52">
            <h3 className="mb-1 text-3xl font-bold lg:text-5xl">{balance}</h3>
            {t(`balance`)}
          </div>

          <div className="w-52">
            <h3 className="mb-1 text-3xl font-bold lg:text-5xl">
              {totalPaid}
            </h3>
            {t(`paid`)}
          </div>
        </div>
        <Button href="https://opencollective.com/vignette#category-CONTRIBUTE">
          {t(`support-us-button`)}
        </Button>
      </div>
    </div>

    <Footer />
  </>;
}

export type contributor = {
  login: string
  displayName?: string
  contribs: number
  profile: string
}

export interface cache {
  contributors: contributor[]
  commits: number
  pullRequests: number
  openIssues: number
  timestamp: number
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const client = createClient({
    url: process.env.KV_REST_API_URL as string,
    token: process.env.KV_REST_API_TOKEN as string
  })

  const data = await client.get(`contribs`)

  const parsed: cache = JSON.parse(data as string)

  const ocData = await fetch(`https://api.opencollective.com/graphql/v2`, {
    headers: {
      'content-type': `application/json`,
      'api-key': process.env.OC_KEY as string,
    },
    body: JSON.stringify({
      query: `query account($slug: String) {
        collective(slug: $slug) {
          transactions{
            nodes {
              description(dynamic: true, full:true)

              kind

              amount{
                value
              }
            }

          }
          stats {
            totalNetAmountReceived {
              value
            }



            balanceWithBlockedFunds {
              value
            }

          }
      }
    }`,
      variables: { slug: `vignette` },
    }),

    method: `POST`,
  }).then(async (res) => res.json())

  const currencyFormatter = new Intl.NumberFormat(`en-US`, {
    style: `currency`,
    currency: `USD`,
  })

  const transactions = ocData.data?.collective.transactions.nodes.filter(
    (i: Record<string, string>) =>
      i.kind == `EXPENSE` && i.description.toLowerCase().includes(`developer`),
  )

  let totalPaid = 0

  transactions?.forEach(
    (t: { kind: string; amount: { value: number } }) =>
      (totalPaid -= t.amount.value),
  )

  const { totalNetAmountReceived, balanceWithBlockedFunds } = ocData.data
    ?.collective.stats
    ? ocData.data?.collective.stats
    : {
        totalNetAmountReceived: { value: 0 },
        balanceWithBlockedFunds: { value: 0 },
      }

  return {
    props: {
      netReceived: currencyFormatter.format(totalNetAmountReceived.value),
      balance: currencyFormatter.format(balanceWithBlockedFunds.value),
      totalPaid: currencyFormatter.format(totalPaid),
      ...parsed,
      ...(await serverSideTranslations(locale as string, [
        `about`,
        `nav`,
        `common`,
      ])),
    }, // will be passed to the page component as props
    revalidate: 600,
  }
}

export default OpenSource
