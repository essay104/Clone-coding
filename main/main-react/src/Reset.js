import { createGlobalStyle } from "styled-components";

const Reset = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Gochi+Hand&family=Source+Sans+3:ital,wght@0,200..900;1,200..900&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Gochi+Hand&family=Nanum+Gothic&family=Source+Sans+3:ital,wght@0,200..900;1,200..900&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Nanum Gothic", sans-serif;
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
