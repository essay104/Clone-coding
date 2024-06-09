import React from "react";
import styled from "styled-components";

const SkillBlock = styled.div`
  width: 40px;
  height: 20px;
  padding: 10px;
  color: #fff;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8rem;
  background-color: ${(props) => props.bgColor};
`;

const Skills = [
  { name: "CSS", color: "#4285F4" },
  { name: "HTML", color: "#EA4335" },
  { name: "JS", color: "#FFD400" },
  { name: "React", color: "#34A853" },
  { name: "SCSS", color: "#DB4437" },
  { name: "API", color: "#8E44AD" },
  { name: "JSON", color: "#757575" },
];

const SkillsMini = ({ skillName }) => {
  const skillBox = Skills.find((e) => e.name === skillName);
  return <SkillBlock bgColor={skillBox.color}>{skillBox.name}</SkillBlock>;
};

export default SkillsMini;
