import ImageWithFallback from './imageWithFallback'

const SponsorCard: React.FC<{
  img: string
  imgFallback?: string
  icon?: boolean
  alt?: string
  href?: string
  className?: string
}> = ({ img, alt, className, href, imgFallback }) => (
  <div
    className={`mx-auto w-full max-w-xs rounded-xl bg-white border-gray-100 border px-5 py-4 text-gray-800 shadow-lg hover:shadow-xl transition duration-300 ease-in-out ${className}`}
  >
    <div className="block relative">
      <a href={href} target="_blank" rel="noopener noreferrer">
        <ImageWithFallback
          alt={alt}
          src={img}
          fallbackSrc={imgFallback}
          height="150"
          width="315"
          layout="responsive"
          className="object-contain"
        />
      </a>
    </div>
  </div>
)

export default SponsorCard
