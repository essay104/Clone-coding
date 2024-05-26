import { createGlobalStyle } from "styled-components";

const Reset = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
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
