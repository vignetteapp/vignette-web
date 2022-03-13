import Link from 'next/link'
import Image, { ImageProps } from 'next/image'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  href: string
}

const CustomLink = (props: Props) => {
  const href = props.href
  const isInternalLink = href && (href.startsWith(`/`) || href.startsWith(`#`))

  if (isInternalLink) {
    return (
      <Link href={href}>
        <a {...props}>{props.children}</a>
      </Link>
    )
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />
}

const RoundedImage = (props: ImageProps) => {
  return <Image {...props} />
}

const MDXComponents = {
  Image: RoundedImage,
  a: CustomLink,
}

export default MDXComponents
