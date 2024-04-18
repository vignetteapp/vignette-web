import Link from 'next/link'
import Image, { ImageProps } from "next/image"
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  href: string
}

const CustomLink = (props: Props) => {
  const href = props.href
  const isInternalLink = href && (href.startsWith(`/`) || href.startsWith(`#`))

  if (isInternalLink) {
    return <Link {...props}>{props.children}</Link>
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />
}

const RoundedImage = (props: ImageProps) => {
  return (
    <Image
      {...props}
      style={{
        maxWidth: "100%",
        height: "auto"
      }} />
  );
}

const MDXComponents = {
  Image: RoundedImage,
  a: CustomLink,
}

export default MDXComponents
