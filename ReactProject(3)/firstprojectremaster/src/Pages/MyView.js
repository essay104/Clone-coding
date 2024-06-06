import React from "react";
import styled from "styled-components";
import { useState } from "react";

const Container = styled.body`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
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
    props.sectionOpen ? `rgba(0, 0, 0, 0.8)` : `rgba(0, 0, 0, 0.2)`};
  color: #fff;
  transition: all 0.5s;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
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

const Script = styled.h5`
  text-align: center;
  font-size: 1rem;
  display: ${(props) => (props.sectionOpen ? "block" : "none")};
`;

const MyView = () => {
  const [sectionOpen, setSectionOpen] = useState(false);

  const sectionOpenHandler = (id) => {
    setSectionOpen((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  console.log(sectionOpen);

  return (
    <Container>
      <Section
        sectionOpen={sectionOpen[1]}
        onClick={() => sectionOpenHandler(1)}
      >
        <h1>인내심과 꾸준함</h1>
        <Script sectionOpen={sectionOpen[1]}>
          저는 무언가를 달성하기 위해서는 괴로움을 참아낼 수 있는 인내심과
          <br /> 목표에 조바심을 갖지 않고 조금씩 천천히 전진할 수 있는 꾸준함을
          가져야 한다고 생각합니다.
        </Script>
        <Background />
      </Section>
      <Section
        onClick={() => sectionOpenHandler(2)}
        sectionOpen={sectionOpen[2]}
      >
        <h1>정직함</h1>
        <Script sectionOpen={sectionOpen[2]}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
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
        <h1>배려</h1>
        <Script sectionOpen={sectionOpen[3]}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Script>
      </Section>
    </Container>
  );
};

export default MyView;
