import React from "react";
import styled from "styled-components";

function BascketButton(props) {
  return (
    <Body onClick={props.onClick} state={props.state}>
      <button>
        <Inner>
          <Img
            src={
              props.state !== ""
                ? ""
                : "https://pilly.kr/images/icons/icon-plus.png"
            }
            alt=""
          />
          <Span onClick={props.onClick} state={props.state} id={props.id}>
            {props.state !== "" ? "장바구니 추가됨" : "장바구니 담기"}
          </Span>
        </Inner>
      </button>
    </Body>
  );
}

export default BascketButton;

//style

const Body = styled.div`
  width: 295px;
  line-height: 58px;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  height: 60px;
  margin: 29px auto 0 auto;

  background-color: ${(state) =>
    state.state !== "" ? `${state.theme.backgroundColor}` : "white"};
  box-shadow: ${(state) =>
    state.state !== ""
      ? `${state.theme.boxShadow}`
      : "0 5px 4px 0 rgba(0, 0, 0, 0.15)"};
  border: ${(state) => (state.state !== "" ? `${state.theme.border}` : "0")};
`;

Body.defaultProps = {
  theme: {
    backgroundColor: "#ddd",
    boxShadow: "none",
    border: "1px solid #ccc",
  },
};

const Img = styled.img`
  margin-right: 10px;
`;

const Inner = styled.div``;

const Span = styled.span`
  font-weight: bold;
  font-size: 16px;
  color: ${(state) =>
    state.state !== "" ? `${state.theme.color}` : "#707070"};
`;

Span.defaultProps = {
  theme: {
    color: "white",
  },
};
