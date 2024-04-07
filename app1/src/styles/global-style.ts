import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: ${(props) => props.theme.fonts.sans};
    background-color: ${(p) => p.theme.colors.white};
  }

  #root {
    min-height: 100vh;
  }
`;

export default GlobalStyle;
