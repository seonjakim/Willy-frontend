import React, { useState, useEffect } from "react";
import styled from "styled-components";
import SubscribeItems from "./SubscribeItems";
import { Body, HashtagSpan, ThickLetter, GrayBtn } from "./BuyOnceTop";

export default function CartTop(props) {
  // const ArrFilterTrue = props.supplement.map((pill,idx)=>{})
  const data = props.supplement;

  const ShowSuppleCard = data.map((pill, idx) => (
    <>
      {/* <Title>
        {pill.type === true && idx === 0 ? "정기구독 제품" : ""}
        {pill.type === false && idx === 0 ? "1회 구매 제품" : ""}
      </Title> */}
      <SubscribeItems
        type={pill.type}
        plusTheNumber={(num) => props.plusTheNumber(num)}
        minusTheNumber={(num) => props.minusTheNumber(num)}
        key={idx}
        pill={pill}
        warning={props}
      />
    </>
  ));

  console.log("props", data);
  return (
    <Wrapper>
      {data.some((el) => el.type) && <Title>정기구독 제품</Title>}

      {data
        .filter((el) => el.type && el)
        .map((pill, idx) => (
          <>
            <SubscribeItems
              type={pill.type}
              plusTheNumber={(num) => props.plusTheNumber(num)}
              minusTheNumber={(num) => props.minusTheNumber(num)}
              key={idx}
              pill={pill}
              warning={props}
            />
          </>
        ))}
      {data.some((el) => !el.type) && <Title>일회구매 제품</Title>}

      {data
        .filter((el) => !el.type && el)
        .map((pill, idx) => (
          <>
            <SubscribeItems
              type={pill.type}
              plusTheNumber={(num) => props.plusTheNumber(num)}
              minusTheNumber={(num) => props.minusTheNumber(num)}
              key={idx}
              pill={pill}
              warning={props}
            />
          </>
        ))}
    </Wrapper>
  );
}

const Wrapper = styled.div``;

export const Title = styled.h3`
  padding: 20px 0;
  margin: 20px 0 0 0;
  font-size: 20px;
  font-weight: 700;
`;

const CartSpace = styled.div``;
