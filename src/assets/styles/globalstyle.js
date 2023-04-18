import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    line-height: none;
    border: none;
    outline: none;
    font-size: 16px;
    word-wrap: break-word;
    font-family: "Poppins", sans-serif;
  }

`;

export { GlobalStyle };
