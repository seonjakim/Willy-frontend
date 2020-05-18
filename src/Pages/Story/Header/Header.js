import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <HeaderWrapper>
      <Contents>
        <Title>필리 스토리</Title>
        <Description></Description>
      </Contents>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.div`
  height: 670px;
  background-image: url(https://img.pilly.kr/story/v1/cover2-pc@2x.jpg);
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: cover;
`;

const Contents = styled.div`
  position: relative;
  padding: 265px 52px 0 52px;
  width: 1150px;
  margin: 0 auto;
  color: #000;
`;

const Title = styled.p`
  font-size: 41px;
  line-height: 46px;
  letter-spacing: -0.4px;
  font-weight: 700;
`;

const Description = styled.p`
  margin-top: 27px;
  font-size: 16px;
  line-height: 25px;
  letter-spacing: -0.4px;
`;
