import React from 'react';
import { Helmet } from 'react-helmet';

import Project from '../../components/Projects/Project';

const PortfolioPage = (props) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{'Portfolio Project'}</title>
        <html lang={'en'} />
        <meta name="description" content={'Gatsby Portfolio'} />
      </Helmet>
      <Project props={props} />
    </>
  );
};

export default PortfolioPage;
