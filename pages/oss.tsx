import type { NextPage, GetStaticProps } from 'next'
import Image from 'next/image'

import repoIcon from 'public/images/icons/repo.png'

import { BiGitPullRequest } from 'react-icons/bi'
import { Nav, Container, SEO, Footer, FadeIn } from 'components'

const OpenSource: NextPage<{ data: contributor[] }> = ({ data }) => {
  console.log(data)
  return (
    <>
      <SEO />
      <Nav />
      <Container className="pt-8 lg:pt-16">
        <div className="z-20 mx-auto px-4 pb-8 lg:max-w-7xl ">
          <h1 className="bg-gradient-to-br from-blue-500 to-deepFuscia bg-clip-text text-5xl font-semibold text-transparent sm:text-6xl md:text-9xl">
            Open and <br />
            Transparent
          </h1>
          <p className="my-4 mb-8 mt-8 px-4 text-lg sm:text-xl lg:mb-20 lg:text-2xl">
            Vignette is made by talented individuals working in the open source
            community. The numbers you see here are the aggregate statistics of
            all our activity done in the open combined.
          </p>
          <FadeIn>
            <div className="mx-auto flex flex-wrap gap-8 pb-16 text-center">
              <div className="mx-auto text-xl">
                <div className="mb-1 text-6xl font-bold">727</div>
                Pull Requests
                <BiGitPullRequest
                  className="mx-auto mt-2 fill-pinkRed"
                  size={40}
                />
              </div>
              <div className="mx-auto text-xl">
                <div className="mb-1 text-6xl font-bold">727</div>
                Open Issues
                <BiGitPullRequest
                  className="mx-auto mt-2 fill-pinkRed"
                  size={40}
                />
              </div>

              <div className="mx-auto text-xl">
                <div className="mb-1 text-6xl font-bold">727</div>
                Commits
                <BiGitPullRequest
                  className="mx-auto mt-2 fill-pinkRed"
                  size={40}
                />
              </div>
            </div>
            <div className="w-full text-center">
              <a
                href="https://github.com/vignetteapp"
                className="button mx-auto "
              >
                Visit Our Github
              </a>
            </div>
          </FadeIn>
          <FadeIn className="mt-32 text-center ">
            <Image src={repoIcon} alt="" />

            <h2 className="mt-4 text-3xl font-bold">Meet the Contributors</h2>
            <p className="mx-auto max-w-xl text-sm sm:text-base">
              *This is live data from our GitHub, see yourself here? Tweet about
              it, <br /> brag it to your friends, or give yourself a pat in the
              back. You deserve it.
            </p>
          </FadeIn>
        </div>
      </Container>

      <Footer />
    </>
  )
}

type contributor = {
  login: string
  displayName?: string
  contribs: number
  social: {
    twitter?: string
    blog?: string
  }
}

export const getServerSideProps: GetStaticProps = async () => {
  const res = await fetch(`https://vignetteapp.org/api/contribs`)
  const data = await res.json().catch(() => [])

  return {
    props: { data }, // will be passed to the page component as props
  }
}

export default OpenSource
