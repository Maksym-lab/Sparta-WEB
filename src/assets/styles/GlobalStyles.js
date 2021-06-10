import { createGlobalStyle } from 'styled-components';
const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Cabin', sans-serif;
    font-size: 1em;
  }
  #root {
    margin: auto;
    max-width: 1920px;
  }
`;
export default GlobalStyles;
