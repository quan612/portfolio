import React from 'react';

import { PortfolioProvider } from './src/context/context';

// const Wrapper = ({ children }) => {
//   const [isFirstMount] = React.useState(true);

//   return (
//     <>{React.Children.map(children, (child) => React.cloneElement(child, { isFirstMount }))}</>
//   );
// };

export const wrapPageElement = ({ element }) => {
  return <PortfolioProvider>{element}</PortfolioProvider>;
};
