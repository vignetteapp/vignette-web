import { Layout, PrimaryText } from '@/components'
import Image from 'next/image'

const Features: React.FC = () => (
  <Layout
    id="Features"
    className="flex flex-col hero md:pr-48 md:pl-12 py-12 p-6 "
    data-sidebar
  >
    <div className="flex  flex-row font-inter flex-wrap-reverse ">
      <div
        className="relative mt-6  mx-auto md:mr-0 md:ml-20 xl:px-4"
        style={{ maxWidth: 570 }}
      >
        <div className="z-30 absolute top-0 right-0 -translate-y-20 pt-2 translate-x-8 md:block hidden">
          <Image src="/images/hat.png" width="140" height="140" alt="hat" />
        </div>

        <video
          className="rounded-lg shadow-md mx-auto"
          src="/videos/demo.mp4"
          height="636"
          width="720"
          autoPlay
          muted
          loop
        />
      </div>
      <div className=" max-w-2xl md:ml-20 pt-10">
        <PrimaryText className="text-3xl gradient-tertiary tracking-tight font-bold font-spartan  py-3 w-full ">
          Mean and Very lean
        </PrimaryText>
        <p className=" text-2xl spaced-line ">
          Computer Hardware and Bandwidth is still a premium, we know that too
          well. That&apos;s why{` `}Vignette
          <span className="font-semibold "> wastes no time</span>, by making the
          application as small and performant as possible.
        </p>
        <PrimaryText className="text-3xl gradient-tertiary tracking-tight font-bold font-spartan   py-3 w-full  pt-12">
          Pixel-Perfect Expressions
        </PrimaryText>
        <p className=" text-2xl spaced-line ">
          Every part of your face will be captured in{` `}
          <span className="font-semibold ">pixel-perfect accuracy</span>,{` `}
          thanks to our ever-adaptible Artificial Intelligence powered by
          Mediapipe and Tensorflow, delivering tracking quality like no other.
        </p>
      </div>
    </div>
  </Layout>
)

export default Features
