import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
    margin: 0;
    font-family: "Roboto", sans-serif;
  }

  body{
    height:100vh;
    width:100vw
  }
`;
