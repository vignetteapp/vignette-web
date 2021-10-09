import { Layout, PrimaryText, Card } from '@/components'
import Members from '@/public/members.json'

const OurTeam: React.FC = () => (
  <Layout
    id="team"
    className="flex flex-col md:pr-48 md:pl-12 py-12 p-6"
    data-sidebar
  >
    <PrimaryText className="md:text-5xl text-4xl font-semibold font-spartan tracking-tight md:p-3 py-3">
      Our team
    </PrimaryText>

    <div className="pt-20 p-10 grid gap-x-8 gap-y-20 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5">
      {Members.map((m) => (
        <div key={m.id}>
          <Card
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
  </Layout>
)

export default OurTeam
