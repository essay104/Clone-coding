import React from "react";
import styled from "styled-components";

const AsideMenu = styled.div`
  position: absolute;
  bottom: 5%;
  left: 20px;
  width: 80px;
  height: 80px;
  background: #000;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.8);
  z-index: 9;
`;

const Aside = () => {
  return <AsideMenu></AsideMenu>;
};

export default Aside;
