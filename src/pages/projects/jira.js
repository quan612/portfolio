import React from 'react';
import { Helmet } from 'react-helmet';

import Project from '../../components/Projects/Project';

const JiraPage = (props) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{'Porfolio Project'}</title>
        <html lang={'en'} />
        <meta name="description" content={'Gatsby Simplefolio'} />
      </Helmet>
      <Project props={props} />
    </>
  );
};

export default JiraPage;
