import React from 'react';
import { Helmet } from 'react-helmet';

import Project from '../../components/Projects/Project';

const RentalPage = (props) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{'Rental Booking Project'}</title>
        <html lang={'en'} />
        <meta name="description" content={'Rental Booking'} />
      </Helmet>
      <Project props={props} />
    </>
  );
};

export default RentalPage;
