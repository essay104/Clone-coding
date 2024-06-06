import React from "react";
import { SectionsContainer, Section } from "react-fullpage";
import styled from "styled-components";

const SectionsCustom = styled(SectionsContainer)``;

const SectionStyled = styled(Section)`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  background: #eee;
  &: nth-child(2) {
    background: #ddd;
  }
  &: nth-child(2) {
    background: #999;
  }
  &: last-child {
    background: #1a1a1a;
  }
`;

const Hobby = () => {
  const options = {
    anchors: ["sectionOne", "sectionTwo", "sectionThree", "sectionFour"],
    scrollBar: false,
    delay: 800,
  };

  return (
    <div style={{ width: "100%" }}>
      <SectionsCustom {...options}>
        <SectionStyled> hobby 1</SectionStyled>
        <SectionStyled> hobby 2</SectionStyled>
        <SectionStyled> hobby 3</SectionStyled>
        <SectionStyled> hobby 4</SectionStyled>
      </SectionsCustom>
    </div>
  );
};

export default Hobby;
