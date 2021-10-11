import { Layout, PrimaryText } from '@/components'
import Sponsoring from '@/public/sponsors.json'
import SponsorCard from '../sponsorCard'

const Sponsors: React.FC = () => (
  <Layout
    id="sponsors"
    className="flex flex-col md:pr-48 md:pl-12 py-12 p-6"
    data-sidebar
  >
    <PrimaryText className="md:text-5xl text-4xl font-semibold font-spartan tracking-tight md:p-3 py-3">
      Sponsors
    </PrimaryText>

    <div className="px-4 py-10 grid gap-x-8 gap-y-20 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 3xl:grid-cols-6">
      {Sponsoring.map((m, i) => (
        <div key={i}>
          <SponsorCard
            alt={m.name}
            img={m.logo}
            imgFallback={m.fallbackLogo}
            href={m.url}
            className="h-full hover:-translate-y-2"
          />
        </div>
      ))}
    </div>

    <p className="px-4 text-2xl spaced-line">
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
        {` `}
        or{` `}
        <a href="https://github.com/vignetteapp/">
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
