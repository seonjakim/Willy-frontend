import React from "react";
import styled from "styled-components";
import NavBar from "../../Component/NavBar/NavBar";
import ReviewLists from "./ReviewLists";

function Review(props) {
  return (
    <Body>
      <NavBar props={props} />
      <Header>
        <p>고객리뷰</p>
        <div>
          <span>필리를 이용해주신 고객님들의 리얼후기</span>
          <Green>1,430건</Green>
          <span>을 확인하세요!</span>
        </div>
      </Header>
      <ReviewLists props={props} />
    </Body>
  );
}

export default Review;

const Body = styled.div`
  background-color: #f2f2f2;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 100px;
  width: 920px;
  margin: 0 auto;
  p {
    margin-top: 20px;
    font-size: 24px;
  }

  div {
    display: flex;
    margin-top: 37px;
    font-size: 16px;
    color: #848484;
    span {
      font-weight: 400;
    }
  }
`;

const Green = styled.span`
  color: #6ad743;
  font-weight: 700;
`;
