// pages/posts/[slug].js

import Head from 'next/head'
import Link from 'next/link'
import { format, parseISO } from 'date-fns'
import { allPosts, Post } from 'contentlayer/generated'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { Footer, Nav, SEO } from 'components'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import circles from 'public/images/blog-banner.png'
import components from 'components/MDXComponents'
import { getMDXComponent } from 'mdx-bundler/client'

import Image from 'next/image'
import members from 'data/members.json'
import { useMemo } from 'react'
import { useTranslation } from 'next-i18next'

const PostLayout: NextPage<{ post: Post }> = ({ post }) => {
  const Component = useMemo(
    () => getMDXComponent(post.body.code),
    [post.body.code],
  )
  const { t } = useTranslation(`blog`)

  return (
    <>
      <SEO
        title={t(`blog-template`, { title: post.title })}
        desc={post.summary}
        template={false}
      />

      <Nav />

      <article className="mx-auto mt-[74px] py-8 lg:py-12 " id="content">
        <div className="mx-auto mb-6 max-w-5xl px-6">
          <Link
            href={
              `/blog/category/` +
              post.category.toLowerCase().split(` `).join(`-`)
            }
            className="text-sm font-semibold uppercase tracking-tight text-pinkRed"
          >
            {post.category}
          </Link>

          <h1 className="mt-1 text-5xl font-bold tracking-tight lg:text-5xl">
            {post.title}
          </h1>

          <p className=" prose mt-8 text-neutral-700 dark:prose-invert dark:text-neutral-300  sm:prose-lg">
            {post.summary}
          </p>

          <a className="my-8 inline-flex h-[34rem] overflow-hidden rounded-md">
            <Image
              src={post.image}
              width="1080"
              height="540"
              quality={100}
              className="rounded-md object-cover object-center "
              alt=""
              priority
              style={{
                maxWidth: `100%`,
                height: `auto`,
              }}
            />
          </a>

          <div className="flex items-center">
            <Image
              src={members.filter((item) => item.name == post.author)[0].avatar}
              width={40}
              height={40}
              alt=""
              className="rounded-full"
              style={{
                maxWidth: `100%`,
                height: `auto`,
              }}
            />
            <div className="pl-3">
              <span className="font-semibold">{post.author}</span>
            </div>
            <div className="ml-auto flex items-center gap-4">
              <span className="h-6 border-l border-neutral-400 dark:border-neutral-400" />
              <time
                dateTime={post.date}
                className=" block text-gray-600 dark:text-gray-200"
              >
                {format(parseISO(post.date), `LLLL d, yyyy`)}
              </time>
            </div>
          </div>
          <hr className="my-4 border-neutral-300 dark:border-neutral-600 lg:mb-16" />
        </div>

        <div className="prose prose-lg prose-neutral relative mx-auto max-w-3xl px-6 prose-h2:tracking-tight prose-p:text-neutral-900 prose-a:text-pinkRed prose-img:rounded dark:prose-invert dark:prose-p:text-neutral-400 ">
          <Component
            components={
              {
                ...components,
              } as any
            }
          />
        </div>
      </article>
      <div className="mx-auto max-w-3xl px-6">
        <h3 className="mb-1 font-semibold">Tags</h3>
        <div className="mb-8 flex gap-2">
          {post.tags.map((tag, i) => (
            <div
              className="max-w-min rounded bg-neutral-800 py-1 px-2 text-sm capitalize text-white "
              key={i}
            >
              {tag}
            </div>
          ))}
        </div>

        <Link href="/blog" passHref>
          <span className="tracking-[0]">&lt;-</span>
          {` `}
          {t(`back-to-list`)}
        </Link>
      </div>
      {/* <div className="relative left-0 h-80 w-80  lg:top-24 2xl:absolute">
    <Image src={circles} layout="fill" priority alt="" />
  </div> */}
      <Footer />
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
  const paths: { params: { slug: string }; locale: string }[] = []

  for (const locale of locales as string[]) {
    allPosts.map((post) => {
      paths.push({ params: { slug: post.slug }, locale })
    })
  }

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params, locale }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params?.slug)
  return {
    props: {
      ...(await serverSideTranslations(locale as string, [
        `blog`,
        `nav`,
        `common`,
      ])),
      post,
    },
  }
}

export default PostLayout
