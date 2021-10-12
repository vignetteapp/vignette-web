import { Layout, PrimaryText } from '@/components'
import ImageWithFallback from '../imageWithFallback'

const About: React.FC = () => (
  <Layout
    id="about"
    className="flex flex-col md:pr-48 md:pl-12 py-12 p-6"
    data-sidebar
  >
    <PrimaryText className="md:text-5xl text-4xl font-semibold font-spartan tracking-tight md:p-3 py-3">
      About
    </PrimaryText>

    <div className=" flex flex-col flex-grow tracking-wide lg:flex-row justify-between">
      <div className="font-normal flex flex-col justify-between lg:w-2/3 md:p-3">
        <div className="font-inter">
          <p className="text-2xl spaced-line ">
            <span className="gradient-secondary font-semibold text-transparent bg-clip-text">
              Vignette
            </span>
            {` `}
            had one vision; we want to make those who want to start a VTuber
            career a more{` `}
            <span className="font-semibold ">accessible</span>
            {` `}
            path.
          </p>

          <p className="font-bold gradient-tertiary bg-clip-text text-transparent text-3xl mt-8 mb-3 font-inter">
            Made for you, by you.
          </p>

          <div className="text-2xl font-regular md:mr-20  font-inter leading-loose spaced-line">
            And that is our{` `}
            <span className="font-semibold">mission</span>: to build a product
            to make these independent content creators become their own VTubers
            {` `}
            <span className="font-semibold ">without</span> using any{` `}
            <span className="font-semibold">specialized hardware</span>
            {` `}
            and
            {` `}
            <span className="font-semibold">relatively low price.</span>
            <p className="pt-8">
              We <span className="font-semibold">won&apos;t</span>
              {` `}
              gather data from you or sell DLCs, or give a half-complete product
              to you. Vignette and it&apos;s entire features will be forever
              {` `}
              <span className="font-semibold">free</span>, no gotchas.*
            </p>
          </div>
        </div>

        <p className="text-subtle text-lg mt-12 mb-16 lg:mb-0">
          * Applies to individuals only
        </p>
      </div>

      <div className="flex justify-center">
        <ImageWithFallback
          src="/images/demo.webp"
          alt="Vignette UI image"
          height="786"
          width="442"
          className="object-contain"
          fallbackSrc="/images/demo.png"
        />
        {/* <Image
          src="/images/demo.png"
          alt="Vignette UI image"
          height="786"
          width="442"
          className="object-contain"
        /> */}
      </div>
    </div>
  </Layout>
)

export default About
