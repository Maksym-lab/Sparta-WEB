import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import GlobalStyle from '../../assets/styles/GlobalStyles';
const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Header />
      {children}
      <Footer />
    </>
  );
};
export default Layout;
