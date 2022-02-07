import Image from 'next/image'

const Profile: React.FC<{
  size: number | string
  src: StaticImageData | string
  className?: string
}> = ({ size, src, className }) => (
  <div className={`inline-flex overflow-hidden rounded-full ${className}`}>
    <Image src={src} width={size} height={size} alt="" />
  </div>
)

export default Profile
