import React from "react";
import styled from "styled-components";
import SubscribeItems from "./SubscribeItems";

import { Title } from "./CartTop";
import {
  Wrapper,
  InnerWrapper,
  Table,
  TableLeft,
  TableRight,
} from "./CartMiddle";

import {
  Button,
  ButtonArea,
  BiggerTableLeft,
  BiggerTableRight,
} from "./CartBttm";

export default function BuyOnceTop() {
  return (
    <>
      <OnceWrapper>
        <Body>
          <HashtagSpan>#무료배송#건강설문할인10%</HashtagSpan>
          <ThickLetter>건강설문으로 나만의 영양성분을 찾아보세요.</ThickLetter>
          <GrayBtn>맞춤 영양성분 찾기</GrayBtn>
        </Body>
        <Title>1회 구매 제품</Title>
        <SubscribeItems />
      </OnceWrapper>
      <Wrapper>
        <InnerWrapper>
          <Table>
            <TableLeft>1회구매 제품합계</TableLeft>
            <TableRight>13800원</TableRight>
            <TableLeft>배송비</TableLeft>
            <TableRight>2,500원</TableRight>
          </Table>
        </InnerWrapper>
      </Wrapper>
      <OnceWrapper>
        <Table>
          <BiggerTableLeft>총 결제금액</BiggerTableLeft>
          <BiggerTableRight>13,800원</BiggerTableRight>
        </Table>
        <ButtonArea>
          <Button>구매하기</Button>
        </ButtonArea>
      </OnceWrapper>
    </>
  );
}
const backImg = "https://img.pilly.kr/cart/v202003/cart-survey-banner.png";

const OnceWrapper = styled.div`
  width: 1024px;
  margin: 0 auto;
  padding: 0 50px;
`;

export const Body = styled.div`
  width: 100%;
  height: 182px;
  background-image: url(${backImg});
  background-size: 100%;
  margin: 35px 0 40px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  letter-spacing: -1.5px;
`;

export const HashtagSpan = styled.span`
  font-size: 18px;
  color: #000000;
`;

export const ThickLetter = styled.div`
  font-size: 16px;
  color: #000000;
  font-weight: bold;
  margin-top: 16px;
`;

export const GrayBtn = styled.button`
  font-size: 14px;
  color: #000000;
  margin-top: 18px;
  width: 180.89px;
  height: 40px;
  background-color: #ffffff;
  box-shadow: 0 5px 4px 0 rgba(0, 0, 0, 0.15);
  border-radius: 20px;
  font-weight: bold;
  letter-spacing: -2px;
`;
