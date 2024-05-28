import React from "react";
import styled from "styled-components";
import { theme } from "../theme";

const MySkill = styled.div`
  padding: 10px;
  width: 53.125%
  min-width: 1020px;
  display: flex;
  gap: 90px;
`;

const Skills = styled.span`
  background-color: ${({ theme }) => theme.fontColor};
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  color: ${({ theme }) => theme.mainHeaderColor};
  width: 312px;
  height: 90px;
`;

const Skill = ({ text, skillDetail }) => {
  return (
    <MySkill>
      <Skills text={text} />
      <p>{skillDetail}</p>
    </MySkill>
  );
};

export default Skill;
