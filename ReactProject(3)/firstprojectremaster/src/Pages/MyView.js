import React from "react";
import styled from "styled-components";

const Container = styled.body`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

const Section = styled.section`
  flex: 1;
  border: 1px solid #000;
  transition: flex 0.5s;
  cursor: pointer;
  padding: 40px;
  overflow: hidden;
  position: relative;
  background-color: rgba(0, 0, 0, 0.2);
  color: #fff;
  transition: all 0.5s;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  &:hover {
    flex: 5;
    background-color: rgba(0, 0, 0, 0.8);
    div {
    }
  }
`;

const Background = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -99;
  top: 0;
  right: 0;
  transition: all 1s;
  background-position: center;
  background-image: url("https://images.chosun.com/resizer/w_kZ9ojyxd1qXZOb3ySmXLt_om4=/2560x0/smart/cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/FX4XSGRSANESLN3UVVPCIQAKX4.jpg");
`;

const Script = styled.h5`
  text-align: center;
`;

const MyView = () => {
  return (
    <Container>
      <Section>
        <h1>인내심과 꾸준함</h1>
        <Script>
          저는 무언가를 달성하기 위해서는 괴로움을 참아낼 수 있는 인내심과
          <br /> 목표에 조바심을 갖지 않고 조금씩 천천히 전진할 수 있는 꾸준함을 가져야 한다고 생각합니다.
        </Script>
        <Background />
      </Section>
      <Section>
        <h1>정직함</h1>
        <Script></Script>
      </Section>
      <Section>
        <h1>배려</h1>
      </Section>
    </Container>
  );
};

export default MyView;
