import { ReactNode } from 'react'

const PrimaryText: React.FC<{ children: ReactNode; className: string }> = ({
  children,
  className,
}) => (
  <h1
    className={`p-3 font-spartan text-transparent bg-clip-text bg-gradient-to-br from-deepFuscia to-pinkRed ${className}`}
  >
    {children}
  </h1>
)

export default PrimaryText
