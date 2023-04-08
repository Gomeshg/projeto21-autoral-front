import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    line-height: none;
    border: none;
    outline: none;

    background-color: rgb(255, 255, 255);
  }
 
`;

export { GlobalStyle };
