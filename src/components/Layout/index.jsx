import React from 'react';
import { ThemeProvider } from 'styled-components'
import Header from '../Header';
import Footer from '../Footer';
import { variables } from '../../assets/styles/variables';
import GlobalStyle from '../../assets/styles/GlobalStyles';
const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={variables}>
      <GlobalStyle />
      <Header />
      {children}
      <Footer />
    </ThemeProvider>
  );
};
export default Layout;
