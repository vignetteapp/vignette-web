import React, { ReactNode } from 'react'

const Button: React.FC<{
  children: ReactNode
  href?: string
  onClick?: any
  className?: string
  size?: 'default' | 'large' | 'small'
  type?: 'primary' | 'secondary' | 'default'
}> = ({
  children,
  href,
  className,
  size = `default`,
  onClick,
  type = `default`,
}) => {
  const SelectedComponent = onClick
    ? ({ ...props }) => <button {...props} />
    : ({ ...props }) => <a {...props} />

  return (
    <SelectedComponent
      href={href}
      onClick={onClick}
      className={`${className} relative inline-block rounded-full border font-semibold transition duration-100 hover:border-white hover:shadow dark:hover:border-primary ${
        size == `large`
          ? `py-2 px-10 text-base sm:py-3 lg:px-12`
          : size == `small`
          ? `py-2 px-8 text-sm`
          : `py-2 px-10 `
      } ${
        type == `primary` &&
        `gradient-primary border-pinkRed bg-gradient-to-r text-white `
      } ${
        type == `secondary` &&
        `border-neutral-700 bg-white bg-gradient-to-r text-neutral-700 hover:gradient-secondary hover:text-white dark:border-neutral-200 dark:bg-inherit dark:text-neutral-200`
      } ${
        type == `default` &&
        `border-pinkRed/90  bg-gradient-to-r text-pinkRed before:bg-white hover:gradient-primary hover:text-white dark:border-pinkRed dark:bg-[#181a1b] dark:bg-inherit dark:text-neutral-200 dark:before:bg-[#181a1b]`
      } z-0 before:absolute before:inset-0 before:rounded-full before:bg-inherit before:transition before:duration-100 hover:before:opacity-0`}
    >
      <div className="relative z-100">{children}</div>
    </SelectedComponent>
  )
}
export default Button
