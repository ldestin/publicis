import React from 'react'
import { useStyles } from './index.style'

const Footer = () => {
  const classes = useStyles()
  return (
    <div className={classes.footer}>
      <div className={classes.footerContainer}>
        <div className={classes.juridic}>
          <div className={classes.copyright}>© [OPCO NAME] 2021</div>
          <div className={classes.links}>
            <div className={classes.link}>Terms of use/sale</div>
            <div className={classes.link}>Data protection</div>
            <div className={classes.link}>Whistleblowing</div>
          </div>
        </div>
        <div className={classes.socials}>
          <a href="#">
            <img src="https://snprfrontendadb2c.blob.core.windows.net/root/Facebook.svg" alt="Facebook icon" />
          </a>
          <a href="#">
            <img src="https://snprfrontendadb2c.blob.core.windows.net/root/Instagram.svg" alt="Instagram icon" />
          </a>
          <a href="#">
            <img src="https://snprfrontendadb2c.blob.core.windows.net/root/LinkedIn.svg" alt="LinkedIn icon" />
          </a>
          <a href="#">
            <img src="https://snprfrontendadb2c.blob.core.windows.net/root/Twitter.svg" alt="Twitter icon" />
          </a>
          <a href="#">
            <img src="https://snprfrontendadb2c.blob.core.windows.net/root/Youtube.svg" alt="Youtube icon" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer