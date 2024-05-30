import React from "react";
import styled from "styled-components";

const MySkill = styled.div`
  padding: 10px;
  width: 53.125%;
  min-width: 1020px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 90px;
  border: 1px solid ${({ theme }) => theme.fontColor};
  border-radius: 5px;
  & p {
    flex: 2;
    color: ${({ theme }) => theme.fontColor};
  }
`;

const Skills = styled.span`
  background-color: ${({ theme }) => theme.fontColor};
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  color: ${({ theme }) => theme.mainHeaderColor};
  width: 100%;
  max-width: 212px;
  height: 60px;
  border-radius: 5px;
`;

const Skill = () => {
  return (
    <>
      <MySkill>
        <Skills>HTML</Skills>
        <p>
          저는 HTML의 박스구조를 이해하기 위해 노력했으며 <br /> 플렉스,
          그리드를 활용하여 웹 페이지를 작성할 수 있습니다.
        </p>
      </MySkill>
      <MySkill>
        <Skills>CSS</Skills>
        <p>
          미디어쿼리를 활용하여 반응형 웹 페이지를 만드는 법을 배웠습니다.
          사용자가 시각적으로 접근하기 쉽도록 호버기능이나 애니메이션 기능을
          활용하여 더욱 인터렉티브한 페이지를 만들고자 노력합니다.
        </p>
      </MySkill>
      <MySkill>
        <Skills>Java Script</Skills>
        <p>
          자바스크립트를 통해 정적인 페이지에 토글, 슬라이드 등 다양한
          이벤트들을 추가할 수 있습니다.
        </p>
      </MySkill>
      <MySkill>
        <Skills>React</Skills>
        <p>
          다양한 리액트 훅들을 배웠고 리액트의 프롭스들을 효율적으로 관리하는
          법을 배웠습니다.
        </p>
      </MySkill>
    </>
  );
};

export default Skill;
