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
    background: linear-gradient(90deg, #0000 calc(100% - 1px), lightgray 0);
    background-size: auto;
  background-size: calc((100% - 3*3px)/4 + 1px) 100%;
    
    
  }

  * {
    list-style: none;
  }

  img {
    filter: grayscale(100%);
    
  }
  
 h1{
  text-align: center;
  font-size: 150px;
  margin: 0;
  padding-bottom: 30px;
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
