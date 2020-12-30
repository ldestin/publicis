import React from 'react';
import Head from 'next/head';
import uuid from 'uuid';
import TextField from '@material-ui/core/TextField'
import Header from './header';
import Footer from './footer';
import { useStyles } from './index.style'
import commonScript, { materialize } from './scripts'
import { commonStyles } from './styles';
import { Button } from '../button'

const Layout = ({ children, script, style, materialSelectors }) => {
  const classes = useStyles()
  const nonce = Buffer.from(uuid()).toString('base64')
  return (
    <div className={classes.container}>
      <Head>
        <meta property="csp-nonce" content={nonce} />
        <style>{commonStyles}</style>
        {style && <style>{style}</style>}
      </Head>
      <Header />
      <div className={classes.apiContainer}>
        {children}
      </div>
      <Footer />
      {/* we need to insert these components for material-ui to inject its styles server side */}
      <Button style={{ display: 'none' }}  variant="contained" color="primary">Example</Button>
      <TextField style={{ display: 'none' }} focused error label="Example" helperText="Example" />

      <script dangerouslySetInnerHTML={{ __html: commonScript }}></script>
      <script dangerouslySetInnerHTML={{ __html: materialize(materialSelectors) }}></script>
      {script && <script dangerouslySetInnerHTML={{ __html: script }}></script>}
    </div>
  );
};

export default Layout;
