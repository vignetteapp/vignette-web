import { Layout, PrimaryText, Card } from '@/components'
import Sponsoring from '@/public/sponsoring.json'
import Card2 from '../card-2'

const Sponsors: React.FC = () => (
  <Layout
    id="team"
    className="flex flex-col md:pr-48 md:pl-12 py-12 p-6"
    data-sidebar
  >
    <PrimaryText className="md:text-5xl text-4xl font-semibold font-spartan tracking-tight md:p-3 py-3">
      Sponsors
    </PrimaryText>

    <div className="pt-20 p-10 grid gap-x-8 gap-y-20 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5">
      {Sponsoring.map((m) => (
        <div key={m.id}>
          <Card2
            alt=""
            img={m.avatar}
            title={m.name}
            href={m.url}
            description={m.role}
            className="h-full transition-transform duration-300 ease-in-out hover:-translate-y-2"
          />
        </div>
      ))}
    </div>
    <p className="text-2xl spaced-line">
          Want to be a sponsor?<br />{` `}
          <span className="font-semibold ">Consider visiting our <a href="https://opencollective.com/vignette"><span className="gradient-primary font-semibold text-transparent bg-clip-text">Open Collective</span></a> or <a href="https://github.com/vignetteapp/"><span className="gradient-primary font-semibold text-transparent bg-clip-text"> GitHub </span></a> page</span>.{` `}
    </p>
  </Layout>
)

export default Sponsors
