import React from 'react';
import NavigationBar from './Navigation/Navigation';

const Layout = ({ children }) => {
  return (
    <>
      <NavigationBar />
      {children}
    </>
  );
};

export default Layout;
