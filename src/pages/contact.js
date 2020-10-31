import React from 'react';
import { Helmet } from 'react-helmet';

import About from '../components/About/About';

const ContactPage = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{'Porfolio Project'}</title>
        <html lang={'en'} />
        <meta name="description" content={'Gatsby Simplefolio'} />
      </Helmet>
      <About />
    </>
  );
};

export default ContactPage;
