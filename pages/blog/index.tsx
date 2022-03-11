import Link from 'next/link'
import { compareDesc, format, parseISO } from 'date-fns'
import Image from 'next/image'
import { allPosts, Post } from 'contentlayer/generated'
import { GetStaticProps, NextPage } from 'next'
import { Container, Footer, BlogNav, SEO } from 'components'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import members from 'data/members.json'

import publicationCover from 'public/images/publication-cover.jpg'

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
    <div className="mb-6 w-full flex-wrap md:max-w-[22.5rem]  ">
      <Link href={post.url} passHref>
        <a className="inline-flex h-44 overflow-hidden rounded ">
          <Image
            src={post.image}
            width="1080"
            height="810"
            quality={100}
            className="rounded object-cover object-center"
            alt=""
          />
        </a>
      </Link>
      <div className="w-full py-4 ">
        <h3 className="my-1 text-xs font-bold uppercase text-pinkRed">
          {post.catagory}
        </h3>
        <Link href={post.url} passHref>
          <a>
            <h2 className="text-2xl font-bold ">{post.title}</h2>
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

const Blog: NextPage<{ posts: Post[] }> = ({ posts }) => {
  const { t } = useTranslation(`blog`)
  const [featuredPost] = posts.slice(-1)

  return (
    <>
      <SEO title={t(`title`)} desc={t(`hero-p`)} template={false} />

      <Container noMargin>
        <div className="prose-invert relative z-20 w-full overflow-hidden pb-14 text-white md:pb-28 ">
          <Image
            src={publicationCover}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            priority
            alt=""
          />
          <BlogNav />
          <div className="relative z-30 px-4">
            <h1 className="pt-4 pb-4 text-center text-4xl font-bold text-white md:pt-16 lg:text-5xl">
              {t(`hero-title`)}
            </h1>
            <p className="text-center text-lg lg:text-xl ">{t(`hero-p`)}</p>
          </div>
        </div>
        <div className="mx-auto grid max-w-7xl gap-8 px-6  pt-8 sm:grid-cols-2 md:grid-cols-1 ">
          <div className="mx-0 mb-6 flex flex-wrap md:max-w-full md:flex-nowrap">
            <Link href={featuredPost.url} passHref>
              <a className="inline-flex h-44 overflow-hidden rounded xs:h-64 md:h-[28rem]">
                <Image
                  src={featuredPost.image}
                  width="1080"
                  height="540"
                  quality={100}
                  className="rounded object-cover object-center"
                  alt=""
                  priority
                />
              </a>
            </Link>
            <div className="py-4 md:px-8 md:py-8 lg:w-[32rem]">
              <h3 className="my-1  text-xs font-bold uppercase text-pinkRed">
                {featuredPost.catagory}
              </h3>
              <Link href={featuredPost.url} passHref>
                <a>
                  <h2 className="text-2xl font-bold lg:text-4xl">
                    {featuredPost.title}
                  </h2>
                  <p className="mt-4">{featuredPost.summary}</p>
                </a>
              </Link>
              <div className="mt-4 flex items-center">
                <Link
                  href={
                    members.filter(
                      (item) => item.name == featuredPost.author,
                    )[0].url
                  }
                >
                  <a>
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
                  </a>
                </Link>
                <div className="pl-2 text-sm">
                  <Link
                    href={
                      members.filter(
                        (item) => item.name == featuredPost.author,
                      )[0].url
                    }
                  >
                    <a>
                      <span className="font-semibold">
                        {featuredPost.author}
                      </span>
                    </a>
                  </Link>

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
          {posts.slice(0, -1).map((post, idx) => (
            <PostCard key={idx} {...post} />
          ))}
        </div>
      </Container>
      <Footer />
    </>
  )
}
export default Blog
