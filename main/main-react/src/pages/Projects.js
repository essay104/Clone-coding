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
import { SectionsContainer, Section } from "react-fullpage";
import { width } from "@fortawesome/free-brands-svg-icons/fa42Group";
import MoveToLeft from "../component/MoveToLeft";

const Production = () => {
  const [projects, setProjects] = useState([]);

  const getProjects = async () => {
    const url = `/db.json`;
    const response = await fetch(url);
    const data = await response.json();
    setProjects(data);
  };

  useEffect(() => {
    getProjects();
  }, []);

  console.log(projects);

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

  const options = {
    anchors: ["sectionOne", "sectionTwo", "sectionThree"],
    scrollBar: false,
    delay: 800,
  };

  return (
    <>
      <Container>
        <Desktop>
          <FullPageContainer>
            <motion.div
              initial={{ opacity: 0, x: -500 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <SectionsContainer {...options}>
                <SectionStyled>
                  <HTMLContainer>
                    <HTMLContents>
                      {projects.map((project) => (
                        <HTMLContnet key={project.id} className="project">
                          <HTMLImg>
                            <img src={project.src} alt={project.name} />
                          </HTMLImg>
                          <HTMLTitle>
                            <h4>{project.name}</h4>
                            <SkillBoxContainer>
                              {project.key01 && (
                                <SkillsMini skillName={project.key01} />
                              )}
                              {project.key02 && (
                                <SkillsMini skillName={project.key02} />
                              )}
                              {project.key03 && (
                                <SkillsMini skillName={project.key03} />
                              )}
                            </SkillBoxContainer>
                          </HTMLTitle>
                        </HTMLContnet>
                      ))}
                    </HTMLContents>
                  </HTMLContainer>
                </SectionStyled>
                <SectionStyled>
                  <MobileContainer>
                    <MobileContents>
                      <MobileImg>
                        <ImageManager imageKey="mobile01" />
                      </MobileImg>
                      <Mobileinfo>
                        <h2>로봇청소기 쇼핑</h2>
                        <p>
                          로봇 청소기를 쇼핑하는 웹페이지를 작성하였습니다. 여러
                          페이지를 인터렉티브하게 움직일 수 있도록 구현하였고
                          모달 화면, 피젯스피너, 구매 폼 등을 구현했습니다.
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
                          피젯스피너로 로딩화면을 구현했고 Todo리스트를 넣고
                          수정할 수 있는 기능을 커스터마이징 하였습니다. 또한
                          남은 체크박스를 누르면 완료 횟수가 올라가고 남은
                          시간이 표시됩니다.
                        </p>
                      </Mobileinfo>
                      <MobileStyle />
                    </MobileContents>
                  </MobileContainer>
                </SectionStyled>
                <SectionStyled>
                  <CloneContainer>
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
                            메인 이미지화 헤더를 고정시킨 채 메인 메뉴가
                            위아래로 움직이는 것을 pixed로 구현했습니다. 또한
                            오토슬라이드도 자바스크립트 반복문으로 작성했습니다.
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
                            팀프로젝트로 작성했습니다. 이미지의 적절한 배치를
                            위해 HTML구조를 이해하고자 노력했고 스크롤에 따라
                            이미지가 역동적으로 출현할 수 있게 자바스크립트로
                            작성하였습니다.
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
                            각종 슬라이더가 담겨져 있는 페이지 입니다. 미디어
                            쿼리에 따라 유연하게 페이지 화면이 변경할 수 있도록
                            노력했습니다.
                          </p>
                        </CloneDetail>
                      </CloneContent>
                    </CloneContents>
                  </CloneContainer>
                </SectionStyled>
              </SectionsContainer>
            </motion.div>
          </FullPageContainer>
        </Desktop>
        <Tablet>
          <HTMLTabletWrap></HTMLTabletWrap>
          {/* <MobileContainer>
          <MobileContents>
            <MobileImg>
              <ImageManager imageKey="mobile01" />
            </MobileImg>
            <Mobileinfo>
              <h2>로봇청소기 쇼핑</h2>
              <p>
                로봇 청소기를 쇼핑하는 웹페이지를 작성하였습니다. 여러 페이지를
                인터렉티브하게 움직일 수 있도록 구현하였고 모달 화면,
                피젯스피너, 구매 폼 등을 구현했습니다.
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
                피젯스피너로 로딩화면을 구현했고 Todo리스트를 넣고 수정할 수
                있는 기능을 커스터마이징 하였습니다. 또한 남은 체크박스를 누르면
                완료 횟수가 올라가고 남은 시간이 표시됩니다.
              </p>
            </Mobileinfo>
            <MobileStyle />
          </MobileContents>
        </MobileContainer> */}
        </Tablet>
      </Container>

      <MoveToLeft />
    </>
  );
};

export default Production;

const Container = styled.div`
  color: ${({ theme }) => theme.fontColor};
  font-family: "NEXON Lv1 Gothic OTF";
`;

const FullPageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

const SectionStyled = styled(Section)`
  width: auto;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HTMLContainer = styled(motion.section)`
  // border: 1px solid #000;
  width: 100%;
  height: 100%;
  min-width: 768px;
  display: flex;
  // flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 100px;
`;

const HTMLContents = styled.div`
  width: 1024px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

const HTMLContnet = styled.div`
  width: 300px;
  height: 200px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3);
  padding: 5px;
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
  min-width: 250px;
  height: 150px;
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
  color: #11264f;
  span {
    display: flex;
    gap: 5px;
  }
  div {
    display: flex;
    gap: 10px;
  }
`;

const SkillBoxContainer = styled.div`
  display: flex;
  gap: 2px;
`;

const MobileContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  gap: 100px;
  margin-top: 200px;
`;

const MobileContents = styled.div`
  width: 100%;
  height: 100%;
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
  margin-top: 150px;
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

const HTMLTabletWrap = styled.div`
  margin-top: 120px;
  width: 100%;
  height: auto;
  border: 1px solid #000;
`;
