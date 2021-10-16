import { AppProps } from 'next/app'
import '@/styles/main.css'
import '@fontsource/spartan/400.css'
import '@fontsource/spartan/500.css'
import '@fontsource/spartan/600.css'
import '@fontsource/spartan/700.css'
import { ThemeProvider } from 'next-themes'

export default function MyApp({ Component, pageProps }: AppProps) {
  return <ThemeProvider attribute="class"><Component {...pageProps} /></ThemeProvider>
}
