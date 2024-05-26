import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderBox = styled.div`
  width: calc(100% - 48px);
  height: 80px;
  background: #000;
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
`;

const HeaderContents = styled.li`
  transition: all 0.3s;
  position: relative;
  text-transform: uppercase;
  &:after {
    content: "";
    position: absolute;
    width: 0%;
    height: 2px;
    background: #fff;
    bottom: -30%;
    left: 0;
    transition: all 0.3s;
  }
  &:hover:after {
    width: 100%;
  }
  &:hover {
    color: #fff;
  }
`;

const Header = () => {
  return (
    <div>
      <HeaderBox>
        <HeaderList>
          <HeaderContents>
            <Link to="/">Home</Link>
          </HeaderContents>
          <HeaderContents>
            <Link to="/about">About</Link>
          </HeaderContents>
          <HeaderContents>
            <Link to="/skill">Skill</Link>
          </HeaderContents>
          <HeaderContents>
            <Link to="/production">Production</Link>
          </HeaderContents>
          <HeaderContents>
            <Link to="/epilogue">Epilogue</Link>
          </HeaderContents>
        </HeaderList>
      </HeaderBox>
    </div>
  );
};

export default Header;
