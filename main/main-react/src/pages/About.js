import React from "react";
import styled from "styled-components";
import person from "../imgs/person.png";
import Skill from "../component/Skill";
import { Tablet, Desktop } from "../MediaQueries";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import MoveToRight from "../component/MoveToRight";
import MoveToLeft from "../component/MoveToLeft";
import { PagerProvider } from "../context/pagerContext";
import { usePager } from "../context/pagerContext";

const About = () => {
  const [sectionOpen, setSectionOpen] = useState(false);
  const { pager, setPagerChanger } = usePager();
  const navigate = useNavigate();

  const sectionOpenHandler = (id) => {
    setSectionOpen((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: -500 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -500 }}
        transition={{ duration: 0.8 }}
      >
        <Wrap>
          <Container>
            <Section
              sectionOpen={sectionOpen[1]}
              onClick={() => sectionOpenHandler(1)}
            >
              <SectionHeader sectionOpen={sectionOpen[1]}>
                Introduce
              </SectionHeader>
              <Script sectionOpen={sectionOpen[1]}>
                <ScriptWrap>
                  <ScriptImg>
                    <img src={person} alt="im" />
                  </ScriptImg>
                  <ScriptIntroduce>
                    <h2>안녕하세요 신입 퍼블리셔를 꿈꾸는 김사도입니다!</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>
                  </ScriptIntroduce>
                </ScriptWrap>
              </Script>
            </Section>
            <Section
              onClick={() => sectionOpenHandler(2)}
              sectionOpen={sectionOpen[2]}
            >
              <SectionHeader sectionOpen={sectionOpen[2]}>
                My Info
              </SectionHeader>
              <Script sectionOpen={sectionOpen[2]}>
                <ScriptWrap>
                  <Infobox>
                    <img
                      src="https://i.pinimg.com/736x/3f/94/70/3f9470b34a8e3f526dbdb022f9f19cf7.jpg"
                      style={{ width: "80%" }}
                    />
                    <p>프로필 사진(임시)</p>
                  </Infobox>
                  <Infobox>
                    <b>1995. 05. 15</b>
                    <b>서울시 도봉구 거주</b>
                  </Infobox>
                  <Infobox></Infobox>
                  <Infobox></Infobox>
                  <Infobox></Infobox>
                </ScriptWrap>
              </Script>
            </Section>
            <Section onClick={() => navigate(`./mySkills`)}>
              <SectionHeader>My Skills</SectionHeader>
              <Script>
                <ScriptWrap></ScriptWrap>
              </Script>
            </Section>
          </Container>
        </Wrap>
      </motion.div>
      <PagerProvider>
        <MoveToRight
          onClick={() => (setPagerChanger(3))}
        />
        <MoveToLeft onClick={() => (setPagerChanger(1))} />
      </PagerProvider>
    </>
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
  font-family: "NEXON Lv1 Gothic OTF";
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  height: 80vh;
`;

const Section = styled.section`
  flex: ${(props) => (props.sectionOpen ? 5 : 1)};
  border: 1px solid #fff;
  transition: flex 0.5s;
  cursor: pointer;
  padding: 40px;
  overflow: hidden;
  position: relative;
  background-color: ${(props) =>
    props.sectionOpen ? `rgba(0, 0, 0, 0.0)` : `rgba(0, 0, 0, 0.6)`};
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  color: ${({ theme }) => theme.fontColor};
  h1 {
    color: #fff;
  }
  &:hover {
    h1 {
      scale: 1.5;
    }
  }
  &:first-child {
    background: ${(props) =>
      props.sectionOpen
        ? `rgba(0, 0, 0, 0.0)`
        : `rgba(0,0,0,0.1) url("https://png.pngtree.com/png-vector/20220805/ourmid/pngtree-individual-person-in-crowd-png-image_5757150.png")
      center no-repeat;`};
  }
  &:nth-child(2) {
    background: ${(props) =>
      props.sectionOpen
        ? `rgba(0, 0, 0, 0.0)`
        : `url("https://static.vecteezy.com/system/resources/previews/028/288/634/large_2x/crowd-of-people-walking-busy-city-street-backlit-generative-ai-free-photo.jpg")
      center/cover no-repeat;`};
  }
  &:last-child {
    background: ${(props) =>
      props.sectionOpen
        ? `rgba(0, 0, 0, 0.0)`
        : `url("https://www.iamthecode.org/wp-content/uploads/2021/03/florian-olivo-4hbJ-eymZ1o-unsplash-scaled-e1616631053918.jpg")
      center/cover no-repeat;`};
  }
`;

const SectionHeader = styled.h1`
  display: ${(props) => (props.sectionOpen ? "none" : "block")};
  transition: all 0.5s;
`;

const Script = styled.div`
  text-align: center;
  font-size: 1rem;
  display: ${(props) => (props.sectionOpen ? "block" : "none")};
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  // box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
`;

const ScriptWrap = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1280px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`;

const Infobox = styled.div`
  width: 250px;
  height: 250px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  transition: transform 0.3s;
  overflow: hidden;
  color: #000;
  &:nth-child(3) {
    background: url(https://s3.ap-northeast-2.amazonaws.com/event-localnaeil/FileData/Article/202206/42301513-f583-4fda-b36c-d9bb134a9713.jpg) center/cover no-repeat;
  }

  &:nth-child(4) {
    background: url(https://www.shinhan.ac.kr/sites/kr/images/slide-1-7.jpg)
      center/cover no-repeat;
  }

  &:last-child {
    background: url(https://yt3.googleusercontent.com/uWjePIllU9lCvlPI7gqN8NcCN2yNC1iB-R3_xumGfoZu1Sdth9zS2nA-QiyPd_RC0bihEEpB=s900-c-k-c0x00ffffff-no-rj) center/cover no-repeat;
  }

  &:hover {
  transform: translateY(-10%);
  }

  &:nth-child(3)::after {
  content: "2014.03 선덕고 졸업";
  white-space:pre;
  }

  &:nth-child(4)::after {
  content: "2021.03 신한대 졸업";
  }

  &:last-child::after {
  content: "2024.06 이젠아카데미 퍼블리셔반 수료";
  }

  &:nth-child(3)::after,
  &:nth-child(4)::after,
  &:last-child::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    color: #fff;
  }


}
`;

const ScriptImg = styled.div`
  transform: translateY(20%);
`;

const ScriptIntroduce = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  text-align: left;
  font-family: "NEXON Lv1 Gothic OTF";
  h2 {
    color: ${({ theme }) => theme.fontColor2};
  }
`;
