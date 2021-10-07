import { Layout, PrimaryText, Card } from '@/components'

const OurVision: React.FC = () => (
  <Layout
    id="vision"
    className="flex flex-col hero md:pr-48 md:pl-12 py-12 p-6"
    data-sidebar
  >
    <PrimaryText className="md:text-5xl text-4xl font-semibold font-spartan tracking-tight md:p-3 py-3">
      Our vision
    </PrimaryText>
    <div className="pt-20 grid lg:grid-flow-col md:grid-cols-3 grid-cols-1 px-10 gap-24 lg:gap-0 ">
      <Card
        alt="test"
        img="/images/icons/check.png"
        icon={true}
        title="We're promoting accessibility"
        description="We want to make a solution that not only works on your machine but would allow you to create, whatever hardware combination you have."
      />
      <Card
        alt="test"
        img="/images/icons/voice.png"
        icon={true}
        title="We want the community to have a voice"
        description="Everyone in our community has a voice, and no one will feel left out."
      />
      <Card
        alt="test"
        img="/images/icons/plus.png"
        icon={true}
        title="More than just an app"
        description="Vignette's goals stretches beyond the app itself. We try to engage and find ways to try help the community even more - that's where you come in too!"
      />
    </div>
  </Layout>
)

export default OurVision
