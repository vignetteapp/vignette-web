import Image from 'next/image'
import Link from 'next/link'

const Card2: React.FC<{
  img: string
  icon?: boolean
  alt?: string
  href?: string
  className?: string
}> = ({ img, alt, icon, className, href }) => (
  <div
    className={`mx-auto w-full max-w-xs rounded-xl bg-white border-gray-100 border shadow-lg px-5 py-4 text-gray-800 ${className}`}
  >
      <div className="block relative">
        <a href={href} target="_blank" rel="noopener noreferrer">
          <Image
            alt={alt}
            src={img}
            height="50"
            width="256"
            layout="responsive"
            className="object-contain"
          />
      </a>
      </div>
  </div>
)

export default Card2
