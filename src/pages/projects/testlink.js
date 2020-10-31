import React from 'react';
import { Helmet } from 'react-helmet';

import Project from '../../components/Projects/Project';

const TestLinkPage = (props) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{'TestLink Project'}</title>
        <html lang={'en'} />
        <meta name="description" content={'Gatsby Simplefolio'} />
      </Helmet>
      <Project props={props} />
    </>
  );
};

export default TestLinkPage;
