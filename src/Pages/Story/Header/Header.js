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
  height: 590px;
  background-image: url(https://img.pilly.kr/story/v1/cover2-pc@2x.jpg);
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: cover;
`;

const Contents = styled.div`
  position: relative;
  padding: 236px 50px 0 50px;
  width: 1024px;
  margin: 0 auto;
  color: #000;
`;

const Title = styled.p`
  font-size: 36px;
  line-height: 42px;
  letter-spacing: -0.4px;
  font-weight: 700;
`;

const Description = styled.p`
  margin-top: 27px;
  font-size: 16px;
  line-height: 25px;
  letter-spacing: -0.4px;
`;
