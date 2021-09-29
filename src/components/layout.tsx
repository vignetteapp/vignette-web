import { ReactNode } from 'react'

// simple container that defines the layout of the whole website.
const Layout: React.FC<{ children: ReactNode }> = ({ children }) => (
  <div className="">{children}</div>
)

export default Layout
