import React from 'react';

import { PortfolioProvider } from './src/context/context';

export const wrapRootElement = ({ element }) => {
  return <PortfolioProvider>{element}</PortfolioProvider>;
};
