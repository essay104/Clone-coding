import React, { useState } from "react";
import Header from "../component/Header";
import styled from "styled-components";
import mainBg from "../imgs/mainbg.png";
import { useScroll, useAnimation } from "framer-motion";
import { Tablet, Desktop } from "../MediaQueries";
import { motion } from "framer-motion";
import MoveToRight from "../component/MoveToRight";
import { useNavigate } from "react-router-dom";
import { usePager } from "../context/pagerContext";

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
  font-family: "NEXON Lv2 Gothic";

  p {
    color: ${({ theme }) => theme.fontColor};
    text-align: center;
    font-weight: bold;
    text-transform: uppercase;
    font-family: "MaplestoryOTFBold";
  }
`;

const HomeContainerTablet = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${mainBg});
  background-repeat: no-repeat;
  background-position: center;
  filter: saturate(0.2);
  background-size: cover;
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
  font-size: 8rem;
  text-shadow: 0px 0px 30px rgba(255, 255, 255, 1);
  font-family: "NEXON Lv2 Gothic";
  font-weight: 800;
  text-shadow: 3px 3px 5px rgba(0, 0, 0, 0.3), 6px 6px 10px rgba(0, 0, 0, 0.2),
    9px 9px 15px rgba(0, 0, 0, 0.1);
`;

const LogoDeco = styled.span`
  width: 100%;
  height: 180px;
  background-color: ${({ theme }) => theme.mainHeaderColor};
  transform: translateY(0%);
  position: absolute;
  z-index: -999;
`;

const HomeNavMenu = styled.ul`
  display: flex;
  width: 400px;
  height: 80px;
  margin: 30px auto;
  justify-content: center;
  align-items: center;
  gap: 30px;
  border-radius: 5px;
  background-color: #f9f9f9;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
`;

const Home = () => {
  const navigate = useNavigate();

  const { pager, setPagerChanger } = usePager();

  return (
    <>
      <Desktop>
        <HomeContainer>
          <motion.div
            initial={{ opacity: 0, x: 500 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 500 }}
            transition={{ duration: 0.8 }}
          >
            <HomeLogo>
              SADO's <br /> PORTFOLIO
            </HomeLogo>
            {/* <HomeNavMenu>
              <li>nav1</li>
              <li>nav2</li>
              <li>nav3</li>
            </HomeNavMenu> */}
          </motion.div>
        </HomeContainer>
        <MoveToRight onClick={() => setPagerChanger(2)} />
      </Desktop>
      <Tablet>
        <HomeContainerTablet>
          <HomeLogo>PORTFOLIO</HomeLogo>
          <p>no pain no gain</p>
          <LogoDeco />
        </HomeContainerTablet>
      </Tablet>
    </>
  );
};

export default Home;
