import { Layout, PrimaryText } from '@/components'

const About: React.FC = () => (
  <Layout id="about" className="flex flex-col hero p-12" data-sidebar>
    <PrimaryText className="text-5xl font-semibold font-spartan tracking-tighter">
      About
    </PrimaryText>
  </Layout>
)

export default About
