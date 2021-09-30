import { motion } from 'framer-motion'

interface IProps {
  text: string
  active: boolean
  link: string
  [key: string]: any
}

const Link: React.FC<IProps> = ({ text, active, link, ...rest }) => (
  <motion.a
    {...rest}
    animate={{
      fontSize: active ? `1.5rem` : `1.125rem`,
    }}
    transition={{ ease: `easeInOut`, duration: 0.3 }}
    href={link}
    className={`capitalize flex items-center mt-2 tracking-tight transition duration-500 ease-in-out ${
      active ? `font-semibold text-primary` : `font-medium text-subtle`
    }`}
  >
    {text}

    <motion.div
      animate={{
        height: active ? `2.5rem` : `1rem`,
      }}
      transition={{ ease: `easeInOut`, duration: 0.3 }}
      className={`ml-4 border-2 rounded-full transition duration-500 ease-in-out ${
        active ? `border-primary h-10` : `border-subtle h-4`
      }`}
    />
  </motion.a>
)

export default Link
