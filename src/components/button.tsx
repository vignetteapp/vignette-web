import { ReactNode } from 'react'

// button
const Button: React.FC<{
  children?: ReactNode
  className?: string
  disableGradient?: boolean
}> = ({ children, className, disableGradient }) => (
  <button
    type="button"
    className={`outline-none rounded-md m-2 text-white text-2xl font-medium px-16 py-3 transition duration-300 ease-in-out hover:shadow-lg shadow-md ${
      !disableGradient && `gradient-secondary animate-gradient`
    } ${className}`}
  >
    {children}
  </button>
)

export default Button
