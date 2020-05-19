import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";

function MainPage7(props) {
  const [subscribe, setSubscribe] = useState([]);

  useEffect(() => {
    setSubscribe(props.datas);
  }, [props.datas]);

  return (
    <Main>
      {subscribe.length > 1 ? (
        <>
          <Img src={subscribe[0].image_url} alt="" />
          <Text>{subscribe[0].content}</Text>
          <Card>
            <Discount>
              <CardImg1 src={subscribe[1].image_url.slice(0, 50)} />
              <CardIcon1
                src={subscribe[1].image_url.slice(
                  51,
                  subscribe[1].image_url.length
                )}
              />
              <BoldText1>{subscribe[1].title}</BoldText1>
              <SubText1>{subscribe[1].content}</SubText1>
            </Discount>
            <Delivery>
              <CardImg2 src={subscribe[2].image_url.slice(0, 50)} />
              <CardIcon2
                src={subscribe[2].image_url.slice(
                  51,
                  subscribe[2].image_url.length
                )}
              />
              <BoldText2>{subscribe[2].title}</BoldText2>
              <SubText2>{subscribe[2].content}</SubText2>
            </Delivery>
          </Card>
        </>
      ) : (
        ""
      )}
    </Main>
  );
}

export default MainPage7;

//styled
const Main = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #faebd6;
  padding-bottom: 100px;
`;

const Img = styled.img`
  align-self: center;
  width: 516px;
  margin-top: 60px;
`;

const Text = styled.p`
  align-self: center;
  font-size: 19px;
  font-weight: bold;
  margin-top: 70px;
`;

const Card = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 60px;
`;

const Discount = styled.div`
  position: relative;
`;

const cardImgStyle = css`
  margin: 0 10px;
  width: 400px;
`;

const CardImg1 = styled.img`
  ${cardImgStyle}
`;

const cardIconStyle = css`
  position: absolute;
  right: 175px;
  top: 40px;
`;

const CardIcon1 = styled.img`
  ${cardIconStyle}
`;

const boldTextStyle = css`
  position: absolute;
  top: 120px;
  left: 55px;
  font-size: 48px;
  font-weight: bold;
  color: #333333;
`;

const BoldText1 = styled.p`
  ${boldTextStyle}
`;

const subTextStyle = css`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  width: 400px;
  margin: 0 10px;
`;

const SubText1 = styled.p`
  ${subTextStyle}
`;

const Delivery = styled.div`
  position: relative;
`;

const CardImg2 = styled.img`
  ${cardImgStyle}
`;

const CardIcon2 = styled.img`
  ${cardIconStyle}
`;

const BoldText2 = styled.p`
  ${boldTextStyle}
`;

const SubText2 = styled.p`
  ${subTextStyle}
`;
