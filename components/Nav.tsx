import logo from 'public/images/logo.svg'
import Image from 'next/image'
import Link from 'next/link'
import { AiFillGithub, AiOutlineTwitter } from 'react-icons/ai'

const Nav = () => {
  return (
    <div className="mx-auto flex max-w-7xl items-center justify-between py-6 px-4 sm:px-8 lg:px-4 ">
      <div className="flex items-center">
        <Link href="/" passHref>
          <a className="flex items-center">
            <div className="">
              <Image
                className=" "
                src={logo}
                width={32}
                height={32}
                layout="fixed"
                alt="Vignette Logo"
                priority
              />
            </div>

            <span className="font-spartan ml-2 flex text-2xl font-bold">
              Vignette
            </span>
          </a>
        </Link>

        <div className="mx-8 hidden gap-8  md:flex ">
          <Link href="/features">Features</Link>

          <Link href="/ecosystem">Ecosystem</Link>

          <Link href="/oss">Open Source</Link>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <AiFillGithub size={24} />
        <AiOutlineTwitter size={24} />
        <button className="rounded-full bg-pinkRed px-8 py-1 font-semibold text-white ">
          Download
        </button>
      </div>
    </div>
  )
}
export default Nav
