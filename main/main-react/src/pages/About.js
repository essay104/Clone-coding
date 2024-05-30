import React from "react";
import styled from "styled-components";
import person from "../imgs/person.png";
import Skill from "../component/Skill";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 500px;
`;

const Profile = styled.div`
  width: 100%;
  height: 510px;
  display: flex;
  justify-content: center;
  position: relative;
  transform: translateY(25%);
  img {
    margin-left: 0%;
  }
  p {
    font-size: 2.5rem;
    color: ${({ theme }) => theme.fontColor2};
    white-space: nowrap;
    position: absolute;
    z-index: 99;
    top: 60%;
  }
`;

const MainProfile = styled.div`
  width: 100%;
  max-width: 942px;
  height: 185px;
  background: #fff;
  transform: translateY(5%);
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 50px;
  font-size: 26px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.6);
  border-radius: 5px;
  margin: 0 auto;
`;

const MyInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 58px;
  justify-content: center;
  align-items: center;
  & span:first-child {
    font-size: 18px;
    color: #777;
  }
`;

const Edu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 7px;
  & span {
    font-size: 18px;
    color: #1a1a1a;
  }
  & div {
    display: flex;
    gap: 10px;
  }
`;

const EduInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const SkillBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  margin-top: 100px;
  padding-bottom: 50px;
`;

const About = () => {
  return (
    <Container>
      <div style={{ width: "100%" }}>
        <Profile>
          <img src={person} alt="img" />
          <p>안녕하세요 신입 퍼블리셔를 꿈꾸는 김사도입니다!</p>
        </Profile>
        <MainProfile>
          <MyInfo>
            <span>생년월일</span>
            <span>1995.05.15</span>
          </MyInfo>
          <Edu>
            <span style={{ color: "#777" }}>학업</span>
            <div>
              <EduInfo>
                <span>2014.3</span>
                <span>2021.3</span>
                <span>2021.6</span>
              </EduInfo>
              <EduInfo>
                <span>선덕고 졸업</span>
                <span>신한대 졸업</span>
                <span>이젠아카데미 퍼블리셔반 수료</span>
              </EduInfo>
            </div>
          </Edu>
        </MainProfile>
      </div>
      <SkillBox>
        <Skill></Skill>
      </SkillBox>
    </Container>
  );
};

export default About;
