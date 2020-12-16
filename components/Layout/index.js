import React from 'react';
import Head from 'next/head';
import { generateScript } from './commonScript'
import Header from './header';
import Footer from './footer';
import { useStyles } from './index.style'
import { commonStyles } from './commonStyle';

const Layout = ({ children, script, styles }) => {
  const classes = useStyles()
  return (
    <div className={classes.container}>
      <Head>
        <link rel="stylesheet" href="https://snprfrontendadb2c.blob.core.windows.net/root/custom-ui.css" />
        <style>{commonStyles}</style>
        {styles && <style>{styles}</style>}
      </Head>
      <script src="https://snprfrontendadb2c.blob.core.windows.net/root/test.js"></script>
      <Header />
      <div className={classes.apiContainer}>
        {children}
      </div>
      <Footer />
      {script && <script dangerouslySetInnerHTML={{ __html: script }}></script>}
    </div>
  );
};

export default Layout;
