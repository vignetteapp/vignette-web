import React, { ReactNode } from 'react'

const Button: React.FC<{
  children: ReactNode
  href: string
  className?: string
  size?: 'default' | 'small'
}> = ({ children, href, className, size = `default` }) => (
  <a
    href={href}
    className={`${className} inline-block rounded-full bg-white   font-bold
     text-pinkRed/90 ring-1 ring-pinkRed-300 transition
     duration-100 hover:bg-pinkRed hover:text-white hover:ring-white dark:bg-inherit
      dark:text-white dark:hover:bg-pinkRed dark:hover:ring-primary
      ${
        size == `default`
          ? `py-2 px-10 text-sm xxs:text-base xs:py-3 lg:px-12`
          : `py-1 px-10 `
      }`}
  >
    {children}
  </a>
)
export default Button
