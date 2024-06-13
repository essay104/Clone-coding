import React from "react";
import styled, { keyframes } from "styled-components";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import HtmlIcon from "../imgs/Html-icon.png";
import CssIcon from "../imgs/css-icon.png";
import JSIcon from "../imgs/js-icon.png";
import ReactIcon from "../imgs/react-icon.png";
import TSIcon from "../imgs/ts-icon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

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

const BackToPrevPage = styled(FontAwesomeIcon)`
  font-size: 45px;
  cursor: pointer;
  position: absolute;
  top: 20%;
  right: 5%;
  color: ${({ theme }) => theme.fontColor3};
  transition: all 0.5s;
  &:hover {
    color: ${({ theme }) => theme.pager2};
    scale: 1.2;
  }
`;

const Skills = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <SkillIntro>
        <SkillScript>
          <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
            <SkillImg>
              <img src={HtmlIcon} style={{ width: "100%" }} />
            </SkillImg>
            <h1>HTML</h1>
          </div>
          <p>
            저는 HTML의 박스구조를 이해하기 위해 노력했으며 플렉스, 그리드를
            활용하여 웹 페이지를 작성할 수 있습니다.
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
            미디어쿼리를 활용하여 반응형 웹 페이지를 만드는 법을 배웠습니다.
            사용자가 시각적으로 접근하기 쉽도록 호버기능이나 애니메이션 기능을
            활용하여 더욱 인터렉티브한 페이지를 만들고자 노력합니다.
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
            자바스크립트를 통해 정적인 페이지에 토글, 슬라이드 등 다양한
            이벤트들을 추가할 수 있습니다.
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
            다양한 리액트 훅들을 배웠고 리액트의 프롭스들을 효율적으로 관리하는
            법을 배웠습니다.
          </p>
        </SkillScript>
      </SkillIntro>
      <BackToPrevPage icon={faX} onClick={() => navigate(`/about`)} />
    </Container>
  );
};

export default Skills;
