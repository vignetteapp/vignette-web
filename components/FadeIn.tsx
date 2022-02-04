import { motion } from 'framer-motion'
import react, { ReactNode } from 'react'

const FadeIn: react.FC<{ children: ReactNode; className?: string }> = ({
  children,
  className,
}) => (
  <motion.div
    className={className}
    transition={{ delay: 0.15, duration: 0.3 }}
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
  >
    {children}
  </motion.div>
)

export default FadeIn
