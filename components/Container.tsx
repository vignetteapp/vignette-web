import { ReactNode } from 'react'
import Parallax from './Parallax'

const Container: React.FC<{
  noMargin?: boolean
  className?: string
  parallax?: boolean
  id?: string
  fadeIn?: boolean
  children?: ReactNode
  offset?: number
}> = ({
  className,
  noMargin,
  children,
  id,
  fadeIn = false,
  parallax,
  offset,
}) => {
  return parallax ? (
    <Parallax
      offset={offset}
      fadeIn={fadeIn}
      id={id}
      className={`${!noMargin && `mx-auto px-4 sm:px-8`} ${className}`}
    >
      {children}
    </Parallax>
  ) : (
    <div
      className={`${!noMargin && `mx-auto px-4 sm:px-8`} ${className}`}
      id={id}
    >
      {children}
    </div>
  )
}
export default Container
