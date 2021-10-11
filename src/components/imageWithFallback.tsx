import { useState } from 'react'
import Image, { ImageProps } from 'next/image'

interface IProps extends ImageProps {
  fallbackSrc?: string
}

const ImageWithFallback: React.FC<IProps> = (props) => {
  const { src, fallbackSrc, ...rest } = props
  const [imgSrc, setImgSrc] = useState(src)

  return (
    // eslint-disable-next-line jsx-a11y/alt-text
    <Image
      {...rest}
      src={imgSrc}
      onError={() => {
        if (fallbackSrc) setImgSrc(fallbackSrc)
      }}
    />
  )
}

export default ImageWithFallback
