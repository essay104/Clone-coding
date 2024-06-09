import React from "react";
import styled from "styled-components";

const Toggle = () => {
  return <ToggleButton>+</ToggleButton>;
};

const ToggleButton = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  background-color: #fff;
  box-shadow: 0px, 0px, 5px, rgba(0, 0, 0, 0.6);
  position: sticky;
  left: 5%;
  bottom: 5%;
  cursor: pointer;
`;

export default Toggle;
