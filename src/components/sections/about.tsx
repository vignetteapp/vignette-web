import { Layout, PrimaryText } from '@/components'
import { NextPage } from 'next'

const About: NextPage = () => (
  <Layout id="about" className="flex flex-col hero p-12">
    <PrimaryText className="text-5xl font-semibold font-spartan tracking-tighter">
      About
    </PrimaryText>
  </Layout>
)

export default About
