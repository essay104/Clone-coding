import React, { useState, useEffect } from "react";
import { Desktop, Tablet } from "../MediaQueries";
import styled from "styled-components";
import SkillsMini from "../component/SkillsMini";
import ImageManager from "../component/imgs";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
  useScroll,
} from "framer-motion";
import { SectionsContainer, Section } from "react-fullpage";

const SectionStyled = styled(Section)`
  font-size: 1rem;
  gap: 10px;
`;

const SectionWrap = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  padding: 10%;
  flex-direction: column;
  gap: 30px;
  justify-content: center;
  align-items: start;
  color: ${({ theme }) => theme.fontColor};
`;

const Projects = () => {
  const options = {
    anchors: ["sectionOne", "sectionTwo", "sectionThree"],
    scrollBar: false,
    delay: 800,
  };

  return (
    <SectionsContainer {...options}>
      <SectionStyled>
        <SectionWrap>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </SectionWrap>
      </SectionStyled>
      <SectionStyled>
        <SectionWrap>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </SectionWrap>
      </SectionStyled>
      <SectionStyled>
        <SectionWrap>1</SectionWrap>
      </SectionStyled>
    </SectionsContainer>
  );
};

export default Projects;
