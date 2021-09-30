import { DetailedHTMLProps, HTMLAttributes } from 'react'

// simple container that defines the layout of the whole website.
const Layout: React.FC<
  DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>
> = ({ children, className, ...rest }) => (
  <section
    {...rest}
    className={`relative min-h-screen w-full overflow-x-hidden ${className}`}
    data-sidebar
  >
    {children}
  </section>
)

export default Layout
