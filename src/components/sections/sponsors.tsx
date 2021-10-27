import { Layout, PrimaryText } from '@/components'
import SponsorCard from '../sponsorCard'
import SponsorsList from '@/public/sponsors.json'

export interface Sponsor {
  logo: string
  name: string
  url: string
}

const Sponsors: React.FC = () => (
  <Layout
    id="sponsors"
    className="flex flex-col md:pr-48 md:pl-12 py-12 p-6"
    data-sidebar
  >
    <PrimaryText className="md:text-5xl text-4xl font-semibold font-spartan tracking-tight md:p-3 py-3">
      Sponsors
    </PrimaryText>

    <div className="px-4 py-8 grid gap-4 md:gap-x-8 gap-y-8 lg:gap-y-20 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 3xl:grid-cols-6">
      {SponsorsList.map((m, i) => (
        <SponsorCard
          alt={m.name}
          img={m.logo}
          href={m.url}
          className="h-full hover:-translate-y-2"
          key={i}
        />
      ))}
    </div>

    <p className="px-4 text-2xl spaced-line dark:text-primary-dark">
      Want to be a sponsor?
      <br />
      {` `}
      <span className="font-semibold ">
        Consider visiting our{` `}
        <a href="https://opencollective.com/vignette">
          <span className="gradient-primary font-semibold text-transparent bg-clip-text">
            Open Collective
          </span>
        </a>
        {` `}or{` `}
        <a href="https://github.com/sponsors/vignetteapp">
          <span className="gradient-primary font-semibold text-transparent bg-clip-text">
            {` `}
            GitHub{` `}
          </span>
        </a>
        {` `}
        page
      </span>
      .
      {`
    `}
    </p>
  </Layout>
)

export default Sponsors
