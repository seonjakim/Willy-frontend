import React, { useState, useEffect } from "react";
import styled from "styled-components";

function MainPage3(props) {
  const [datas, setData] = useState([""]);

  useEffect(() => {
    setData(props.datas);
  }, [props.datas]);
  return (
    <Main>
      <Body>
        <Span>이젠 쉬워요.</Span>
        <Content>
          {datas.length > 1
            ? datas.slice(0, 3).map((data, idx) => {
                return (
                  <Box key={idx}>
                    <Img src={data.image_url} alt="" />
                    <Num>{data.title.slice(0, 2)}</Num>
                    <BoldText>{data.title.slice(3, 7)}</BoldText>
                    <SubText>{data.content}</SubText>
                  </Box>
                );
              })
            : ""}
        </Content>
        {datas.length > 1 ? (
          <>
            <Img2 src={datas[3].image_url} alt="" />
            <Img2Text>{datas[3].content}</Img2Text>
            <Img3 src={datas[4].image_url} alt="" />
            <Img3Text>{datas[4].content}</Img3Text>
          </>
        ) : (
          ""
        )}
      </Body>
    </Main>
  );
}

export default MainPage3;

//style
const Main = styled.div`
  display: flex;
  justify-content: center;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
  width: 1024px;
`;

const Content = styled.div`
  display: flex;
  margin-top: 110px;
  width: 1000px;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  width: 367px;
`;

const Img = styled.img`
  width: 80px;
  height: 80px;
  align-self: center;
`;

const Span = styled.span`
  font-size: 19px;
  font-weight: bold;
`;

const Num = styled.p`
  display: flex;
  justify-content: center;
  font-size: 24px;
  font-weight: bold;
  margin-top: 15px;
  color: #333;
`;

const BoldText = styled.p`
  display: flex;
  justify-content: center;
  margin-top: 10px;
  font-weight: 700;
  font-size: 48px;
  margin-top: 10px;
  color: #333;
`;

const SubText = styled.span`
  display: flex;
  text-align: center;
  margin-top: 10px;
  font-size: 24px;
  width: 300px;
  align-self: center;
  color: #333;
`;

const Img2 = styled.img`
  margin-top: 100px;
  width: 980px;
`;

const Img2Text = styled.p`
  margin-top: 40px;
  font-size: 24px;
  width: 980px;
`;

const Img3 = styled.img`
  margin-top: 130px;
  width: 980px;
`;

const Img3Text = styled(Img2Text)`
  margin-bottom: 130px;
`;
