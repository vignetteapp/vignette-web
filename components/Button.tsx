const Button = ({ children, href, className }) => (
  <div className={`button-wrapper inline-flex rounded-full p-0.5 ` + className}>
    <a
      href={href}
      className=" inline-block rounded-full bg-white px-10 py-2 text-sm font-bold text-pinkRed transition duration-100  xxs:text-base xs:py-3 lg:px-12"
    >
      {children}
    </a>
  </div>
)
export default Button
