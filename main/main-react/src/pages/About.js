import React from "react";
import styled from "styled-components";
import person from "../imgs/person.png";
import Skill from "../component/Skill";
import { Tablet, Desktop } from "../MediaQueries";
import { useState } from "react";
import test from "../imgs/test.png";
import { width } from "@fortawesome/free-brands-svg-icons/fa42Group";

const About = () => {
  const [sectionOpen, setSectionOpen] = useState(false);

  const sectionOpenHandler = (id) => {
    setSectionOpen((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  console.log(sectionOpen);

  return (
    <Wrap>
      <Container>
        <Section
          sectionOpen={sectionOpen[1]}
          onClick={() => sectionOpenHandler(1)}
        >
          <SectionHeader sectionOpen={sectionOpen[1]}>My Info</SectionHeader>
          <Script sectionOpen={sectionOpen[1]}>
            <ScriptWrap>
              <div>
                <img src={person} />
              </div>
              <div>
                <h1
                  style={{
                    fontSize: "2rem",
                    color: "#000",
                    paddingLeft: "100px",
                  }}
                >
                  김사도
                </h1>
                <h1
                  style={{
                    fontSize: "2rem",
                    color: "#000",
                    paddingLeft: "100px",
                  }}
                >
                  1995.05.15
                </h1>
              </div>
              <div style={{ display: "flex", float: "right" }}>
                <div>
                  <img src={test} />
                </div>
              </div>
            </ScriptWrap>
          </Script>
          <Background />
        </Section>
        <Section
          onClick={() => sectionOpenHandler(2)}
          sectionOpen={sectionOpen[2]}
        >
          <SectionHeader sectionOpen={sectionOpen[2]}>My Skills</SectionHeader>
          <Script sectionOpen={sectionOpen[2]}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Script>
        </Section>
        <Section
          onClick={() => sectionOpenHandler(3)}
          sectionOpen={sectionOpen[3]}
        >
          <SectionHeader sectionOpen={sectionOpen[3]}>My Dream</SectionHeader>
          <Script sectionOpen={sectionOpen[3]}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Script>
        </Section>
      </Container>
    </Wrap>
  );
};

export default About;

const Wrap = styled.body`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 100px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  height: 80vh;
`;

const Section = styled.section`
  flex: ${(props) => (props.sectionOpen ? 5 : 1)};
  border: 1px solid #000;
  transition: flex 0.5s;
  cursor: pointer;
  padding: 40px;
  overflow: hidden;
  position: relative;
  background-color: ${(props) =>
    props.sectionOpen ? `rgba(0, 0, 0, 0.0)` : `rgba(0, 0, 0, 0.6)`};
  color: #fff;
  transition: all 0.5s;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const SectionHeader = styled.h1`
  display: ${(props) => (props.sectionOpen ? "none" : "block")};
`;

const Background = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -99;
  top: 0;
  right: 0;
  transition: all 1s;
  background-position: center;
  background-image: url("https://images.chosun.com/resizer/w_kZ9ojyxd1qXZOb3ySmXLt_om4=/2560x0/smart/cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/FX4XSGRSANESLN3UVVPCIQAKX4.jpg");
`;

const Script = styled.div`
  text-align: center;
  font-size: 1rem;
  display: ${(props) => (props.sectionOpen ? "block" : "none")};
  width: 100%;
  height: 100%;
`;

const ScriptWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
