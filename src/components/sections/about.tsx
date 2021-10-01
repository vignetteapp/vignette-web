import { Layout, PrimaryText } from '@/components'
import Image from 'next/image'
const About: React.FC = () => (
  <Layout id="about" className="flex flex-col hero md:p-12 p-4" data-sidebar>
    <PrimaryText className="md:text-6xl text-4xl font-semibold font-spartan tracking-wider p-3">
      About
    </PrimaryText>
    <div className="flex flex-row  flex-wrap p-4 tracking-wide">
      <div
        className="mr-16"
        style={{
          lineHeight: `3`,
          maxWidth: `38rem`,
          fontWeight: 400,
        }}
      >
        <p className="md:text-3xl text-2xl mr-20  max-w-xl  font-inter  ">
          <p className="gradient-secondary font-semibold  text-transparent bg-clip-text inline-block  ">
            Vignette
          </p>
          {` `}
          had one vision; we want to make those who want to start a VTuber
          career a more <p className="font-semibold inline-block">accessible</p>
          {` `}
          path.
        </p>
        <PrimaryText className="font-bold gradient-tertiary md:text-3xl text-xl mt-8 mb-3 font-inter">
          Made for you, by you.
        </PrimaryText>
        <p className="md:text-3xl font-regular text-2xl mr-20  font-inter">
          And that was our <p className="font-semibold inline">mission</p>: to
          build a product to make these independent content creators become
          their own VTubers{` `}
          <p className="font-semibold inline-block">without</p> using any
          <p className="font-semibold inline-block">specialized hardware</p> and
          <p className="font-semibold inline-block"> relatively low price.</p>
          <p className="pt-4">
            We <p className="font-semibold inline">won&apos;t</p>
            {` `}
            gather data from you or sell DLCs, or give a half-complete product
            to you. Vignette and it&apos;s entire features will be forever{` `}
            <p className="font-semibold inline">free</p>, no gotchas.*
          </p>
        </p>
        <p className="text-subtle text-2xl pt-8">
          * Applies to individuals only
        </p>
      </div>

      <Image
        src="/images/demo.png"
        alt="Vignette UI image"
        height="730.5"
        width="415.8"
      />
    </div>
  </Layout>
)

export default About
