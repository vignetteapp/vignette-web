import { ReactNode } from 'react'

const Container: React.FC<{
  noMargin?: boolean
  className?: string
  children: ReactNode
}> = ({ className, noMargin, children }) => (
  <div className={`${!noMargin && `mx-auto px-4 sm:px-8`} ${className}`}>
    {children}
  </div>
)

export default Container
