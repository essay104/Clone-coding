import React from "react";
import styled from "styled-components";
import { buttonStyles } from "../theme";

const BTN = styled.button`
  cursor: pointer;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 18px;
  font-family: "Nanum Pen Script";
`;

const Button = ({ text, type, onClick }) => {
  const btnType = ["positive", "negative"].includes(type) ? type : "default";

  return (
    <BTN className={["Button", `Button_${btnType}`].join("")} onClick={onClick}>
      {text}
    </BTN>
  );
};

export default Button;
