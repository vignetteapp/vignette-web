import { ReactNode } from 'react'

// simple container that defines the layout of the whole website.
const Layout: React.FC<{ children: ReactNode; className?: string }> = ({
  children,
  className,
}) => (
  <section
    className={`relative min-h-screen w-full overflow-x-hidden ${className}`}
  >
    {children}
  </section>
)

export default Layout
