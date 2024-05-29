import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../component/Header";
import styled from "styled-components";
import SkillsMini from "../component/SkillsMini";
import fakeimg from "../imgs/img.jpg";

const Production = () => {
  return (
    <Container>
      <Header />
      <NavMenu>
        <HTMLContainer>
          <h1>HTML & CSS Projects</h1>
          <HTMLContents>
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
      </NavMenu>
    </Container>
  );
};

export default Production;

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const NavMenu = styled.div`
  margin-top: 200px;
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.fontColor};
`;

const HTMLContainer = styled.div`
  // border: 1px solid #fff;
  // width: 51.56%;
  max-width: 1000px;
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
  width: 290px;
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
