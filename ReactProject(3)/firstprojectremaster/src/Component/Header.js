import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRepeat } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Banner = styled.header`
  width: 15%;
  height: 100vh;
  background-color: #2db400;
  color: #eee;
  display: flex;
  align-items: center;
  flex-direction: column;
  & h1 {
    padding: 20px;
    border-bottom: 1px solid #fff;
    margin-bottom: 50px;
  }
`;

const Nav = styled.div`
  width: 100%;
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
  gap: 10px;
  align-items: center;
  font-size: 0.8rem;
`;

const TimeReset = styled(FontAwesomeIcon)`
  cursor: pointer;
  transition: all 0.3s;
  font-size: 20px;
  &:hover {
    color: royalblue;
  }
`;

const LinkCustom = styled(Link)`
  width: 100%;
  border-bottom: 1px solid #fff;
`;

const Header = () => {
  const [renewal, setRenewal] = useState(false);

  const API_KEY = process.env.REACT_APP_API_KEY;

  console.log(API_KEY);

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      getCurrentWether(lat, lon);
    });
  };

  const getCurrentWether = async (lat, lon) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&lang=kr&units=metric`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  };

  getCurrentLocation();
  getCurrentWether();

  const timer = () => {
    const theDay = new Date();
    const nowMonth = theDay.getMonth();
    const nowDay = theDay.getDay();
    const nowHour = theDay.getHours();
    const nowMin = theDay.getMinutes();
    const nowSec = theDay.getSeconds();

    const crrHour = nowHour >= 12 ? `오후 ${nowHour - 12}` : `오전 ${nowHour}`;

    return `${nowMonth + 1}월 ${nowDay}일
    ${crrHour}시 ${nowMin}분 ${nowSec}`;
  };

  const timerRenewal = () => {
    setRenewal((renewal) => !renewal);
  };

  useEffect(() => {
    timer();
  }, [setRenewal]);

  return (
    <Banner>
      <Link to="/">
        <h1>TITLE</h1>
      </Link>
      <LinkCustom to="/mySelf/">
        <Nav>나의 가치관</Nav>
      </LinkCustom>
      <LinkCustom to="/hobby/">
        <Nav>취미</Nav>
      </LinkCustom>
      <CurrentTime>
        {timer()}
        <TimeReset icon={faRepeat} onClick={timerRenewal} />
      </CurrentTime>
    </Banner>
  );
};

export default Header;
