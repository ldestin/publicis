import React from 'react';
import { generateScript } from './commonScript'
import Header from './header';
import Footer from './footer';

const Layout = ({ children }) => {
  return (
    <div class="container">
      <Header />
      <script src="https://snprfrontendadb2c.blob.core.windows.net/root/test.js"></script>
      <div class="api-container">
        {children}
      </div>
      <Footer />
      {/* <script dangerouslySetInnerHTML={{ __html: generateScript({ inputs: '.inputText' }) }}></script> */}
    </div>
  );
};

export default Layout;
