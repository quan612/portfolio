import React from 'react';
import { Helmet } from 'react-helmet';

import ProjectsList from '../../components/Projects/ProjectsList';

const ProjectsPage = ({ location }) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{'Porfolio Project'}</title>
        <html lang={'en'} />
        <meta name="description" content={'Gatsby Simplefolio'} />
      </Helmet>
      <ProjectsList location={location} />
    </>
  );
};

export default ProjectsPage;
