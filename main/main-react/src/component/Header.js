import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const HeaderBox = styled.div`
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
`;

const ModeChange = styled(motion.div)`
  position: absolute;
  right: 20px;
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

const Header = ({ toggleTheme }) => {
  const [justifyContent, setJustifyContent] = useState("flex-start");

  const modeHandler = () => {
    setJustifyContent(
      justifyContent === "flex-start" ? "flex-end" : "flex-start"
    );
    toggleTheme();
  };

  return (
    <div>
      <HeaderBox>
        <HeaderList>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/skill">Skill</Link>
          </li>
          <li>
            <Link to="/production">Production</Link>
          </li>
          <li>
            <Link to="/epilogue">Epilogue</Link>
          </li>
        </HeaderList>
        <ModeChange
          onClick={() => modeHandler()}
          justifyContent={justifyContent}
        >
          <span
            layout
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          />
        </ModeChange>
      </HeaderBox>
    </div>
  );
};

export default Header;
