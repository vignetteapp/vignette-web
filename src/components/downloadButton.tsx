import { ReactNode } from 'react'

// button
const DownloadButton: React.FC<{ children: ReactNode }> = ({ children }) => (
  <button
    type="button"
    className="outline-none rounded-md button-gray m-2 text-white text-2xl font-inter font-semibold px-16 py-3 shadow-md "
  >
    {children}
  </button>
)

export default DownloadButton
