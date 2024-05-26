import React from "react";
import Header from "../component/Header";
import styled from "styled-components";
import mainBg from "../imgs/mainbg.png";

const HomeContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: #1b1b1b;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${mainBg});
  background-repeat: no-repeat;
  background-position: bottom right -30%;
  filter: saturate(0.2);
  background-size: contain;
  flex-direction: column;
  gap: 20px;
`;

const HomeLogo = styled.span`
  color: #fff;
  font-size: 6rem;
`;

const HomeIntroduce = styled.p`
  color: #fff;
  text-align: center;
  font-weight: bold;
`;

const Home = () => {
  return (
    <HomeContainer>
      <Header />
      <HomeLogo>PORTFOLIO</HomeLogo>
      <HomeIntroduce>
        안녕하세요 신입 퍼블리셔를 꿈꾸는 김사도입니다!
      </HomeIntroduce>
    </HomeContainer>
  );
};

export default Home;
