import { ReactNode } from 'react'
import { useInView } from 'react-intersection-observer'

const Fadein: React.FC<{
  children: ReactNode
  className?: string
  [x: string]: any
}> = ({ children, className, ...props }) => {
  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: true })
  return (
    <div
      className={`fadein ${inView ? `inview` : ``} ${className}`}
      {...props}
      ref={ref}
    >
      {children}
    </div>
  )
}
export default Fadein
