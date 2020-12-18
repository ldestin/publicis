import React, { useEffect, useRef } from 'react';
import Head from 'next/head';
import TextField from '@material-ui/core/TextField'
import Header from './header';
import Footer from './footer';
import { useStyles } from './index.style'
import commonScript, { materialize } from './scripts'
import { commonStyles } from './styles';
import { Button } from '../button'

const Layout = ({ children, script, style, materialSelectors }) => {
  const classes = useStyles()
  const apiHTML = useRef()
  if (process.browser && !apiHTML.current) {
    const api = document.querySelector('#api')
    document.querySelectorAll('script').forEach(script => console.log(script.outerHTML))
    apiHTML.current = api?.innerHTML
    window.apiHTML = api?.innerHTML
  }

  useEffect(() => {
    const api = document.querySelector('#api')
    if (apiHTML.current && api) {
      // api.innerHTML = apiHTML.current
    }
  }, [])
  return (
    <div className={classes.container}>
      <Head>
        <style>{commonStyles}</style>
        {style && <style>{style}</style>}
      </Head>
      <Header />
      <div className={classes.apiContainer}>
        {children}
      </div>
      <Footer />
      <Button style={{ display: 'none' }} variant="contained" color="primary">Example</Button>
      <TextField style={{ display: 'none' }} focused error label="Example" helperText="Example" />
      <script dangerouslySetInnerHTML={{ __html: commonScript }}></script>
      <script dangerouslySetInnerHTML={{ __html: materialize(materialSelectors) }}></script>
      {script && <script dangerouslySetInnerHTML={{ __html: script }}></script>}
    </div>
  );
};

export default Layout;
