import { AppProps } from 'next/app'
import '@/styles/main.css'
import '@/styles/fonts.css'
import '@fontsource/spartan/700.css'
import '@fontsource/spartan/600.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
