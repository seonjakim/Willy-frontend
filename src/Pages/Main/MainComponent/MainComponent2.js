import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

function MainPage2(props) {
  const [slides, setSlide] = useState([""]);
  const [buttons] = useState([0, 90, 180, 270]);
  const [num, setNum] = useState(0);
  //const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);

  useEffect(() => {
    setSlide(props.datas);
  }, [props.datas]);

  useEffect(() => {
    const startSlide = setInterval(() => {
      num !== 270 ? setNum(num + 90) : setNum(0);
      slideRef.current.style.transform = `translateX(-${num}0px)`;
      slideRef.current.style.transition = "all 0.5s ease-in-out";
    }, 3000);
    return () => clearInterval(startSlide);
  }, [num]);

  const handleButton = (button) => {
    button !== num
      ? (slideRef.current.style.transform = `translateX(-${button}0px)`)
      : setNum(num);
    setNum(button);
  };

  return (
    <Main>
      <Body>
        <Span>그 동안 고민 많았죠?</Span>
        <Carousel>
          <Slider ref={slideRef}>
            {slides.map((slide, idx) => {
              return (
                <Slide key={idx}>
                  <img src={slide.image_url} alt="" />
                  <BoldText>{slide.title}</BoldText>
                  <SubText>{slide.content}</SubText>
                </Slide>
              );
            })}
          </Slider>
          <Dot>
            {buttons.map((button, idx) => {
              return (
                <Button
                  key={idx}
                  isActive
                  onClick={() => handleButton(button)}
                />
              );
            })}
          </Dot>
        </Carousel>
      </Body>
    </Main>
  );
}

export default MainPage2;

//style
const Main = styled.div`
  box-sizing: border-box;
`;

const Body = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 607px;
  background-color: #ecd7c4;
`;

const Span = styled.span`
  font-size: 19px;
  font-weight: 700;
`;

const Carousel = styled.div`
  position: relative;
  text-align: center;
  overflow: hidden;
  width: 900px;
  height: 347px;
`;

const Slider = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  margin-top: 63px;
`;

const Slide = styled.div`
  width: 900px;
`;

const BoldText = styled.p`
  font-size: 48px;
  font-weight: 700;
  margin-top: 12px;
  color: #333;
`;

const SubText = styled.p`
  font-size: 16px;
  margin-top: 10px;
  color: #333;
`;

const Dot = styled.div`
  margin-top: 329px;
`;

const Button = styled.button`
  border: none;
  background-color: black;
  border-radius: 50%;
  width: 8px;
  height: 8px;
  margin: 0 0 0 10px;
  padding: 0;
  background-color: ${(props) => (props.isActive ? "black" : "red")};
`;
