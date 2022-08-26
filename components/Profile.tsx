import Image, { StaticImageData } from 'next/future/image'

const Profile: React.FC<{
  size: number | string
  src: StaticImageData | string
  className?: string
}> = ({ size, src, className }) => (
  <Image
    className={`inline-flex overflow-hidden rounded-full ${className}`}
    src={src}
    width={size}
    height={size}
    alt=""
  />
)

export default Profile
