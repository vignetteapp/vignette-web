import { ReactNode } from 'react'

const PrimaryText: React.FC<{ children: ReactNode; className?: string }> = ({
  children,
  className,
}) => (
  <h1
    className={`font-spartan text-transparent bg-clip-text gradient-primary ${className}`}
  >
    {children}
  </h1>
)

export default PrimaryText
