import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Container = styled.section`
  width: 95%;
  display: flex;
  height: 80vh;
  justify-content: center;
  align-items: center;
  border: 1px solid #000;
  margin: 0 auto;
  margin-top: 142px;
`;

const Skills = () => {
  const navigate = useNavigate();

  return <Container onClick={() => navigate(`/about`)}></Container>;
};

export default Skills;
