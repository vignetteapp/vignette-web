import { useState, useRef, useLayoutEffect, useEffect, ReactNode } from 'react'
import {
  motion,
  useViewportScroll,
  useTransform,
  useSpring,
  useReducedMotion,
} from 'framer-motion'
import useIsomorphicLayoutEffect from 'hooks/useIsomorphicLayoutEffect'
type ParallaxProps = {
  children?: ReactNode
  offset?: number
  className?: string
  id?: string
  hero?: boolean
  fadeIn?: boolean
}

const Parallax = ({
  children,
  id,
  hero = false,
  offset = 30,
  className,
  fadeIn,
}: ParallaxProps): JSX.Element => {
  const prefersReducedMotion = useReducedMotion()
  const [elementTop, setElementTop] = useState(0)
  const [clientHeight, setClientHeight] = useState(0)
  const ref = useRef<HTMLDivElement>(null)

  const { scrollY } = useViewportScroll()

  const initial = elementTop - clientHeight
  const final = elementTop + offset

  const yRange = useTransform(scrollY, [initial, final], [offset, -offset], {
    clamp: false,
  })
  const y = useSpring(yRange, { stiffness: 400, damping: 90 })

  useIsomorphicLayoutEffect(() => {
    const element = ref.current
    const onResize = () => {
      if (element) {
        setElementTop(
          element.getBoundingClientRect().top + window.scrollY ||
            window.pageYOffset,
        )
      }

      setClientHeight(window.innerHeight)
    }
    onResize()
    window.addEventListener(`resize`, onResize)
    return () => window.removeEventListener(`resize`, onResize)
  }, [ref])

  // Don't parallax if the user has "reduced motion" enabled
  if (prefersReducedMotion) {
    return <>{children}</>
  }

  return (
    <motion.div
      id={id}
      className={className}
      ref={ref}
      style={{ y }}
      transition={fadeIn ? { delay: 0.15, duration: 0.3 } : {}}
      initial={fadeIn && { opacity: 0 }}
      whileInView={fadeIn ? { opacity: 1 } : {}}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  )
}

const ParallaxContainer: React.FC<{
  noMargin?: boolean
  className?: string
  id?: string
  children: ReactNode
  fadeIn: boolean
}> = ({ className, noMargin, children, id, fadeIn }) => (
  <Parallax
    fadeIn={fadeIn}
    id={id}
    className={`${!noMargin && `mx-auto px-4 sm:px-8`} ${className}`}
  >
    {children}
  </Parallax>
)

export default Parallax
export { ParallaxContainer }
