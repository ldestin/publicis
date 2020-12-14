import React from 'react'
import { ServerStyleSheets } from '@material-ui/core/styles';
import Document, { Html, Head, Main, NextScript } from 'next/document'
import router from 'next/router'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const { req, res } = ctx
    const isLayout = req.url.startsWith('/test')
    const sheets = new ServerStyleSheets();
    const originalRenderPage = ctx.renderPage;

    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
      });
    const initialProps = await Document.getInitialProps(ctx)

    // const router = useRouter()
    console.log({ isLayout, router, initialProps, req, res })
    return {
      ...initialProps,
      isLayout,
      styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()]
    }
  }

  render() {
    const { isLayout } = this.props
    console.log({ isLayout })
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
        </body>
      </Html>
    )
  }
}

export default MyDocument