import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

import variables from "./GlobalVariables";

const GlobalStyle = createGlobalStyle`
  ${reset}

  @font-face {
    font-family: 'ONE-Mobile-Regular';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2105_2@1.0/ONE-Mobile-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  * {
    box-sizing: border-box;
  }

  :root {
    --toastify-toast-width: 400px;
    ${variables}
  }

  html,
  body {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    font-family: "ONE-Mobile-Regular";
  }

  h1, h2, h3, h4, h5, h6 {
    font-size: revert;
    /* font-weight: revert; */
  }

  ol, ul, li {
    list-style: none;
  }

  a {
    text-decoration: none;
    &:link,
    &:visited {
      color: inherit;
    }
  }

  button {
    cursor: pointer;
  }
`;

export default GlobalStyle;