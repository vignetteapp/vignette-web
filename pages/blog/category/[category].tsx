import Link from 'next/link'
import { compareDesc, format, parseISO } from 'date-fns'
import Image from 'next/image'
import { allPosts, Post } from 'contentlayer/generated'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { Footer, Nav, SEO } from 'components'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import members from 'data/members.json'

export const getStaticProps: GetStaticProps = async ({ params, locale }) => {
  let posts = allPosts.filter((post) => {
    return post.category.toLowerCase().split(` `).join(`-`) == params?.category
  })

  posts = posts.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date))
  })
  return {
    props: {
      posts: posts,
      category: posts[0].category, // non-formatted category string
      ...(await serverSideTranslations(locale as string, [
        `blog`,
        `nav`,
        `common`,
      ])),
    },
  }
}

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
  const paths: { params: { category: string }; locale: string }[] = []

  const categories: string[] = []

  allPosts.forEach((post) => {
    if (!categories.includes(post.category)) {
      categories.push(post.category.toLowerCase().split(` `).join(`-`))
    }
  })

  for (const locale of locales as string[]) {
    categories.map((category) => {
      paths.push({ params: { category }, locale })
    })
  }

  return {
    paths,
    fallback: false,
  }
}

function PostCard(post: Post) {
  return (
    <div className="mb-6 w-[22.5rem]  ">
      <Link href={post.url} passHref>
        <a className="inline-flex h-44 overflow-hidden rounded-md  xs:h-48  ">
          <Image
            src={post.image}
            width="1080"
            height="810"
            quality={100}
            className="rounded-md object-cover object-center transition duration-300 hover:scale-105"
            alt=""
          />
        </a>
      </Link>
      <div className="w-full py-4 ">
        <h3 className="my-1 text-xs font-bold uppercase text-pinkRed">
          {post.category}
        </h3>
        <Link href={post.url} passHref>
          <a>
            <h2 className="text-2xl font-bold tracking-tight">{post.title}</h2>
            <p className="mt-4">{post.summary}</p>
          </a>
        </Link>
        <div className="mt-4 flex items-center">
          <Link
            href={members.filter((item) => item.name == post.author)[0].url}
          >
            <a>
              <Image
                src={
                  members.filter((item) => item.name == post.author)[0].avatar
                }
                width={40}
                height={40}
                alt=""
                className="rounded-full"
              />
            </a>
          </Link>
          <div className="pl-2 text-sm">
            <Link
              href={members.filter((item) => item.name == post.author)[0].url}
            >
              <a>
                <span className="font-semibold">{post.author}</span>
              </a>
            </Link>

            <time
              dateTime={post.date}
              className="block text-gray-600 dark:text-gray-200"
            >
              {format(parseISO(post.date), `LLLL d, yyyy`)}
            </time>
          </div>
        </div>
      </div>
    </div>
  )
}

const CategoryPage: NextPage<{ posts: Post[]; category: string }> = ({
  category,
  posts,
}) => {
  const { t } = useTranslation(`blog`)

  return (
    <>
      <SEO title={t(`title`)} desc={t(`hero-p`)} template={false} />

      <div id="content" className="relative mt-[74px]">
        <Nav />
        <div className="container relative mt-[74px] py-4 ">
          <div className="relative z-20 mt-20 max-w-2xl   rounded-xl border bg-white p-6 text-left shadow dark:bg-[#181a1b] lg:p-12">
            <div>Category</div>
            <h1 className="pb-4 text-4xl font-bold lg:text-5xl">{category}</h1>
            <Link href="/blog" passHref>
              <a>
                <span className="tracking-[0]">&lt;-</span>
                {` `}
                {t(`back-to-list`)}
              </a>
            </Link>
          </div>
          <svg
            className="absolute left-0 top-8 z-0"
            width="404"
            height="392"
            fill="none"
            viewBox="0 0 404 392"
          >
            <defs>
              <pattern
                id="837c3e70-6c3a-44e6-8854-cc48c737b659"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x="0"
                  y="0"
                  width="4"
                  height="4"
                  className="text-gray-200 transition dark:text-neutral-600"
                  fill="currentColor"
                ></rect>
              </pattern>
            </defs>
            <rect
              width="404"
              height="392"
              fill="url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"
            ></rect>
          </svg>
        </div>
        <div
          className="relative z-30 mx-auto flex max-w-7xl flex-wrap gap-8  px-6 pt-8"
          id="blog-feed"
        >
          {posts.map((post, idx) => (
            <PostCard key={idx} {...post} />
          ))}
        </div>
        <div className="mx-auto mt-8 max-w-7xl px-6">
          <Link href="/" passHref>
            <a>&lt;- {t(`back-to-list`)}</a>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  )
}
export default CategoryPage
