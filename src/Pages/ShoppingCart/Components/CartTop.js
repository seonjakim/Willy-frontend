import React, { useState, useEffect } from "react";
import styled from "styled-components";
import SubscribeItems from "./SubscribeItems";
import { Body, HashtagSpan, ThickLetter, GrayBtn } from "./BuyOnceTop";

export default function CartTop(props) {
  const data = props.supplement;

  return (
    <Wrapper>
      {data.length >= 1 ? (
        <>
          {data.some((el) => el.type) && <Title>정기구독 제품</Title>}
          {console.log(
            "filter",
            data.filter((el) => el.type && el)
          )}

          {data
            .filter((el) => el.type && el)
            .map((pill, idx) => (
              <>
                <SubscribeItems
                  type={pill.type}
                  plusTheNumber={(num) => props.plusTheNumber(num)}
                  minusTheNumber={(num) => props.minusTheNumber(num)}
                  getData={(num) => props.getData(num)}
                  key={idx}
                  pill={pill}
                />
              </>
            ))}
          {data.some((el) => !el.type) && <Title>1회구매 제품</Title>}

          {data
            .filter((el) => !el.type && el)
            .map((pill, idx) => (
              <>
                <SubscribeItems
                  type={pill.type}
                  plusTheNumber={(num) => props.plusTheNumber(num)}
                  minusTheNumber={(num) => props.minusTheNumber(num)}
                  getData={(num) => props.getData(num)}
                  key={idx}
                  pill={pill}
                />
              </>
            ))}
        </>
      ) : (
        ""
      )}
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
