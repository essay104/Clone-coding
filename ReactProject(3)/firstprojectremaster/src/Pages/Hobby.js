import React from "react";
import { SectionsContainer, Section } from "react-fullpage";
import styled from "styled-components";

const SectionsCustom = styled(SectionsContainer)``;

const SectionStyled = styled(Section)`
  font-size: 1rem;
  background: #fff;
  gap: 10px;
`;

const SectionWrap = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  padding: 10%;
  flex-direction: column;
  gap: 30px;
  justify-content: center;
  align-items: start;
`;

const Banner = styled.div`
  width: 100%;
  height: 100px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
`;

const Script = styled.p``;

const MapWrapper = styled.div`
  width: 100%;
  height: 500px;
  box-shadow: inset 0px 0px 5px rgba(0, 0, 0, 0.2);
  padding: 20px;
  display: flex;
`;

const Map = styled.div`
  width: 50%;
  height: 100%;
  border: 1px solid #000;
`;

const Hobby = () => {
  const options = {
    anchors: ["sectionOne", "sectionTwo", "sectionThree"],
    scrollBar: false,
    delay: 800,
  };

  return (
    <div style={{ width: "100%" }}>
      <SectionsCustom {...options}>
        <SectionStyled>
          <SectionWrap>
            <h1>산책과 달리기</h1>
            <Banner></Banner>
            <Script>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Script>
            <MapWrapper>
              <Map></Map>
              <Map></Map>
            </MapWrapper>
          </SectionWrap>
        </SectionStyled>
        <SectionStyled>
          <SectionWrap>
            <h1>게임</h1>
            <Banner></Banner>
            <Script>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Script>
          </SectionWrap>
        </SectionStyled>
        <SectionStyled>
          <SectionWrap>
            <h1>스포츠 시청</h1>
            <Banner></Banner>
            <Script>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Script>
          </SectionWrap>
        </SectionStyled>
      </SectionsCustom>
    </div>
  );
};

export default Hobby;
