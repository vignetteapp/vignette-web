import partners from 'data/partners'
import { useTranslation } from 'next-i18next'
import Image from 'next/future/image'
import Link from 'next/link'

const Partners = () => {
  const { t } = useTranslation(`home`)
  return (
    <div className="mt-28 pt-16" id="partners">
      <h2 className="text-center text-2xl font-bold xxs:text-3xl">
        {t(`partners-title`)}
      </h2>

      <div className=" mx-auto grid max-w-7xl grid-cols-2 gap-0.5  px-2 py-4 sm:px-6 md:grid-cols-4 lg:py-8 lg:px-8">
        {partners.map((partner, i) => (
          <a href={partner.href} key={i}>
            <div
              className={`group flex h-28 justify-center bg-gray-50 py-8 px-2 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:hover:grayscale-0 sm:px-8`}
            >
              <Image
                className={`max-h-12 object-scale-down ${
                  partner.darkImg && `dark:hidden`
                }`}
                quality={90}
                src={partner.img}
                alt={partner.name}
                width={partner.imgWidth}
                height={partner.imgHeight}
              />
              {partner.darkImg && (
                <div
                  className={`${
                    partner.noContrast && `brightness-90`
                  } hidden dark:block  ${
                    partner.noContrast && ` brightness-0 invert`
                  }`}
                >
                  <Image
                    className="max-h-12 object-scale-down"
                    quality={90}
                    src={partner.darkImg}
                    alt={partner.name}
                    width={partner.imgWidth}
                    height={partner.imgHeight}
                  />
                </div>
              )}
            </div>
          </a>
        ))}
      </div>
      <div className="max-w-7xl">
        {/*Temporarilly use email until contacts page is finished*/}
        <Link href="mailto:hello@vignetteapp.org" passHref>
          <a className="text-sm font-semibold xs:text-base lg:px-8">
            {t(`become-partner`)}
            {` `}
            <span className="tracking-[0]" style={{ fontFamily: `Inter var` }}>
              -&gt;
            </span>
          </a>
        </Link>
      </div>
    </div>
  )
}
export default Partners
