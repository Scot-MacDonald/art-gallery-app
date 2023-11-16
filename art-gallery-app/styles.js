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
    background:#dedcd0;
  }

  * {
    list-style: none;
  }

  img {
    filter: grayscale(100%);
  }
  

.art-pieces-list{
  display: flex;
  align-items: center;
  justify-content: center;
}

.spotlight {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: fit-content;
}

`;
