import { useState } from 'react'
import Image, { ImageProps } from 'next/image'

interface IProps extends ImageProps {
  fallbackSrc?: string
}

const ImageWithFallback: React.FC<IProps> = (props) => {
  const { src, fallbackSrc, className, ...rest } = props
  const [imgSrc, setImgSrc] = useState(src)
  const [loading, setLoading] = useState(true)

  return (
    <Image
      {...rest}
      className={`${className} transition-opacity ease-in-out ${
        loading ? `opacity-0` : `opacity-1`
      }`}
      src={imgSrc}
      alt=""
      decoding="async"
      onError={() => {
        if (fallbackSrc) setImgSrc(fallbackSrc)
      }}
      onLoad={() => setLoading(false)}
    />
  )
}

export default ImageWithFallback
