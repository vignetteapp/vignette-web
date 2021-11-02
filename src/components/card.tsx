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
}> = ({ img, alt, title, description, icon, className, href }) => (
  <div
    className={`mx-auto w-full h-62 max-w-[340px] rounded-xl bg-white border-gray-100 border dark:border-primary xxs:px-5 p-4 pb-3  text-secondary dark:bg-secondary shadow-lg hover:shadow-xl transition duration-300 ease-in-out ${className}`}
  >
    <div className="w-full  text-center -mt-16 mx-auto ">
      <div className="block relative">
        <ImageWithFallback
          alt={alt}
          src={img}
          className={`mx-auto object-cover 
          ${icon ? `rounded-md` : `rounded-full`}`}
          height="80"
          width="80"
        />
      </div>
    </div>
    <div className="w-full text-center pt-2 pb-1">
      {href ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary capitalize dark:text-primary-dark  font-inter text-xl font-semibold"
        >
          {title}
        </a>
      ) : (
        <p className="text-primary capitalize dark:text-primary-dark  font-inter  text-xl font-semibold">
          {title}
        </p>
      )}

      <p className="text-secondary dark:text-secondary-dark pt-3 pb-2 px-1 text-lg tracking-tight">
        {description}
      </p>
    </div>
  </div>
)

export default Card
