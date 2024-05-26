import { css } from "styled-components";

export const buttonStyles = {
  positive: css`
    background: #1288f8;
    color: #2b2b2b;
  `,
  negative: css`
    background-color: red;
    color: white;
  `,
  default: css`
    background-color: #fff;
    color: white;
  `,
};

export const theme = {
  colors: {
    primary: "#03c75a",
    secondary: "#e2e2e2",
    positive: "green",
    negative: "red",
    default: "gray",
    bgColor: "#fff",
  },
  fonts: {
    main: "'Nanum Pen Script', cursive",
    size: "14px",
  },
};

export const lightTheme = {
  textColor: "black",
  backgroundColor: "whitesmoke",
};
