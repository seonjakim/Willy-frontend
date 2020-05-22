import React, { useState, useEffect } from "react";
import styled from "styled-components";

import MyPilly from "../../MyPilly/MyPilly";
import ShoppingCart from "../ShoppingCart";

// import { connect } from "./react-redux";
// import { addCart } from "../../store/actions";

// 역할에 따른 코드 분리

// 정보를 기억만 하는 코드
// const limits = [
//   { id: 2, value: 2 },
//   { id: 3, value: 1 },
//   { id: 4, value: 3 },
//   { id: 5, value: 1 },
//   { id: 6, value: 1 },
//   { id: 7, value: 3 },
// ];

// 저장된 곳에서 필요한 애를 찾기만 하는 코드
// const getLimit = (product_id) => limits.filter((e) => e.id === product_id)[0];

function SubscribeItems(props) {
  // const [warning, setWarning] = useState(false);
  // const [pillData, setPillData] = useState(true);
  // const [price, setPrice] = useState([]);

  // 판단만 하는 코드
  // const limit = getLimit(props.pill.product_id).value;
  // if (num > limit) {
  //   setWarning(!warning);
  // }
  // if (props.pill.product_id === 2 && props.pill.quantity >= 3) {
  //   setWarning(true);
  // } else if (props.pill.product_id === 3 && props.pill.quantity >= 2) {
  //   setWarning(true);
  // } else if (props.pill.product_id === 4 && props.pill.quantity >= 4) {
  //   setWarning(true);
  // } else if (props.pill.product_id === 5 && props.pill.quantity >= 2) {
  //   setWarning(true);
  // } else if (props.pill.product_id === 6 && props.pill.quantity >= 2) {
  //   setWarning(true);
  // } else if (props.pill.product_id === 7 && props.pill.quantity >= 4) {
  //   setWarning(true);
  // }

  // console.log("props", props.pill);
  return (
    <Body>
      <Wrappers>
        {props.pill && (
          <>
            <InputWrapper>
              <Input />
            </InputWrapper>
            <ImgWrapper>
              <SuppleImg src={props.pill.image} />
            </ImgWrapper>
            <SideWrapper>
              <SuppleTitle>
                <SpanTitle>{props.pill.name}</SpanTitle>
              </SuppleTitle>
              <Buttons
                onClick={() => props.minusTheNumber(props.pill.product_id)}
              >
                <Img src="https://pilly.kr/images/icons/cart/icon-cart-minus.png" />
              </Buttons>
              <NumCount>{props.pill.quantity}</NumCount>
              <PlusBtn
                onClick={() =>
                  props.pill.quantity >= 5
                    ? alert("개수를 초과하였습니다")
                    : props.plusTheNumber(props.pill.product_id)
                }
              >
                <Img src="https://pilly.kr/images/icons/cart/icon-cart-plus.png" />
              </PlusBtn>
            </SideWrapper>
            <Price>
              <ActualPrice>{props.pill.price}원</ActualPrice>
            </Price>
          </>
        )}
      </Wrappers>
      {props.warning ? (
        ""
      ) : (
        <DivHiddenWarning>
          <RedWarning>
            ※ 보건복지부의 영양성분 섭취기준을 초과할 수 있으니 주의하세요
          </RedWarning>
        </DivHiddenWarning>
      )}
    </Body>
  );
}

export default SubscribeItems;

const Body = styled.div``;

const Wrappers = styled.div`
  height: 131px;
  padding: 20px 0;
  font-size: 14px;
  color: #000000;
  border-top: 1px solid #dddddd;
  display: flex;
  flex-direction: row;
  position: relative;
`;

const InputWrapper = styled.div`
  width: 48px;
  padding: 31px 0;
`;

const Input = styled.input`
  width: 24px;
  height: 24px;
`;

const ImgWrapper = styled.div`
  width: 90px;
  height: 90px;
  background-color: #eae9e9;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 20px 0 0;
`;

const SuppleImg = styled.img`
  width: 65%;
`;

const SideWrapper = styled.div`
  width: 660px;

  height: 100%;
  position: relative;
`;

const SuppleTitle = styled.div`
  color: #000000;
`;

const SpanTitle = styled.span`
  border-bottom: 1px solid #000000;
  font-size: 17px;
  padding-bottom: 1.5px;
  font-weight: 550;
`;

const Buttons = styled.button`
  width: 40px;
  height: 40px;
  box-shadow: 2px 2px 0 0 rgba(0, 0, 0, 0.06);
  background: #fff;
  border: 1px solid #dfdfdf;
  font-size: 30px;
  position: absolute;
  bottom: 0;
`;

const Img = styled.img`
  padding-bottom: 5px;
`;

const PlusBtn = styled(Buttons)`
  left: 80px;
`;

const NumCount = styled.div`
  width: 40px;
  height: 40px;
  position: absolute;
  bottom: 0;
  left: 40px;
  font-size: 18px;
  color: #000000;
  font-weight: bold;
  text-align: center;
  padding-top: 8.5px;
`;

const Price = styled.div`
  font-size: 18px;
  color: #000000;
  font-weight: 600;
  padding: 42px 0 0 0;
  position: absolute;
  right: 0;
`;

const ActualPrice = styled.span``;

const DivHiddenWarning = styled.div`
  width: 100%;
  text-align: right;
  padding-bottom: 10px;
`;

const RedWarning = styled.span`
  font-size: 14px;
  color: #e26d59;
  letter-spacing: -1.4px;
`;
