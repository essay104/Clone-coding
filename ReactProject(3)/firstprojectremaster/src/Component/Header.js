import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRepeat } from "@fortawesome/free-solid-svg-icons";

const Banner = styled.div`
  width: 15%;
  height: 100vh;
  background-color: #2db400;
  color: #eee;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  & h1 {
    padding: 20px;
    border-bottom: 1px solid #fff;
    margin-bottom: 50px;
  }
`;

const Nav = styled.div`
  width: 95%;
  color: #eee;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #fff;
  cursor: pointer;
  transition: all 0.3s;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.4);
  }

  &:active {
    background-color: rgba(255, 255, 255, 0.8);
  }
`;

const CurrentTime = styled.div`
  position: absolute;
  bottom: 5%;
  display: flex;
  gap: 20px;
  align-items: center;
`;

const TimeReset = styled(FontAwesomeIcon)`
  cursor: pointer;
  transition: all 0.3s;
  font-size: 20px;
  &:hover {
    color: red;
  }
`;

const Header = () => {
  
  useEffect(() => {
    timer();
  }, []);

  const timer = () => {
    const theDay = new Date();
    const nowMonth = theDay.getMonth();
    const nowDay = theDay.getDay();
    const nowHour = theDay.getHours();
    const nowMin = theDay.getMinutes();
    const nowSec = theDay.getSeconds();
    console.log(nowDay, nowHour, nowMonth);
    console.log(theDay);

    {
      nowHour >= 12 ? `"오후" + ${nowHour} - 12` : `"오전" + ${nowHour}`;
    }

    return `${nowMonth + 1}월 ${nowDay}일 ${nowHour}시 ${nowMin}분 ${nowSec}`;
  };

  return (
    <Banner>
      <h1>TITLE</h1>
      <Nav>menu 1</Nav>
      <Nav>menu 2</Nav>
      <Nav>menu 3</Nav>
      <Nav>menu 4</Nav>
      <CurrentTime>
        {timer()}
        <TimeReset icon={faRepeat} onClick={timer} />
      </CurrentTime>
    </Banner>
  );
};

export default Header;
