import React from "react";
import styled from "styled-components";

const Main = styled.div`
  padding: 20px 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-bottom: 1px solid #e2e2e2;
  background-color: #03c75a;
  width: 100%;
  height: 80px;
  color: #1a1a1a;
  border-radius: 5px;
`;

const Header_left = styled.div`
  width: 25%;
  display: flex;
  justify-content: start;
`;

const Header_title = styled.div`
  width: 25%;
  font-size: 2rem;
  justify-content: center;
  display: flex;
`;

const Header_right = styled.div`
  width: 25%;
  display: flex;
  justify-content: end;
`;

const Header = ({ title, leftChild, rightChild }) => {
  return (
    <Main>
      <Header_left>{leftChild}</Header_left>
      <Header_title>{title}</Header_title>
      <Header_right>{rightChild}</Header_right>
    </Main>
  );
};

export default Header;
