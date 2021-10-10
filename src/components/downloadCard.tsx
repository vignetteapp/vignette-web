import Image from 'next/image'

const DownloadCard: React.FC<{
  icon?: boolean
  alt?: string
  title?: string
  description?: string
  href?: string
  className?: string
}> = ({ title, description, className, href }) => (
  <div className="text-center">
    <div className={`outline-none rounded-md gradient-secondary animate-gradient m-2 text-white text-2xl font-medium
      px-10 py-5 shadow-md ${className}`}>
      <a href={href}>
        <div className="w-full text-center pt-3">
          {href ? (
          <a href={href} target="_blank" rel="noopener noreferrer"
            className="text-white  font-inter text-3xl  font-semibold">
            {title}
          </a>
          ) : (
          <p className="text-white  font-inter px-10 py-5  text-2xl  font-bold">
            {title}
          </p>
          )}

          <p className="text-white font-inter font-regular pt-2 text-lg tracking-tight">{description}</p>
        </div>
      </a>
    </div>
  </div>
)

export default DownloadCard
