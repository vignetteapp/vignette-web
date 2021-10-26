import { useState } from 'react'
import Image, { ImageProps } from 'next/image'

interface IProps extends ImageProps {
  fallbackSrc?: string
  alt: string
}

const ImageWithFallback: React.FC<IProps> = (props) => {
  const { src, fallbackSrc, className, alt, ...rest } = props
  const [imgSrc, setImgSrc] = useState(src)
  const [loading, setLoading] = useState(true)

  return (
    <Image
      {...rest}
      className={`${className} transition-opacity duration-200 ease-in-out ${
        loading ? `opacity-0` : `opacity-1`
      }`}
      src={imgSrc}
      alt={alt}
      decoding="async"
      onError={() => {
        if (fallbackSrc) setImgSrc(fallbackSrc)
      }}
      onLoad={() => setLoading(false)}
    />
  )
}

export default ImageWithFallback
