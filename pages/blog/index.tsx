import Link from 'next/link'
import { compareDesc, format, parseISO } from 'date-fns'
import Image from 'next/image'
import { allPosts, Post } from 'contentlayer/generated'
import { GetStaticProps, NextPage } from 'next'
import { Container, Footer, BlogNav, SEO } from 'components'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import members from 'data/members.json'

import banner from 'public/images/banner-new.jpg'

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const posts = allPosts.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date))
  })
  return {
    props: {
      posts,
      ...(await serverSideTranslations(locale as string, [
        `blog`,
        `nav`,
        `common`,
      ])),
    },
  }
}

function PostCard(post: Post) {
  return (
    <div className="mx-auto mb-6 max-w-lg justify-center">
      <div className="inline-flex h-48 max-w-md overflow-hidden rounded">
        <Image
          src={post.image}
          width="388"
          height="200"
          className=" rounded object-cover object-top"
          alt=""
        />
      </div>

      <div className="py-4">
        <h3 className="my-1 text-xs font-bold uppercase text-pinkRed">
          Announcements
        </h3>
        <h2 className="text-2xl font-bold">
          <Link href={post.url}>
            <a className="">{post.title}</a>
          </Link>
        </h2>
        <p className="mt-4">{post.summary}</p>
        <div className="mt-4 flex items-center">
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
    </div>
  )
}

const Blog: NextPage<{ posts: Post[] }> = ({ posts }) => {
  const { t } = useTranslation(`blog`)
  const [featuredPost] = posts.slice(-1)

  return (
    <>
      <SEO title={t(`page-title`, `Blog`)} />

      <Container noMargin>
        <div
          style={{
            backgroundImage: `url(https://static.ghost.org/v4.0.0/images/publication-cover.jpg)`,
          }}
          className="prose-invert w-full bg-cover bg-center pb-28 text-white "
        >
          <BlogNav />
          <h1 className="pt-16 pb-4 text-center text-5xl font-bold text-white">
            The Vignette Transcripts
          </h1>
          <p className="pb-10 text-center text-xl ">
            Blog posts from the developers of Vignette.
          </p>
        </div>
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto mb-6 flex flex-wrap justify-center pt-8 lg:flex-nowrap">
            <div className="inline-flex h-48 overflow-hidden rounded lg:h-full">
              <Image
                src={featuredPost.image}
                width="1000"
                height="600"
                quality={100}
                className="rounded object-cover object-top"
                alt=""
              />
            </div>

            <div className="py-4 lg:w-[28rem] lg:py-8 lg:px-8">
              <h3 className="my-1 text-xs font-bold uppercase text-pinkRed">
                Announcements
              </h3>
              <h2 className="text-4xl font-bold">
                <Link href={featuredPost.url}>
                  <a className="">{featuredPost.title}</a>
                </Link>
              </h2>
              <p className="mt-4">{featuredPost.summary}</p>
              <div className="mt-4 flex items-center">
                <Image
                  src={
                    members.filter(
                      (item) => item.name == featuredPost.author,
                    )[0].avatar
                  }
                  width={40}
                  height={40}
                  alt=""
                  className="rounded-full"
                />
                <div className="pl-2 text-sm">
                  <span className="font-semibold">{featuredPost.author}</span>
                  <time
                    dateTime={featuredPost.date}
                    className="block text-gray-600 dark:text-gray-200"
                  >
                    {format(parseISO(featuredPost.date), `LLLL d, yyyy`)}
                  </time>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 pt-8">
            {posts.slice(0, -1).map((post, idx) => (
              <PostCard key={idx} {...post} />
            ))}
          </div>
        </div>
      </Container>
      <Footer />
    </>
  )
}
export default Blog
