import { AppProps } from 'next/app'
import '@/styles/main.css'
import '@fontsource/spartan/variable.css'
import '@fontsource/spartan/400.css'
import '@fontsource/spartan/500.css'
import '@fontsource/spartan/600.css'
import '@fontsource/spartan/700.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
