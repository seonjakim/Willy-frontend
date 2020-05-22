import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { HO_URL, JIN_URL } from "../../../../Constants";

function ButtonCart({ products, history }) {
  const [time, setTime] = useState(500);
  const [click, setClick] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setTime(time - 1);
    }, 1000);
  });

  const postItemsToCart = () => {
    products.map((product) =>
      fetch(`${HO_URL}/order/cart`, {
        method: "POST",
        headers: {
          Authorization: localStorage.getItem("token"),
        },
        body: JSON.stringify({ product_id: product }),
      })
    );
  };

  const secondsToTime = (time) => {
    let hours = Math.floor(time / 3600);
    let minutes = Math.floor((time - hours * 3600) / 60);
    let seconds = time - hours * 3600 - minutes * 60;

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    return hours + ":" + minutes + ":" + seconds;
  };

  return (
    <ButtonCartWrapper>
      {/* 설명 창 */}
      {time > 0 && click ? (
        <PointLayer>
          <Header>
            <CloseButton onClick={() => setClick(!click)} />
          </Header>
          <ContentWrapper>
            <Icon />
            <Content>
              지금 첫 정기구독 신청하면,
              <br />
              지원금
              <Bold> 3,000포인트 </Bold>
              제공
            </Content>
          </ContentWrapper>
          <Footer>
            지원금 소멸까지
            <Time> {secondsToTime(time)} </Time>
            남음
          </Footer>
        </PointLayer>
      ) : (
        ""
      )}
      {/* 버튼 */}
      <Button
        onClick={() => {
          postItemsToCart();
          history.push("/cart");
        }}
      >
        추천 영양성분 장바구니 담기
      </Button>
    </ButtonCartWrapper>
  );
}

export default ButtonCart;

const MAX_WIDTH = "1008px";

//inner CSS
const inner = css`
  margin: 0 auto;
  max-width: ${MAX_WIDTH};
`;

const ButtonCartWrapper = styled.section`
  ${inner}
  position: fixed;
  left: 25px;
  right: 25px;
  bottom: 25px;
  text-align: center;
`;

const PointLayer = styled.div`
  display: block;
  position: relative;
  left: 0;
  right: 0;
  margin: auto;
  width: 300px;
  height: 135px;
  text-align: left;
  background-image: url("https://pilly.kr/images/survey/bg-tip-layer.png");
  background-size: 300px 135px;
  background-repeat: no-repeat;
  background-position: 50% 50%;
`;

const Header = styled.div``;

const CloseButton = styled.button`
  position: absolute;
  right: 30px;
  top: 20px;
  width: 20px;
  height: 20px;
  background-image: url("https://pilly.kr/images/btn-list-delete.png");
  background-size: 12px;
  background-repeat: no-repeat;
  background-position: 50% 50%;
`;

const ContentWrapper = styled.div`
  font-size: 15px;
  font-weight: 300;
  color: #333;
`;

const Icon = styled.span`
  display: inline-block;
  position: absolute;
  top: 17px;
  left: 20px;
  width: 40px;
  height: 40px;
  background-image: url("https://pilly.kr/images/icons/survey/result/icon-coin@2x.png");
  background-size: 40px;
  background-repeat: no-repeat;
  background-position: 50% 50%;
`;

const Content = styled.p`
  position: absolute;
  top: 20px;
  left: 65px;
`;

const Bold = styled.span`
  font-weight: 700;
`;

const Footer = styled.div`
  position: absolute;
  top: 76px;
  left: 60px;
  font-size: 12px;
  font-weight: 400;
  color: #999;
`;

const Time = styled.span`
  font-size: 16px;
  font-weight: 700;
  color: #ff4741;
`;

// 버튼

const Button = styled.button`
  display: inline-block;
  padding: 0 36px;
  max-width: 300px;
  min-width: 74px;
  width: 100%;
  height: 50px;
  line-height: 50px;
  font-size: 16px;
  font-weight: 700;
  color: #fff;
  text-align: center;
  vertical-align: middle;
  border-radius: 25px;
  background-color: #e26d59;
`;
