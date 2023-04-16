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
    background-color: rgb(255, 255, 255);
    word-wrap: break-word;
  }
 
`;

export { GlobalStyle };
