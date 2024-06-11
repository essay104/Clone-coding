import React, { useState, useEffect } from "react";
import styled, { ServerStyleSheet } from "styled-components";
import { Link } from "react-router-dom";
import { motion, useAnimation, useScroll } from "framer-motion";
import { Desktop, Tablet } from "../MediaQueries";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import {
  faLocationDot,
  faCloud,
  faTemperatureHalf,
  faClock,
} from "@fortawesome/free-solid-svg-icons";

const Header = ({ toggleTheme, mobileModalHandler }) => {
  const [time, setTime] = useState(``);
  const [weatherData, setWeatherData] = useState(null);

  const API_KEY = "374dc8f920b7d124109ef49fbbf6bc1c";

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
    setWeatherData(data);
  };

  useEffect(() => {
    getCurrentLocation();
  }, []);

  useEffect(() => {
    const timer = () => {
      const theDay = new Date();
      const nowMonth = theDay.getMonth();
      const nowDay = theDay.getDay();
      const nowDate = theDay.getDate();
      const nowHour = theDay.getHours();
      const nowMin = theDay.getMinutes();
      const nowSec = theDay.getSeconds();

      const month = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];

      const day = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];

      const monthName = month[nowMonth];
      const dayName = day[nowDay];

      const crrHour =
        nowHour >= 12 ? `오후 ${nowHour - 12}` : `오전 ${nowHour}`;

      setTime(
        `${monthName} ${dayName} ${nowDate}일 ${crrHour}시 ${nowMin}분 ${nowSec}초`
      );
    };

    timer();

    setInterval(timer, 1000);
  }, []);

  const [justifyContent, setJustifyContent] = useState("flex-start");

  const modeHandler = () => {
    setJustifyContent(
      justifyContent === "flex-start" ? "flex-end" : "flex-start"
    );
    toggleTheme();
  };

  const scrolltoTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <Desktop>
        <HeaderBox variants={navVariants} initial="top">
          <div>
            <ModeChange
              onClick={() => modeHandler()}
              justifyContent={justifyContent}
            >
              <motion.span
                layout
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              />
            </ModeChange>
          </div>
          <CurrentWether>
            <WeatherInfo>
              <FontAwesomeIcon icon={faLocationDot} />
              {weatherData?.name}
            </WeatherInfo>
            <WeatherInfo>
              <FontAwesomeIcon icon={faCloud} />
              {weatherData?.weather[0].main}
            </WeatherInfo>
            <WeatherInfo>
              <FontAwesomeIcon icon={faTemperatureHalf} />
              {weatherData?.main.temp} ℃
            </WeatherInfo>
          </CurrentWether>
          <CurrentTime>
            <FontAwesomeIcon icon={faClock} /> {time}
          </CurrentTime>
          <HeaderList>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              {/* <Link to="/production">Projects</Link> */}
              <Link to="/projects">Projects</Link>
            </li>
          </HeaderList>
        </HeaderBox>
      </Desktop>
      <Tablet>
        <HeaderBox variants={navVariants} initial="top">
          <ModeChange
            onClick={() => modeHandler()}
            justifyContent={justifyContent}
          >
            <span
              layout
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            />
          </ModeChange>
          <TabletHeader onClick={() => scrolltoTop()}>fortpolio</TabletHeader>
          <StyledIcon icon={faBars} onClick={mobileModalHandler} />
        </HeaderBox>
      </Tablet>
    </div>
  );
};

export default Header;

const HeaderBox = styled(motion.div)`
  width: calc(100% - 48px);
  height: 80px;
  background: ${({ theme }) => theme.mainHeaderColor};
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 99;
  padding: 0 50px;
`;

const HeaderList = styled.ul`
  display: flex;
  gap: 30px;
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

  @media (max-width: 1220px) {
    font-size: 0.8rem;
  }

  @media (max-width: 768px) {
    gap: 20px;
    font-size: 0.8rem;
  }
`;

const ModeChange = styled(motion.div)`
  // position: absolute;
  // left: 20px;
  // bottom: 50%;
  // transform: translateY(50%);
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
  cursor: pointer;
  font-family: "Noto Sans KR", sans-serif;
  font-weight: 600;
  color: #72869f;
  text-transform: uppercase;
`;

const StyledIcon = styled(FontAwesomeIcon)`
  color: ${({ theme }) => theme.fontColor};
  font-size: 2rem;
  cursor: pointer;
`;

const CurrentTime = styled.div`
  // position: absolute;
  // bottom: 5%;
  display: flex;
  gap: 10px;
  align-items: center;
  font-size: 1rem;
  color: #72869f;
  font-family: "Noto Sans KR", sans-serif;
  font-weight: 600;

  @media (max-width: 1220px) {
    font-size: 0.8rem;
  }
`;

const CurrentWether = styled.div`
  font-size: 1rem;
  color: #72869f;
  font-family: "Noto Sans KR", sans-serif;
  font-weight: 600;
  display: flex;
  gap: 30px;

  @media (max-width: 1220px) {
    font-size: 0.8rem;
  }
`;

const WeatherInfo = styled.p`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const navVariants = {
  top: { backgroundColor: HeaderBox.backgroundColor },
  scroll: { backgroundColor: "transparent" },
};
