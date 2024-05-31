import React, { useState, useEffect } from "react";
import { Desktop, Tablet } from "../MediaQueries";
import styled from "styled-components";
import SkillsMini from "../component/SkillsMini";
import ImageManager from "../component/imgs";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
  useScroll,
} from "framer-motion";

const Production = () => {
  const [project, setProjects] = useState();
  const getProjects = async () => {
    const url = `https://my-json-server.typicode.com/essay104/json/db`;
    const response = await fetch(url);
    const data = await response.json();
    setProjects(data);
    console.log(data);
  };

  useEffect(() => {
    getProjects();
  }, []);

  const [visible, setVisible] = useState(1);
  const [back, setBack] = useState(false);
  const prevPlease = () => {
    setBack(true);
    setVisible((prev) => (prev === 1 ? 10 : prev - 1));
  };
  const nextPlease = () => {
    setBack(false);
    setVisible((prev) => (prev === 10 ? 1 : prev + 1));
  };

  return (
    <Container>
      <HTMLContainer>
        <h1>HTML & CSS Projects</h1>
        <HTMLContents>
          <div>
            <HTMLObject>
              <HTMLImg>
                <ImageManager imageKey="html01" />
              </HTMLImg>
              <HTMLTitle>
                <span>회전 애니메이션</span>
                <span>
                  <SkillsMini skillName="HTML" />
                  <SkillsMini skillName="CSS" />
                </span>
              </HTMLTitle>
            </HTMLObject>
            <HTMLObject>
              <HTMLImg>
                <ImageManager imageKey="html02" />
              </HTMLImg>
              <HTMLTitle>
                <span>무한 슬라이더</span>
                <span>
                  <SkillsMini skillName="HTML" />
                  <SkillsMini skillName="CSS" />
                  <SkillsMini skillName="JS" />
                </span>
              </HTMLTitle>
            </HTMLObject>
            <HTMLObject>
              <HTMLImg>
                <ImageManager imageKey="html03" />
              </HTMLImg>
              <HTMLTitle>
                <span>리그 테이블 JSON</span>
                <span>
                  <SkillsMini skillName="JS" />
                  <SkillsMini skillName="JSON" />
                </span>
              </HTMLTitle>
            </HTMLObject>
          </div>
          <div>
            <HTMLObject>
              <HTMLImg>
                <ImageManager imageKey="html04" />
              </HTMLImg>
              <HTMLTitle>
                <span>카카오 맛집 API</span>
                <span>
                  <SkillsMini skillName="CSS" />
                  <SkillsMini skillName="JS" />
                  <SkillsMini skillName="API" />
                </span>
              </HTMLTitle>
            </HTMLObject>
            <HTMLObject>
              <HTMLImg>
                <ImageManager imageKey="html05" />
              </HTMLImg>
              <HTMLTitle>
                <span>Fixed News</span>
                <span>
                  <SkillsMini skillName="HTML" />
                  <SkillsMini skillName="CSS" />
                </span>
              </HTMLTitle>
            </HTMLObject>
            <HTMLObject>
              <HTMLImg>
                <ImageManager imageKey="html06" />
              </HTMLImg>
              <HTMLTitle>
                <span>Kanban board</span>
                <span>
                  <SkillsMini skillName="HTML" />
                  <SkillsMini skillName="CSS" />
                  <SkillsMini skillName="JS" />
                </span>
              </HTMLTitle>
            </HTMLObject>
          </div>
          <div>
            <HTMLObject>
              <HTMLImg>
                <ImageManager imageKey="html07" />
              </HTMLImg>
              <HTMLTitle>
                <span>오토 슬라이더</span>
                <span>
                  <SkillsMini skillName="HTML" />
                  <SkillsMini skillName="CSS" />
                  <SkillsMini skillName="JS" />
                </span>
              </HTMLTitle>
            </HTMLObject>
            <HTMLObject>
              <HTMLImg>
                <ImageManager imageKey="html08" />
              </HTMLImg>
              <HTMLTitle>
                <span>토글 메뉴</span>
                <span>
                  <SkillsMini skillName="HTML" />
                  <SkillsMini skillName="CSS" />
                  <SkillsMini skillName="JS" />
                </span>
              </HTMLTitle>
            </HTMLObject>
            <HTMLObject>
              <HTMLImg>
                <ImageManager imageKey="html09" />
              </HTMLImg>
              <HTMLTitle>
                <span>City introduce</span>
                <span>
                  <SkillsMini skillName="HTML" />
                  <SkillsMini skillName="CSS" />
                  <SkillsMini skillName="API" />
                </span>
              </HTMLTitle>
            </HTMLObject>
          </div>
        </HTMLContents>
      </HTMLContainer>
      <MobileContainer>
        <h1>Mobile Projects</h1>
        <MobileContents>
          <MobileImg>
            <ImageManager imageKey="mobile01" />
          </MobileImg>
          <Mobileinfo>
            <h2>로봇청소기 쇼핑</h2>
            <p>
              로봇 청소기를 쇼핑하는 웹페이지를 작성하였습니다. 여러 페이지를
              인터렉티브하게 움직일 수 있도록 구현하였고 모달 화면, 피젯스피너,
              구매 폼 등을 구현했습니다.
            </p>
          </Mobileinfo>
          <MobileStyle />
        </MobileContents>
        <MobileContents>
          <MobileImg>
            <ImageManager imageKey="mobile02" />
          </MobileImg>
          <Mobileinfo>
            <h2>모바일 Todo리스트</h2>
            <p>
              피젯스피너로 로딩화면을 구현했고 Todo리스트를 넣고 수정할 수 있는
              기능을 커스터마이징 하였습니다. 또한 남은 체크박스를 누르면 완료
              횟수가 올라가고 남은 시간이 표시됩니다.
            </p>
          </Mobileinfo>
          <MobileStyle />
        </MobileContents>
      </MobileContainer>
      <CloneContainer>
        <h1>Clone Projects</h1>
        <CloneContents>
          <CloneContent>
            <CloneImg>
              <ImageManager imageKey="clone1" />
            </CloneImg>
            <CloneSize>
              <li>1920px</li>
              <li>768px</li>
              <li>390px</li>
            </CloneSize>
            <CloneDetail>
              <h3>뚜레쥬르</h3>
              <p>
                메인 이미지화 헤더를 고정시킨 채 메인 메뉴가 위아래로 움직이는
                것을 pixed로 구현했습니다. 또한 오토슬라이드도 자바스크립트
                반복문으로 작성했습니다.
              </p>
            </CloneDetail>
          </CloneContent>
          <CloneContent>
            <CloneImg>
              <ImageManager imageKey="clone2" />
            </CloneImg>
            <CloneSize>
              <li>1920px</li>
              <li>768px</li>
              <li>390px</li>
            </CloneSize>
            <CloneDetail>
              <h3>에뛰드</h3>
              <p>
                팀프로젝트로 작성했습니다. 이미지의 적절한 배치를 위해
                HTML구조를 이해하고자 노력했고 스크롤에 따라 이미지가 역동적으로
                출현할 수 있게 자바스크립트로 작성하였습니다.
              </p>
            </CloneDetail>
          </CloneContent>
          <CloneContent>
            <CloneImg>
              <ImageManager imageKey="clone3" />
            </CloneImg>
            <CloneSize>
              <li>1920px</li>
              <li>768px</li>
              <li>390px</li>
            </CloneSize>
            <CloneDetail>
              <h3>빙그레</h3>
              <p>
                각종 슬라이더가 담겨져 있는 페이지 입니다. 미디어 쿼리에 따라
                유연하게 페이지 화면이 변경할 수 있도록 노력했습니다.
              </p>
            </CloneDetail>
          </CloneContent>
        </CloneContents>
      </CloneContainer>
    </Container>
  );
};

