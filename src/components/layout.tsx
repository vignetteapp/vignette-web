import { DetailedHTMLProps, HTMLAttributes } from 'react'

// simple container that defines the layout of the whole website.
// eslint-disable-next-line react/display-name
const Layout: React.FC<
  DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>
> = ({ children, className, ...rest }) => (
  <section
    {...rest}
    className={`relative w-full overflow-x-hidden font-inter  ${className}`}
  >
    {children}
  </section>
)

export default Layout
