import React from "react";
import styled from "styled-components";

function BascketButton() {
  return (
    <Body>
      <button>
        <Inner>
          <Img src="https://pilly.kr/images/icons/icon-plus.png" alt="" />
          <span>장바구니 담기</span>
        </Inner>
      </button>
    </Body>
  );
}

export default BascketButton;

//style

const Body = styled.div`
  width: 295px;
  border: 0;
  background-color: white;
  line-height: 58px;
  border-radius: 30px;
  box-shadow: 0 5px 4px 0 rgba(0, 0, 0, 0.15);
  display: flex;
  justify-content: center;
  height: 60px;
  margin: 29px auto 0 auto;
`;

const Img = styled.img`
  margin-right: 10px;
`;

const Inner = styled.div`
  span {
    font-weight: bold;
    font-size: 16px;
    color: #707070;
  }
`;
