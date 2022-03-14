// pages/posts/[slug].js

import Head from 'next/head'
import Link from 'next/link'
import { format, parseISO } from 'date-fns'
import { allPosts, Post } from 'contentlayer/generated'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { Footer, BlogNav, SEO } from 'components'
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

      <BlogNav />

      <article className="mx-auto py-8 lg:py-12 " id="content">
        <div className="mx-auto mb-6 max-w-3xl px-4">
          <Link href="/blog">
            <a className="text-sm font-semibold uppercase tracking-tight text-pinkRed">
              {post.catagory}
            </a>
          </Link>

          <h1 className="mt-1 text-3xl font-bold lg:text-5xl">{post.title}</h1>
          <p className=" prose mt-8 text-neutral-500 dark:prose-invert dark:text-neutral-400  sm:prose-lg">
            {post.summary}
          </p>
          <div className="mt-8 flex items-center">
            <Image
              src={members.filter((item) => item.name == post.author)[0].avatar}
              width={40}
              height={40}
              alt=""
              className="rounded-full"
            />
            <div className="pl-2 text-sm">
              <span className="font-semibold">{post.author}</span>
              <time
                dateTime={post.date}
                className="block text-gray-600 dark:text-gray-200"
              >
                {format(parseISO(post.date), `LLLL d, yyyy`)}
              </time>
            </div>
          </div>
        </div>

        <div className="prose prose-lg prose-neutral relative mx-auto max-w-3xl px-4 prose-a:text-pinkRed prose-img:rounded dark:prose-invert">
          <Component
            components={
              {
                ...components,
              } as any
            }
          />
        </div>
      </article>
      <div className="mx-auto max-w-3xl px-4">
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
          <a>
            <span className="tracking-[0]">&lt;-</span>
            {` `}
            {t(`back-to-list`)}
          </a>
        </Link>
      </div>
      <div className="relative left-0 h-80 w-80  lg:top-24 2xl:absolute">
        <Image src={circles} layout="fill" priority alt="" />
      </div>
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
