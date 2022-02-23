import { Container } from 'components'
import partners from 'data/partners'
import Image from 'next/image'
import Link from 'next/link'

const Partners = () => (
  <Container className="mt-28 pt-16" id="partners">
    <h2 className="text-center text-2xl font-bold lg:text-3xl">Our Partners</h2>

    <div className=" mx-auto grid max-w-7xl grid-cols-2 gap-0.5  px-2 py-4 sm:px-6 md:grid-cols-4 lg:py-8 lg:px-8">
      {partners.map((partner, i) => (
        <a href={partner.href} key={i}>
          <div
            className={`group col-partners.n-1 flex justify-center bg-gray-50 py-8 px-2 dark:bg-zinc-900 dark:hover:bg-zinc-800 dark:hover:grayscale-0 sm:px-8`}
          >
            <div
              className={`flex h-8 items-center justify-center lg:h-12 ${
                partner.darkImg && `dark:hidden`
              }`}
            >
              <Image
                className="max-h-8"
                quality={90}
                src={partner.img}
                alt={partner.name}
                width={partner.imgWidth}
                height={partner.imgHeight}
              />
            </div>
            {partner.darkImg && (
              <div className={`${partner.noContrast && `brightness-90`}`}>
                <div
                  className={`hidden h-8 items-center justify-center dark:block lg:h-12 ${
                    partner.noContrast && ` brightness-0 invert`
                  }`}
                >
                  <Image
                    className="max-h-12"
                    quality={90}
                    src={partner.darkImg}
                    alt={partner.name}
                    width={partner.imgWidth}
                    height={partner.imgHeight}
                  />
                  {` `}
                </div>
              </div>
            )}
          </div>
        </a>
      ))}
    </div>
    <Container className="max-w-7xl">
      {/*Temporarilly use email until contacts page is finished*/}
      <Link href="mailto:hello@vignetteapp.org" passHref>
        <a className="text-sm font-semibold lg:px-8 xs:text-base">
          Become a partner today
          <span className="whitepartners.ce-nowrap">-&gt;</span>
        </a>
      </Link>
    </Container>
  </Container>
)
export default Partners
