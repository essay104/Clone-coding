import React from "react";
import Header from "../component/Header";
import styled from "styled-components";
import mainBg from "../imgs/mainbg.png";
import { useScroll, useAnimation } from "framer-motion";

const HomeContainer = styled.div`
  width: 100%;
  height: 100vh;
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
  p {
    color: ${({ theme }) => theme.fontColor};
    text-align: center;
    font-weight: bold;
    text-transform: uppercase;
  }
`;

const HomeLogo = styled.span`
  color: ${({ theme }) => theme.fontColor};
  font-size: 6rem;
  font-family: "Playfair Display";
`;


const Home = () => {
  
  return (
    <HomeContainer>
      <HomeLogo>PORTFOLIO</HomeLogo>
      <p>no pain no gain</p>
    </HomeContainer>
  );
};

export default Home;
