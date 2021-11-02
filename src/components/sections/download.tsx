import { Layout, PrimaryText, Button } from '@/components'
import { SiGithub } from 'react-icons/si'

const Download: React.FC = () => (
  <Layout
    id="download"
    className="flex flex-col md:pr-48 md:pl-12 py-12 p-6 mb-10"
    data-sidebar
  >
    <PrimaryText className="md:text-5xl text-4xl font-semibold font-spartan tracking-tight md:p-3 py-3">
      Download
    </PrimaryText>

    <div className="text-center m-auto pt-8 transition-transfrom duration-300 ease-in-out hover:-translate-y-3 ">
      <a
        href="https://github.com/vignetteapp/vignette/releases"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button className="bg-secondary py-4 " disableGradient>
          Get it from{` `}
          <SiGithub className="inline-block ml-1" color="#fefefe" size="35" />
        </Button>
      </a>
    </div>

    <p className="text-center mx-auto text-subtle dark:text-subtle-dark mt-4">
      Other platforms soon&trade;
    </p>
  </Layout>
)

export default Download
