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
  const apiRef = useRef()
  if (process.browser && !apiRef.current) {
    const apiClone = window.$('#api').clone()
    console.log({ apiClone })
    // document.querySelectorAll('script').forEach(script => console.log(script.outerHTML))
    apiRef.current = apiClone
    window.apiClone = apiClone
  }

  useEffect(() => {
    const api = document.querySelector('#api')
    console.log(apiRef)
    if (apiRef.current && api) {
      window.$('#api').replaceWith(apiRef.current)
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
