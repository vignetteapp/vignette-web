import logo from 'public/images/logo.png'
import Image from 'next/image'
import logoDark from 'public/images/logo-dark.png'

import logosquare from 'public/images/logo-square.png'
import logosquareDark from 'public/images/logo-square-dark.png'

const Logo = () => (
  <>
    <div className="flex dark:hidden">
      <Image src={logo} width={141} height={33} layout="fixed" alt="" />
    </div>
    <div className="hidden dark:flex">
      <Image src={logoDark} width={141} height={32} layout="fixed" alt="" />
    </div>
  </>
)
const LogoSquare: React.FC<{ size: number }> = ({ size }) => (
  <>
    <div className="flex dark:hidden">
      <Image
        src={logosquare}
        width={size}
        height={size}
        layout="fixed"
        alt=""
      />
    </div>
    <div className="hidden dark:flex">
      <Image
        src={logosquareDark}
        width={size}
        height={size}
        layout="fixed"
        alt=""
      />
    </div>
  </>
)
export { Logo, LogoSquare }
