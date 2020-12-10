import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <title>New Links | Hacker News</title>
          <meta property="description" content="All your news in one place" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="stylesheet" href="/css/style.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
          hi
          <div id="api"></div>
        </body>
      </Html>
    )
  }
}

export default MyDocument