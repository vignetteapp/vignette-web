import { useState } from 'react'
import Image, { ImageProps } from 'next/image'

interface IProps extends ImageProps {
  fallbackSrc?: string
  alt: string | undefined
}

const ImageWithFallback: React.FC<IProps> = (props) => {
  const { src, className, alt, ...rest } = props
  const [loading, setLoading] = useState(true)

  return (
    <Image
      {...rest}
      className={`${className} transition-opacity duration-200 ease-in-out
       ${loading ? `opacity-0` : `opacity-1`}`}
      src={src}
      alt={alt}
      decoding="async"
      onLoadingComplete={() => setLoading(false)}
    />
  )
}

export default ImageWithFallback
