import React from "react";
import styled from "styled-components";

function DetailButton(props) {
  return (
    <Body onClick={props.onClick} state={props.state}>
      <button>
        <span>장바구니 담기</span>
      </button>
    </Body>
  );
}

export default DetailButton;

const Body = styled.div`
  width: 232px;
  line-height: 58px;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  height: 60px;
  margin: 29px auto 0 auto;
  background-color: #e26d59;
  box-shadow: 0 5px 4px 0 rgba(0, 0, 0, 0.15);
  span {
    font-weight: bold;
    font-size: 16px;
    color: white;
  }
`;
