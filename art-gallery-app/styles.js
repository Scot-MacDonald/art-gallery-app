import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: system-ui;
  }

  * {
    list-style: none;
  }

  ul{
    display:flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
`;