export default Production;

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  color: ${({ theme }) => theme.fontColor};
  margin-top: 200px;
  margin-bottom: 200px;
`;

// const NavMenu = styled.div`
//   margin-top: 200px;
//   display: flex;
//   flex-direction: column;
//   color: ${({ theme }) => theme.fontColor};
// `;

const HTMLContainer = styled(motion.section)`
  // border: 1px solid #fff;
  // width: 51.56%;
  max-width: 768px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  gap: 100px;
`;

const HTMLContents = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 30px;
  align-items: center;
  margin-bottom: 200px;
  div {
    display: flex;
    gap: 30px;

    @media (max-width: 768px) {
      flex-direction: column;
    }
    span {
      @media (max-width: 768px) {
        display:flex;
        gap: 10px;
    }
  }
`;

const HTMLObject = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 10px;
  // border: 1px solid #f00;
`;

const HTMLImg = styled.div`
  min-width: 290px;
  height: 220px;
  cursor: pointer;
  overflow: hidden;
  border-radius: 5px;
  & img {
    width: 100%;
    height: 100%;
    transition: all 0.3s;
    &:hover {
      scale: 1.25;
    }
  }
`;

const HTMLTitle = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  span {
    display: flex;
    gap: 5px;
  }
  div {
    display: flex;
    gap: 10px;
  }
`;

const MobileContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 100px;
`;

const MobileContents = styled.div`
  width: inherit;
  height: auto;

  // border: 1px solid #fff;
  // background-color: ${({ theme }) => theme.fontColor};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  gap: 10px;
  color: ${({ theme }) => theme.fontColor};
`;

const MobileStyle = styled.span`
  width: 100%;
  height: 250px;
  background-color: ${({ theme }) => theme.bgColor2};
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: -99999;
`;

const MobileImg = styled.div`
  width: 250px;
  height: auto;
  zindex: 99;
  cursor: pointer;
  transition: all 0.5s;
  & img {
    width: 100%;
    height: 100%;
  }
  &:hover {
    scale: 1.2;
  }
`;

const Mobileinfo = styled.div`
  width: 390px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const CloneContainer = styled.section`
  max-width: 768px;
  height: 700px;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  align-items: center;
  gap: 100px;
  margin-top: 300px;
  flex-direction: column;
  @media (max-width: 768px) {
    margin-top: 750px;
    margin-bottom: 250px;
  }
`;

const CloneContents = styled.div`
  display: flex;
  gap: 60px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const CloneContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  gap: 30px;
`;

const CloneImg = styled.div`
  width: 250px;
  height: 500px;
  cursor: pointer;

  overflow: hidden;
  border-radius: 15px;
  & img {
    width: 100%;
    height: 100%;
    transition: all 0.5s;
    &:hover {
      scale: 1.1;
    }
  }

  @media (max-width: 768px) {
    &:first-child {
      height: 280px;
    }
  }
`;

const CloneSize = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  cursor: pointer;
  gap: 2px;
  li {
    box-shadow: inset 0px 0px 5px ${({ theme }) => theme.shadow};
    text-align: center;
    transition: all 0.3s;
    &:hover {
      background-color: ${({ theme }) => theme.fontColor2};
    }
  }
`;

const CloneDetail = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Buttons = styled.div`
  display: flex;
  gap: 20px;
`;

const Button = styled.button`
  border: 1px solid transparent;
  background: transparent;
  font-size: 24px;
  color: #fff;
  padding: 10px 20px;
  cursor: pointer;
  &:hover {
    border: 1px solid #fff;
    transition: all 0.3s;
  }
`;
