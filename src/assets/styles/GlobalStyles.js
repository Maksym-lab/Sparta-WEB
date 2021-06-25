import { createGlobalStyle, css } from 'styled-components';
export const paragraph = css`
  color: ${({ theme }) => theme.black};
  font-size: ${({ theme }) => theme.size12};
  line-height: ${({ theme }) => theme.lineSpacing};
`;
export const title = css`
  color: ${({ theme }) => theme.darkGray};
`;
const GlobalStyles = createGlobalStyle`
  *{
    margin:${({ theme }) => theme.size0};
    padding:${({ theme }) => theme.size0};
    box-sizing: border-box;
    font-family: 'Cabin', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  body {
    margin: ${({ theme }) => theme.size0};
    font-size: 1em;
  }
  #root {
    margin: auto;
    max-width: 1920px;
  }
  }
  p{
    ${paragraph}
  }
  h1,h2,h3,h4,h5,h6{
    ${title}
  }
  a{
    color: ${({ theme }) => theme.red};
    text-decoration: ${({ theme }) => theme.red};;
  }
  input{
  }
`;
export default GlobalStyles;
