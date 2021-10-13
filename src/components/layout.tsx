import { DetailedHTMLProps, forwardRef, HTMLAttributes } from 'react'

type IProps = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>

// simple container that defines the layout of the whole website.
// eslint-disable-next-line react/display-name
const Layout = forwardRef(
  ({ children, className, ...rest }: IProps, ref: any) => (
    <section
      {...rest}
      className={`relative w-full overflow-x-hidden ${className}`}
      ref={ref}
    >
      {children}
    </section>
  ),
)

export default Layout
