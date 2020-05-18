import React, { useState } from "react";
import styled, { css } from "styled-components";

const Banner = () => {
  return (
    <BannerWrapper bad>
      <Inner>
        <Title>
          <Head>
            <Name>{"칙촉"}</Name>님의
            <br />
            건강 설문 결과표
          </Head>
          <Appendix>※ 본 결과는 의사의 처방을 대신하지 않습니다.</Appendix>
        </Title>
        <Hrsplit />
        <Content>
          <Summary>생활습관 개선이 필요해요.</Summary>
          <Prescriptions>
            <Prescription>
              체내 에너지 생성으로 활력 유지와 스트레스 관리가 필요해요.
            </Prescription>
            <Prescription>
              뼈 건강 그리고 신경 및 근육 기능 관리가 필요해요.
            </Prescription>
          </Prescriptions>
        </Content>
      </Inner>
    </BannerWrapper>
  );
};

export default Banner;

const MAX_WIDTH = "1008px";

const BannerWrapper = styled.section`
  background-size: cover;
  background-image: ${(props) =>
    props.bad
      ? "linear-gradient(to bottom right, #ef3810, #fd7e48)"
      : "linear-gradient(to bottom right, #2e469b, #4398a1)"};
`;

const Inner = styled.div`
  padding: 120px 30px 70px 30px;
  margin: 0 auto;
  max-width: ${MAX_WIDTH};
`;

const Title = styled.div``;

const Head = styled.p`
  font-size: 40px;
  line-height: 45px;
  color: #fff;
  font-weight: 400;
`;

const Name = styled.span`
  font-weight: 700;
`;

const Appendix = styled.p`
  margin-top: 7px;
  margin-left: 3px;
  font-size: 13px;
  letter-spacing: 0.3px;
  line-height: 18px;
  color: #ededed;
`;

const Hrsplit = styled.div`
  content: "";
  margin-top: 31px;
  width: 23px;
  height: 4px;
  background-color: #fff;
`;

const Summary = styled.p``;

const Prescriptions = styled.ul``;

const Prescription = styled.li``;

const Content = styled.div`
  margin-top: 30px;

  ${Summary} {
    font-size: 22px;
    line-height: 37px;
    color: #fff;
    font-weight: 700;
  }

  ${Prescriptions} {
    margin-top: 10px;

    ${Prescription} {
      position: relative;
      font-size: 15px;
      line-height: 26px;
      color: #fff;
      padding-left: 14px;

      &::after {
        content: "";
        display: block;
        position: absolute;
        top: 11px;
        left: 0%;
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background-color: #fff;
      }
    }
  }
`;
