import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import MainButton from "../../../Component/MainButtonComponent/MainButtonComponent";

function MainPage1(props) {
  const [count, setCount] = useState(285039);
  const [datas, setData] = useState([]);
  /*
    useEffect(()=>{
      const numScroller = setInterval(()=>{
        setCount(count=>count+100)
        if(count === 295839)
        return ()=>clearInterval(numScroller)
    })})

    setCount 안에 있는 count는 처음 useEffect가 넘겨 주었던 함수 내에 있는 count고 if문 안에 있는 count는 초기값 count이기 때문에 clearInterval이
    실행되지 않는다.
  */
  useEffect(() => {
    setInterval(() => {
      setCount((count) => (count <= 295839 ? count + 100 : count));
    }, 10);
  }, []);

  useEffect(() => {
    setData(props.datas);
  }, [props.datas]);

  return (
    <Main>
      <Body>
        {datas.length >= 1 ? (
          <>
            <Subject>
              {datas[0].title.slice(0, 8)}
              <br />
              {datas[0].title.slice(8, datas[0].title.length)}
            </Subject>
            <Text>
              {datas[0].content}
              <br />
              이미 <Span>{count.toLocaleString()}</Span>명이 추천받았습니다.
            </Text>
          </>
        ) : (
          ""
        )}
        <MainButton />
      </Body>
    </Main>
  );
}

export default MainPage1;

//style
const Main = styled.div`
  box-sizing: border-box;
`;

const Body = styled.div`
  background: url(https://img.pilly.kr/main/v201911/cover-pc.jpg) 50% 50%
    no-repeat;
  background-size: cover;
  width: 100%;
  height: 937px;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const fontStyle = css`
  letter-spacing: -1px;
  line-height: 1.25;
`;

const Subject = styled.span`
  font-size: 74px;
  font-weight: bold;
  margin: 0 0 0 50px;
  color: #333;
  ${fontStyle}
`;

const Span = styled.span`
  font-weight: bold;
`;

const Text = styled.span`
  font-size: 26px;
  margin: 41px 0 0 50px;
  ${fontStyle}
`;
