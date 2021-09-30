import { ReactNode } from 'react'

// simple container that defines the layout of the whole website.
const Layout: React.FC<{ children: ReactNode }> = ({ children }) => (
  <section className="relative">{children}</section>
)

export default Layout
