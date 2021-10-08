import { ReactNode } from 'react'

// button
const Button: React.FC<{ children: ReactNode }> = ({ children }) => (
  <button
    type="button"
    className="outline-none rounded-md gradient-secondary animate-gradient m-2 text-white text-2xl font-medium px-16 py-3 shadow-md "
  >
    {children}
  </button>
)

export default Button
