import React from 'react'
import { useStyles } from './index.style'

const Header = () => {
  const classes = useStyles()
  return (
    <div className={classes.header}>
      <div id="backButton" className={classes.backButton}>
        <img className={classes.arrow} src="https://snprfrontendadb2c.blob.core.windows.net/root/Arrow.svg" alt="Back arrow" />
        Back
      </div>
      <img id="logo" src="https://snprfrontendadb2c.blob.core.windows.net/root/sonepar logo 2.png" alt="Logo" className={classes.logo} />
      <a className={classes.contact} href="tel:028030401903">
        <div className={classes.text}>Need help?</div>
        <div className={classes.phone}>
          <span className={classes.number}>0280 304 019 03</span>
          <img className={classes.phoneIcon} src="https://snprfrontendadb2c.blob.core.windows.net/root/Phone.svg" alt="Phone icon" />
        </div>
      </a>
    </div>
  )
}

export default Header
