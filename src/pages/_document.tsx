import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://rsms.me/inter/inter.css"
            rel="preload"
            as="style"
          />
          <link rel="preload" href="/images/background.jpg" as="image" />
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
