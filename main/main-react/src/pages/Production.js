import React, { useState, useEffect } from "react";
import { Desktop, Tablet } from "../MediaQueries";

import styled from "styled-components";
import SkillsMini from "../component/SkillsMini";
import fakeimg from "../imgs/img.jpg";
import smartPhone from "../imgs/smartMockup.png";
import exampleImg from "../imgs/exampleHTML.png";

const Production = () => {
  const [project, setProjects] = useState([]);

  const getProjects = async () => {
    const url = "http://localhost:3001/projects";
    const response = await fetch(url);
    const data = await response.json();
    setProjects(data);
  };

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <>
      <Desktop>
        <Container>
          <HTMLContainer>
            <h1>HTML & CSS Projects</h1>
            <HTMLContents>
              <div>
                <HTMLObject>
                  <HTMLImg>
                    <img src={project.src} alt={project.name} />
                  </HTMLImg>
                  <HTMLTitle>
                    <span>HTML Title</span>
                    <div>
                      <SkillsMini skillName="HTML" />
                      <SkillsMini skillName="CSS" />
                      <SkillsMini skillName="JS" />
                    </div>
                  </HTMLTitle>
                </HTMLObject>
                <HTMLObject>
                  <HTMLImg>
                    <img src={fakeimg} alt="HTML01" />
                  </HTMLImg>
                  <HTMLTitle>
                    <span>HTML Title</span>
                    <div>
                      <SkillsMini skillName="HTML" />
                      <SkillsMini skillName="CSS" />
                      <SkillsMini skillName="JS" />
                    </div>
                  </HTMLTitle>
                </HTMLObject>
                <HTMLObject>
                  <HTMLImg>
                    <img src={fakeimg} alt="HTML01" />
                  </HTMLImg>
                  <HTMLTitle>
                    <span>HTML Title</span>
                    <div>
                      <SkillsMini skillName="HTML" />
                      <SkillsMini skillName="CSS" />
                      <SkillsMini skillName="JS" />
                    </div>
                  </HTMLTitle>
                </HTMLObject>
              </div>
              <div>
                <HTMLObject>
                  <HTMLImg>
                    <img src={fakeimg} alt="HTML01" />
                  </HTMLImg>
                  <HTMLTitle>
                    <span>HTML Title</span>
                    <div>
                      <SkillsMini skillName="HTML" />
                      <SkillsMini skillName="CSS" />
                      <SkillsMini skillName="JS" />
                    </div>
                  </HTMLTitle>
                </HTMLObject>
                <HTMLObject>
                  <HTMLImg>
                    <img src={fakeimg} alt="HTML01" />
                  </HTMLImg>
                  <HTMLTitle>
                    <span>HTML Title</span>
                    <div>
                      <SkillsMini skillName="HTML" />
                      <SkillsMini skillName="CSS" />
                      <SkillsMini skillName="JS" />
                    </div>
                  </HTMLTitle>
                </HTMLObject>
                <HTMLObject>
                  <HTMLImg>
                    <img src={fakeimg} alt="HTML01" />
                  </HTMLImg>
                  <HTMLTitle>
                    <span>HTML Title</span>
                    <div>
                      <SkillsMini skillName="HTML" />
                      <SkillsMini skillName="CSS" />
                      <SkillsMini skillName="JS" />
                    </div>
                  </HTMLTitle>
                </HTMLObject>
              </div>
              <div>
                <HTMLObject>
                  <HTMLImg>
                    <img src={fakeimg} alt="HTML01" />
                  </HTMLImg>
                  <HTMLTitle>
                    <span>HTML Title</span>
                    <div>
                      <SkillsMini skillName="HTML" />
                      <SkillsMini skillName="CSS" />
                      <SkillsMini skillName="JS" />
                    </div>
                  </HTMLTitle>
                </HTMLObject>
                <HTMLObject>
                  <HTMLImg>
                    <img src={fakeimg} alt="HTML01" />
                  </HTMLImg>
                  <HTMLTitle>
                    <span>HTML Title</span>
                    <div>
                      <SkillsMini skillName="HTML" />
                      <SkillsMini skillName="CSS" />
                      <SkillsMini skillName="JS" />
                    </div>
                  </HTMLTitle>
                </HTMLObject>
                <HTMLObject>
                  <HTMLImg>
                    <img src={fakeimg} alt="HTML01" />
                  </HTMLImg>
                  <HTMLTitle>
                    <span>HTML Title</span>
                    <div>
                      <SkillsMini skillName="HTML" />
                      <SkillsMini skillName="CSS" />
                      <SkillsMini skillName="JS" />
                    </div>
                  </HTMLTitle>
                </HTMLObject>
              </div>
            </HTMLContents>
          </HTMLContainer>
          <MobileContainer>
            <h1>Mobile Projects</h1>
            <MobileContents>
              <MobileImg>
                <img src={smartPhone} alt="smart" />
              </MobileImg>
              <Mobileinfo>
                <h2>Mobile Title</h2>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Aspernatur esse consequatur, delectus asperiores mollitia
                  nihil excepturi facilis explicabo maiores praesentium,
                  suscipit neque dolores blanditiis recusandae dolorem, repellat
                  consectetur nobis earum.
                </p>
              </Mobileinfo>
              <MobileStyle />
            </MobileContents>
            <MobileContents>
              <MobileImg>
                <img src={smartPhone} alt="smart" />
              </MobileImg>
              <Mobileinfo>
                <h2>Mobile Title</h2>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Aspernatur esse consequatur, delectus asperiores mollitia
                  nihil excepturi facilis explicabo maiores praesentium,
                  suscipit neque dolores blanditiis recusandae dolorem, repellat
                  consectetur nobis earum.
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
                  <img src={exampleImg} alt="img" />
                </CloneImg>
                <CloneSize>
                  <li>1920px</li>
                  <li>768px</li>
                  <li>390px</li>
                </CloneSize>
                <CloneDetail>
                  <h3>Project name</h3>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Aspernatur esse consequatur, delectus asperiores mollitia
                    nihil excepturi facilis explicabo maiores praesentium,
                    suscipit neque dolores blanditiis recusandae dolorem,
                    repellat consectetur nobis earum.
                  </p>
                </CloneDetail>
              </CloneContent>
              <CloneContent>
                <CloneImg>
                  <img src={exampleImg} alt="img" />
                </CloneImg>
                <CloneSize>
                  <li>1920px</li>
                  <li>768px</li>
                  <li>390px</li>
                </CloneSize>
                <CloneDetail>
                  <h3>Project name</h3>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Aspernatur esse consequatur, delectus asperiores mollitia
                    nihil excepturi facilis explicabo maiores praesentium,
                    suscipit neque dolores blanditiis recusandae dolorem,
                    repellat consectetur nobis earum.
                  </p>
                </CloneDetail>
              </CloneContent>
              <CloneContent>
                <CloneImg>
                  <img src={exampleImg} alt="img" />
                </CloneImg>
                <CloneSize>
                  <li>1920px</li>
                  <li>768px</li>
                  <li>390px</li>
                </CloneSize>
                <CloneDetail>
                  <h3>Project name</h3>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Aspernatur esse consequatur, delectus asperiores mollitia
                    nihil excepturi facilis explicabo maiores praesentium,
                    suscipit neque dolores blanditiis recusandae dolorem,
                    repellat consectetur nobis earum.
                  </p>
                </CloneDetail>
              </CloneContent>
            </CloneContents>
          </CloneContainer>
        </Container>
      </Desktop>
      <Tablet>
        <MobileContainer>
          <h1>Mobile Projects</h1>
          <MobileContents>
            <MobileImg>
              <img src={smartPhone} alt="smart" />
            </MobileImg>
            <Mobileinfo>
              <h2>Mobile Title</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur esse consequatur, delectus asperiores mollitia nihil
                excepturi facilis explicabo maiores praesentium, suscipit neque
                dolores blanditiis recusandae dolorem, repellat consectetur
                nobis earum.
              </p>
            </Mobileinfo>
            <MobileStyle />
          </MobileContents>
          <MobileContents>
            <MobileImg>
              <img src={smartPhone} alt="smart" />
            </MobileImg>
            <Mobileinfo>
              <h2>Mobile Title</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur esse consequatur, delectus asperiores mollitia nihil
                excepturi facilis explicabo maiores praesentium, suscipit neque
                dolores blanditiis recusandae dolorem, repellat consectetur
                nobis earum.
              </p>
            </Mobileinfo>
            <MobileStyle />
          </MobileContents>
        </MobileContainer>
      </Tablet>
    </>
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

const HTMLContainer = styled.section`
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
  }
`;

const HTMLObject = styled.div`
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

  @media (max-width: 768px) {
    gap: 10px;
  }
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
  width: 150px;
  height: 400px;
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
  margin-top: 200px;
  flex-direction: column;
`;

const CloneContents = styled.div`
  display: flex;
  gap: 60px;
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
