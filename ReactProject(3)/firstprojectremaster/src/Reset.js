import React from "react";
import { createGlobalStyle } from "styled-components";

const Reset = createGlobalStyle`
@font-face {
  font-family: 'GyeonggiTitleM';
  src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_one@1.0/GyeonggiTitleM.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'NEXON Lv2 Gothic';
  src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@2.1/NEXON Lv2 Gothic.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'NEXON Lv2 Gothic';
}

li {
  list-style: none;
}

a {
  text-decoration: none;
  color: inherit;
}
`;

export default Reset;
