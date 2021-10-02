import { Layout, PrimaryText } from '@/components'
import Image from 'next/image'
const About: React.FC = () => (
  <Layout
    id="about"
    className="flex flex-col hero md:pr-48 md:pl-12 py-12 p-6"
    data-sidebar
  >
    <PrimaryText className="md:text-6xl text-4xl font-semibold font-spartan tracking-tight p-3">
      About
    </PrimaryText>

    <div className=" flex flex-row flex-wrap tracking-wide">
      <div className="font-normal flex flex-col justify-between  md:max-w-2xl p-4">
        <div className="font-inter">
          <p className="text-2xl spaced-line ">
            <p className="gradient-secondary font-semibold text-transparent bg-clip-text inline-block">
              Vignette
            </p>
            {` `}
            had one vision; we want to make those who want to start a VTuber
            career a more{` `}
            <p className="font-semibold inline-block">accessible</p>
            {` `}
            path.
          </p>

          <p className="font-bold gradient-tertiary bg-clip-text text-transparent text-3xl mt-8 mb-4 font-inter">
            Made for you, by you.
          </p>

          <p className="text-2xl font-regular md:mr-20  font-inter leading-loose spaced-line">
            And that was our <p className="font-semibold inline">mission</p>: to
            build a product to make these independent content creators become
            their own VTubers{` `}
            <p className="font-semibold inline-block">without</p> using any{` `}
            <p className="font-semibold inline-block">specialized hardware</p>
            {` `}
            and
            {` `}
            <p className="font-semibold inline-block">relatively low price.</p>
            <p className="pt-4">
              We <p className="font-semibold inline">won&apos;t</p>
              {` `}
              gather data from you or sell DLCs, or give a half-complete product
              to you. Vignette and it&apos;s entire features will be forever
              {` `}
              <p className="font-semibold inline">free</p>, no gotchas.*
            </p>
          </p>
        </div>

        <p className="text-subtle text-md">* Applies to individuals only</p>
      </div>
      <div className="ml-auto pt-10 md:pt-0 mx-auto md:mr-0">
        <Image
          src="/images/demo.png"
          alt="Vignette UI image"
          height="794"
          width="452"
        />
      </div>
    </div>
  </Layout>
)

export default About
