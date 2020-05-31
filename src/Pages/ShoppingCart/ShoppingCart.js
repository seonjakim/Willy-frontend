import React, { useEffect, useState } from "react";
import styled from "styled-components";
import EmptyCart from "./Components/EmptyCart";
import SubscribeItems from "./Components/SubscribeItems";
import CartTop from "./Components/CartTop";
import CartMiddle from "./Components/CartMiddle";
import CartBttm from "./Components/CartBttm";
import { HO_URL } from "../../Constants";
import {
  Body,
  HashtagSpan,
  ThickLetter,
  GrayBtn,
} from "./Components/BuyOnceTop";
import { Link } from "react-router-dom";

import NavBar from "../../Component/NavBar/NavBar";

export default function ShoppingCart(props) {
  const cookieId = localStorage.getItem("token");

  const [allData, setNewSupple] = useState({
    supplement: [],
    amount: [],
    subscribe: [],
    disposable: [],
  });

  useEffect(() => {
    fetch(
      "http://localhost:3000/pillMock.json"
      // , {
      //   method: "GET",
      //   headers: {
      //     Authorization: cookieId,
      //   },
      // }
    )
      .then((res) => res.json())
      .then(
        (res) =>
          res.total_price &&
          setNewSupple({
            supplement: res.products,
            amount: res.total_price[0],
            subscribe: res.subscribe_total_price[0],
            disposable: res.disposable_total_price[0],
          })
      );
  }, []);
  console.log("data", allData);
  const getData = () => {
    console.log("getData executed");
    fetch(`${HO_URL}/order/cart`, {
      method: "GET",
      headers: {
        Authorization: cookieId,
      },
    })
      .then((res) => res.json())
      .then((res) =>
        setNewSupple({
          supplement: res.products,
          amount: res.total_price[0],
          subscribe: res.subscribe_total_price[0],
          disposable: res.disposable_total_price[0],
        })
      );
  };

  const plusTheNumber = (num) => {
    fetch(`${HO_URL}/order/cart`, {
      method: "POST",
      headers: {
        Authorization: cookieId,
      },
      body: JSON.stringify({
        product_id: num,
      }),
    }).then(() => getData());
  };

  const minusTheNumber = (num) => {
    fetch(`${HO_URL}/order/cart/remove/${num}`, {
      headers: {
        Authorization: cookieId,
      },
    }).then(() => getData());
  };

  const removeEverything = () => {
    fetch(`${HO_URL}/order/cart/remove`, {
      headers: {
        Authorization: cookieId,
      },
    }).then(() => getData());
  };

  const { supplement, amount, subscribe, disposable } = allData;

  return (
    <>
      <NavBar props={props} />
      <BodyWrapper>
        {supplement.length >= 1 ? (
          <>
            <InnerElements>
              <TitleLine>
                <Title>장바구니</Title>
                <TrashBtn onClick={removeEverything}>
                  <ForImg src="https://pilly.kr/images/icons/cart/icon-cart-trash.png" />
                </TrashBtn>
                <Link to="/product">
                  <FirstBtn onClick={getData}>
                    <ForImg src="https://pilly.kr/images/icons/cart/icon-cart-plus.png" />
                    제품추가
                  </FirstBtn>
                </Link>
              </TitleLine>
              {supplement.some((el) => el.type) ? (
                ""
              ) : (
                <Body>
                  <HashtagSpan>#무료배송#건강설문할인10%</HashtagSpan>
                  <ThickLetter>
                    건강설문으로 나만의 영양성분을 찾아보세요.
                  </ThickLetter>
                  <GrayBtn>맞춤 영양성분 찾기</GrayBtn>
                </Body>
              )}

              <CartTop
                supplement={supplement}
                plusTheNumber={(num) => plusTheNumber(num)}
                minusTheNumber={(num) => minusTheNumber(num)}
                getData={(num) => getData(num)}
              />
            </InnerElements>
            <CartMiddle
              supplement={supplement}
              subscribe={subscribe}
              disposable={disposable}
            />
            <CartBttm supplement={supplement} amount={amount} />
          </>
        ) : (
          <EmptyCart />
        )}
      </BodyWrapper>
    </>
  );
}

export const BodyWrapper = styled.div`
  margin: 120px 0 0;
  width: 100vw;
`;

export const InnerElements = styled.div`
  width: 1024px;
  margin: 0 auto;
  padding: 0 50px;
`;

export const TitleLine = styled.div`
  height: 42px;
`;

export const Title = styled.h2`
  font-size: 26px;
  color: #000000;
  font-weight: 400;
  float: left;
`;

const TwoGrayBtn = styled.button`
  color: #707070;
  background-color: transparent;
  font-size: 14px;
  height: 42px;
  border-radius: 20px;
  border: 1px solid #d7d7d7;
  float: right;
  margin: 0 7px;
`;

export const FirstBtn = styled(TwoGrayBtn)`
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
`;

export const TrashBtn = styled(TwoGrayBtn)`
  width: 42px;
  margin: 0 0 0 7px;
`;

const ForImg = styled.img``;
