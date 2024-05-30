import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion, useAnimation, useScroll } from "framer-motion";
import { Desktop, Tablet } from "../MediaQueries";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const HeaderBox = styled(motion.div)`
  width: calc(100% - 48px);
  height: 80px;
  background: ${({ theme }) => theme.mainHeaderColor};
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
`;

const HeaderList = styled.ul`
  display: flex;
  gap: 50px;
  padding: 10px;
  font-family: "Noto Sans KR", sans-serif;
  font-weight: 600;
  color: #72869f;
  & li {
    transition: all 0.3s;
    position: relative;
    text-transform: uppercase;
    &:after {
      content: "";
      position: absolute;
      width: 0%;
      height: 2px;
      background: ${({ theme }) => theme.fontColor};
      bottom: -30%;
      left: 0;
      transition: all 0.3s;
    }
    &:hover:after {
      width: 100%;
    }
    &:hover {
      color: ${({ theme }) => theme.fontColor};
    }
  }

  @media (max-width: 768px) {
    gap: 20px;
    font-size: 0.8rem;
  }
`;

const ModeChange = styled(motion.div)`
  position: absolute;
  left: 20px;
  bottom: 50%;
  transform: translateY(50%);
  width: 50px;
  height: 25px;
  border-radius: 12.5px;
  background-color: #ddd;
  display: flex;
  align-items: center;
  justify-content: ${(props) => props.justifyContent};
  overflow: hidden;
  cursor: pointer;
  border: none;
  padding: 2px;
  & span {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #1b1b1b;
    border: none;
  }
`;

const TabletHeader = styled.h3`
  font-family: "Noto Sans KR", sans-serif;
  font-weight: 600;
  color: #72869f;
  text-transform: uppercase;
`;

const StyledIcon = styled(FontAwesomeIcon)`
  color: ${({ theme }) => theme.fontColor};
  font-size: 2rem;
  position: absolute;
  cursor: pointer;
  right: 20px;
  bottom: 50%;
  transform: translateY(50%);
`;

const currentTheme = ModeChange.backgroundColor;

const navVariants = {
  top: { backgroundColor: currentTheme },
  scroll: { backgroundColor: "transparent" },
};

const Header = ({ toggleTheme }) => {
  const navAnimation = useAnimation();
  const { scrollY } = useScroll();
  useEffect(() => {
    scrollY.on("change", () => {
      if (scrollY.get() > 80) {
        navAnimation.start("scroll");
      } else {
        navAnimation.start("top");
      }
    });
  }, [scrollY]);

  const [justifyContent, setJustifyContent] = useState("flex-start");

  const modeHandler = () => {
    setJustifyContent(
      justifyContent === "flex-start" ? "flex-end" : "flex-start"
    );
    toggleTheme();
  };

  const menuHandler = () => {};

  return (
    <div>
      <HeaderBox variants={navVariants} animate={navAnimation} initial="top">
        <ModeChange
          onClick={() => modeHandler()}
          justifyContent={justifyContent}
        >
          <span
            layout
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          />
        </ModeChange>
        <HeaderList>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/production">Production</Link>
          </li>
        </HeaderList>
      </HeaderBox>
      {/* <Tablet>
        <HeaderBox variants={navVariants} animate={navAnimation} initial="top">
          <ModeChange
            onClick={() => modeHandler()}
            justifyContent={justifyContent}
          >
            <span
              layout
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            />
          </ModeChange>
          <TabletHeader>fortpolio</TabletHeader>
          <Link to="./ModeChange.js">
            <StyledIcon icon={faBars} />
          </Link>
        </HeaderBox>
      </Tablet> */}
    </div>
  );
};

export default Header;
