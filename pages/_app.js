import React from 'react'
import { ThemeProvider } from '../theme'

const App = ({ Component, pageProps }) => {
  // return <Component {...pageProps} />
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default App
