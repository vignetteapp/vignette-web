import { Layout, PrimaryText, Card } from '@/components'
export interface Member {
  name: string
  avatar: string
  id: number
  role: string
  url: string
  blurHash?: any
}

const OurTeam: React.FC<{ list: Member[] }> = ({ list }) => (
  <Layout
    id="team"
    className="flex flex-col md:pr-48 md:pl-12 py-12 p-6"
    data-sidebar
  >
    <PrimaryText className="md:text-5xl text-4xl font-semibold font-spartan tracking-tight md:p-3 py-3">
      Our team
    </PrimaryText>

    <div className="pt-20 p-10 grid gap-x-8 gap-y-20 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 3xl:grid-cols-6">
      {list.map((m) => (
        <div key={m.id}>
          <Card
            alt=""
            img={m.avatar}
            title={m.name}
            href={m.url}
            description={m.role}
            className="h-full hover:-translate-y-2"
            blurHash={m.blurHash}
          />
        </div>
      ))}
    </div>
  </Layout>
)

export default OurTeam
