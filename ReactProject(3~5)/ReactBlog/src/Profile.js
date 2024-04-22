import React from "react";
import "./Profile.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Profile = () => {
  return (
    <div className="Profile">
      <div className="profileImg"></div>
      <div className="intro">
        <div className="intro-header">
          <p>자기소개</p>
          <FontAwesomeIcon icon="fa-magnifying-glass" />
        </div>
        <div className="intro-contents">
          안녕하세요 웹 개발자를 꿈꾸는 마동석입니다 저는 이젠아카데미
          웹퍼블리셔 과정을 수료했으며 HTML & CSS, JS, React, TS를 공부하며 더욱
          발전시키기 위해 노력하고 있습니다
        </div>
      </div>
        <div className="settings">
          <div className="setting-info">
            <p>서울시 강남구 서초동 거주</p>
            <p>18세 남</p>
          </div>
          <div className="setting-info">
            <p>abcde@naver.com</p>
            <p>010-1234-5678</p>
          </div>
          <div className="setting">
            <p></p>
            <p>설정</p>
          </div>
        </div>
    </div>
  );
};

export default Profile;
