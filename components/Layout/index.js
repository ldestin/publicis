import React from 'react';
import Head from 'next/head';
import { generateScript } from './commonScript'
import Header from './header';
import Footer from './footer';
import { useStyles } from './index.style'

const Layout = ({ children }) => {
  const classes = useStyles()
  return (
    <div className={classes.container}>
      <Head>
        <link rel="stylesheet" href="https://snprfrontendadb2c.blob.core.windows.net/root/custom-ui.css" />
        <script src="https://unpkg.com/@material-ui/core@latest/umd/material-ui.production.min.js"></script>
      </Head>
      <script src="https://snprfrontendadb2c.blob.core.windows.net/root/test.js"></script>
      <Header />
      <div className={classes.apiContainer}>
        {children}
      </div>
      <Footer />
      {/* <script dangerouslySetInnerHTML={{ __html: generateScript({ inputs: '.inputText' }) }}></script> */}
    </div>
  );
};

export default Layout;
