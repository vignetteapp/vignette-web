import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Spartan:wght@400;500;600;700&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://rsms.me/inter/font-files/Inter-Regular.woff2?v=3.19"
            rel="preload"
            as="font"
            type="font/woff2"
          />
          <link
            href="https://rsms.me/inter/inter.css"
            rel="preload"
            as="style"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
