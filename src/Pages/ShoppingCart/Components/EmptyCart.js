import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import {
  TitleLine,
  Title,
  TrashBtn,
  FirstBtn,
  InnerElements,
} from "../ShoppingCart";

export default function EmptyCart() {
  return (
    <BodyWrapper>
      <InnerElements>
        <TitleLine>
          <Title>장바구니</Title>
          <TrashBtn>
            <ForImg src="https://pilly.kr/images/icons/cart/icon-cart-trash.png" />
          </TrashBtn>
          <Link to="/product">
            <FirstBtn>
              <ForImg src="https://pilly.kr/images/icons/cart/icon-cart-plus.png" />
              제품추가
            </FirstBtn>
          </Link>
        </TitleLine>

        <EmptyLetters>
          <ForImg src="https://pilly.kr/images/cart/img-cart-empty.png" />
          <H3tag>장바구니에 추가된 제품이 없습니다.</H3tag>
          <InnerP>
            몇가지 건강 설문을 통해
            <br /> 나만을 위한 영양성분을 찾아보세요.
          </InnerP>
        </EmptyLetters>
        <Link to="/survey">
          <PillyBtnAgain>나만의 영양성분 찾기</PillyBtnAgain>
        </Link>
      </InnerElements>
    </BodyWrapper>
  );
}

const BodyWrapper = styled.div`
  position: relative;
`;

const EmptyLetters = styled.div`
  display: flex;
  align-items: center;
  margin: 170px 0 0 0;

  flex-direction: column;
`;

const ForImg = styled.img``;

const H3tag = styled.h3`
  font-size: 18px;
  font-weight: 700;
  margin-top: 18px;
`;

const InnerP = styled.p`
  font-size: 14px;
  margin: 24px 0 0 0;
  text-align: center;
`;

const PillyBtnAgain = styled.button`
  width: 209.05px;
  height: 50px;
  margin-top: 60px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  background-color: #e26d59;
  color: #ffffff;
  font: 16px Arial;
  font-weight: 600;
  box-shadow: 0 5px 4px 0 rgba(0, 0, 0, 0.15);
  border-radius: 30px;
`;
