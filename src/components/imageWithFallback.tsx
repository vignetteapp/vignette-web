import { useState } from 'react'
import Image, { ImageProps } from 'next/image'
import { BlurhashCanvas } from 'react-blurhash'

interface IProps extends ImageProps {
  fallbackSrc?: string
  blurHash?: any
  wrapperClassName?: string
}

const ImageWithFallback: React.FC<IProps> = (props) => {
  const {
    src,
    fallbackSrc,
    blurHash,
    className,
    wrapperClassName = ``,
    ...rest
  } = props
  const [imgSrc, setImgSrc] = useState(src)
  const [loading, setLoading] = useState(true)

  return (
    <div className={`relative overflow-hidden block ${wrapperClassName}`}>
      {loading && blurHash && (
        <BlurhashCanvas
          {...blurHash}
          style={{
            width: rest.width + (!Number.isNaN(rest.width) ? `px` : ``),
            height: rest.height + (!Number.isNaN(rest.height) ? `px` : ``),
          }}
          className={`absolute top-0 left-0 right-0 bottom-0 scale-90 rounded-full blur-md ${className}`}
        />
      )}

      <Image
        {...rest}
        className={`${className} transition-opacity duration-300 ease-in-out ${
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
    </div>
  )
}

export default ImageWithFallback
