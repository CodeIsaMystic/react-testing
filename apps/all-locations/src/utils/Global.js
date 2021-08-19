import { createGlobalStyle } from "styled-components"
import { normalize } from "polished"

import { fontColor } from "./colors"
import { primaryFont, typeScale } from "./typography"

export const GlobalStyle = createGlobalStyle`
 ${normalize()}
 html {
   font-size: 14px;
   box-sizing: border-box;
 }
 *, *::before, *::after {
  box-sizing: inherit;
 }
 body {
  margin: 0;
  font-family: ${primaryFont};
  font-weight: 300;
  max-width: 100%;
 }
 h1,
 h2 {
   font-weight: 700;
  }
  h1 {
    margin: 5px 0 21px 30px;
    font-size: ${typeScale.header1};
    color: ${fontColor[500]};
  }
  h2 {
    margin: 19px 0 0 30px;
    font-size: ${typeScale.header2};
    color: ${fontColor[300]};
  }
  
  .container         { width: 100%; }
  .container--header { border-bottom: 1px solid rgb(238, 238, 238); }
`
