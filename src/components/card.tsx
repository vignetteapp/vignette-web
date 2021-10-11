import ImageWithFallback from './imageWithFallback'

const Card: React.FC<{
  img: string
  imgFallback?: string
  icon?: boolean
  alt?: string
  title?: string
  description?: string
  href?: string
  className?: string
}> = ({ img, alt, title, description, icon, className, href, imgFallback }) => (
  <div
    className={`mx-auto w-full max-w-xs rounded-xl bg-white border-gray-100 border px-5 py-4 text-gray-800 shadow-lg hover:shadow-xl transition duration-300 ease-in-out ${className}`}
  >
    <div className="w-full pt-1 text-center -mt-16 mx-auto">
      <div className="block relative">
        <ImageWithFallback
          alt={alt}
          src={img}
          className={
            `mx-auto object-cover ` + (icon ? `rounded-md` : `rounded-full`)
          }
          height="80"
          width="80"
          fallbackSrc={imgFallback}
        />
      </div>
    </div>
    <div className="w-full text-center pt-3">
      {href ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-800  font-inter  text-xl font-semibold"
        >
          {title}
        </a>
      ) : (
        <p className="text-gray-800  font-inter  text-xl font-semibold">
          {title}
        </p>
      )}

      <p className="text-gray-600 pt-2 text-lg tracking-tight">{description}</p>
    </div>
  </div>
)

export default Card
