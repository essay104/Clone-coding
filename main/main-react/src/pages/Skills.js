import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import HtmlIcon from "../imgs/Html-icon.png";
import CssIcon from "../imgs/css-icon.png";
import JSIcon from "../imgs/js-icon.png";
import ReactIcon from "../imgs/react-icon.png";
import TSIcon from "../imgs/ts-icon.png";

const Container = styled.section`
  width: 95%;
  display: flex;
  height: 80vh;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  margin-top: 142px;
  gap: 30px;
`;

const SkillIntro = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 450px;
  gap: 10px;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.3);
  background-color: #fff;
  overflow: hidden;
`;

const SkillImg = styled.div`
  width: 25px;
  height: 25px;
`;

const SkillScript = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
  padding: 20px;
`;

const Skills = () => {
  const navigate = useNavigate();

  return (
    <Container onClick={() => navigate(`/about`)}>
      <SkillIntro>
        <SkillScript>
          <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
            <SkillImg>
              <img src={HtmlIcon} style={{ width: "100%" }} />
            </SkillImg>
            <h1>HTML</h1>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </SkillScript>
      </SkillIntro>
      <SkillIntro>
        <SkillScript>
          <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
            <SkillImg>
              <img src={CssIcon} style={{ width: "100%" }} />
            </SkillImg>
            <h1>CSS</h1>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </SkillScript>
      </SkillIntro>
      <SkillIntro>
        <SkillScript>
          <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
            <SkillImg>
              <img src={JSIcon} style={{ width: "100%" }} />
            </SkillImg>
            <h1>Java Script</h1>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </SkillScript>
      </SkillIntro>
      <SkillIntro>
        <SkillScript>
          <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
            <SkillImg>
              <img src={ReactIcon} style={{ width: "100%" }} />
            </SkillImg>
            <h1>React</h1>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </SkillScript>
      </SkillIntro>
      <SkillIntro>
        <SkillScript>
          <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
            <SkillImg>
              <img src={TSIcon} style={{ width: "100%" }} />
            </SkillImg>
            <h1>TS</h1>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </SkillScript>
      </SkillIntro>
    </Container>
  );
};

export default Skills;
