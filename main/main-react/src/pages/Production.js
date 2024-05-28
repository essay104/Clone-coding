import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "../component/Header";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const NavMenu = styled.div`
  margin-top: 100px;
  padding: 20px;
  display: flex;
  justify-content: end;
  align-items: center;
  color: ${({ theme }) => theme.fontColor};
  font-size: 1rem;
  width: 92.8%;
  gap: 20px;
  text-transform: uppercase;
  & a {
    border-bottom: 3px solid #fff;
    &:hover {
      color: #72869f;
      border-bottom: 3px solid #72869f;
    }
  }
`;

const Production = () => {
  return (
    <Container>
      <Header />
      <NavMenu>
        <Link to="/production">HTML & CSS</Link>
        <Link to="/production:id">Mobile</Link>
        <Link to="/production:id">Clone</Link>
        <Link to="/production:id">React</Link>
      </NavMenu>
    </Container>
  );
};

export default Production;
