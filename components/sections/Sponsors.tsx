import { Container } from 'components'
import sponsors from 'data/sponsors'
import Image from 'next/image'

const Sponsors = () => (
  <Container className="mt-28 pt-16 " id="sponsors">
    <h2 className="text-center text-3xl font-bold lg:text-4xl">Our Sponsors</h2>

    <div className=" mx-auto grid max-w-7xl grid-cols-2 gap-0.5  px-4 py-4 sm:px-6 md:grid-cols-4 lg:py-8 lg:px-8">
      {sponsors.map((sp, i) => (
        <a href={sp.href} key={i}>
          <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
            <div className="flex h-8 items-center justify-center lg:h-12">
              <img className="max-h-12" src={sp.img} alt={sp.name} />
            </div>
          </div>
        </a>
      ))}
      <a href="/contact">
        <div className="col-span-1 flex h-full bg-gray-50 px-8">
          <div className=" flex h-full items-center  font-semibold">
            <span className="">
              {` `}
              Become a sponsor
              <span className="hidden lg:inline">{` `}today</span>
              {` `}
              <span className="whitespace-nowrap">-&gt;</span>
            </span>
          </div>
        </div>
      </a>
    </div>
  </Container>
)
export default Sponsors
