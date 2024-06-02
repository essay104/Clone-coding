import React, { useState, useEffect } from "react";
import styled from "styled-components";
import reset from "./reset.css";
import Slider from "react-slick";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: #eee;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const SliderContainer = styled.div`
  // border: 1px solid #000;
`;

const SliderContents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  border: 1px solid #000;
  cursor: pointer;
`;

const Sliders = styled.div`
  // overflow: hidden;
`;

const Name = styled.h1``;

const CarImg = styled.div`
  width: 300px;
  & img {
    width: 100%;
  }
`;

function App() {
  const [data, setData] = useState([]);

  const settings = {
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 2,
    arrows: false,
  };

  useEffect(() => {
    fetch("./db.json")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  console.log(data);
  return (
    <Container>
      <SliderContainer>
        <Sliders
          style={{
            width: "300px",
            height: "450px",
            display: "flex",
          }}
        >
          {data.map((data, idx) => (
            <Slider {...settings}>
              <SliderContents key={idx}>
                <CarImg>
                  <img src={data.imgsrc} alt="{data.name}" />
                </CarImg>
                <div>
                  <Name>{data.name}</Name>
                  <span>{data.price.toLocaleString()}원</span>
                </div>
              </SliderContents>
            </Slider>
          ))}
        </Sliders>
      </SliderContainer>
    </Container>
  );
}

export default App;
