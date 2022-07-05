import { ReactNode } from 'react'
import Parallax from './Parallax'
import { motion } from 'framer-motion'

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
    <motion.div
      id={id}
      className={`${!noMargin && `mx-auto px-4 sm:px-8`} ${className}`}
      transition={
        fadeIn
          ? {
              delay: 0.2,
              opacity: { duration: 0.4 },
              duration: 0.7,
              ease: [0.22, 0.61, 0.35, 1],
            }
          : {}
      }
      initial={fadeIn && { opacity: 0, y: 32 }}
      whileInView={fadeIn ? { opacity: 1, y: 0 } : {}}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  )
}
export default Container
