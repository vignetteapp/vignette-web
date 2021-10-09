import Image from 'next/image'

const Card2: React.FC<{
  img: string
  icon?: boolean
  alt?: string
  title?: string
  description?: string
  href?: string
  className?: string
}> = ({ img, alt, title, description, icon, className, href }) => (
  <div
    className={`mx-auto w-full max-w-xs rounded-xl bg-white border-gray-100 border shadow-lg px-5 py-4 text-gray-800 ${className}`}
  >
    <div className="w-full pt-1 text-center -mt-16 mx-auto">
      <div className="block relative">
        <Image
          alt={alt}
          src={img}
          className={
            `mx-auto object-cover ` + (icon ? `squared-md` : `squared-full`)
          }
          height="160"
          width="160"
        />
      </div>
    </div>
  </div>
)

export default Card2
