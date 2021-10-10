import { Layout, PrimaryText} from '@/components'
import DownloadCard from '../downloadCard'
import Downloads from '@/public/downloads.json'
import Image from 'next/dist/client/image'
import DownloadButton from '../downloadButton'

const Sponsors: React.FC = () => (
  <Layout
    id="download"
    className="flex flex-col md:pr-48 md:pl-12 py-12 p-6"
    data-sidebar
  >
    <PrimaryText className="md:text-5xl text-4xl font-semibold font-spartan tracking-tight md:p-3 py-3">
      Download
    </PrimaryText>
    
    <div className="text-center m-auto pt-10"> 
    <div className="pt-20 p-10 grid gap-x-8 gap-y-20 lg:grid-cols-4 text-center align-center">
      {Downloads.map((m) => (
        <div key={m.id}>
          <DownloadCard
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

    <p className="px-4 text-2xl spaced-line">
      {` `}
      <span className="font-semibold size-2xl text-subtle">
        Or <br /> <br />
      </span>
      {`
    `}
    </p>
    <div>
    <Image
          src="/images/github-logo.png"
          className={
            `mx-auto object-cover `
          }
          height="120"
          width="117.04"
        />
    </div>
    <a href="https://github.com/vignetteapp/vignette">
    <DownloadButton>Get the Source</DownloadButton>
    </a>
    </div>
  </Layout>
)

export default Sponsors
