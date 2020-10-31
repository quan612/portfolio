import React from 'react';
import { Helmet } from 'react-helmet';

import Project from '../../components/Projects/Project';

const SeleniumPage = (props) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{'Selenium Project'}</title>
        <html lang={'en'} />
        <meta name="description" content={'Gatsby Simplefolio'} />
      </Helmet>
      <Project props={props} />
    </>
  );
};

export default SeleniumPage;
