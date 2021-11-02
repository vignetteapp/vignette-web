import PartyPopper from '@/public/images/party.svg'
import { Dispatch, SetStateAction } from 'react'
import Image from 'next/image'

const Banner: React.FC<{
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
}> = ({ open, setOpen }) => {
  return (
    <div
      className={`from-iris-100 to-fuschia-90 bg-gradient-to-r w-full z-80 absolute top-0 transition duration-200 md:fixed ${
        open ? `md:opacity-95 opacity-100` : ` opacity-0 z-40`
      }`}
    >
      <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between flex-wrap">
          <div className="w-0 flex-1 flex items-center">
            <span className="flex p-2 rounded-lg ">
              <Image
                src={PartyPopper}
                height="24"
                width="24"
                alt="party popper"
              />
            </span>
            <p className="ml-2 font-medium text-white truncate">
              <span className="md:hidden">Welcome to our Debut!</span>
              <span className="hidden md:inline">
                Welcome to our Debut! We&apos;re so happy to have you.
              </span>
            </p>
          </div>
          <div className="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
            <a
              href="https://blog.vignetteapp.org"
              className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md transition ease-in shadow-sm text-sm font-medium text-indigo-600 bg-white hover:bg-indigo-50"
            >
              Read the blog post
            </a>
          </div>
          <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="-mr-1 flex p-2 rounded-md  focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
            >
              <span className="sr-only">Dismiss</span>
              <svg
                className="h-6 w-6 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Banner
