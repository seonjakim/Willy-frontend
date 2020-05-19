import React from "react";
import styled from "styled-components";

import logo_pilly from "../../../../Images/logo_pilly.png";

function SurveyEnd(props) {
  // const { handleClickPlus } = props;
  return (
    <SurveyEndWrapper>
      <EndHeader>
        <IconPilly /> {/* 원형 circle */}
        <Title>
          <p>답변 내용을</p>
          <p>분석하고 있습니다.</p>
        </Title>
      </EndHeader>
      <EndIntro>
        <Description>
          <p>
            필리는 전문가가 참여한
            <br />
            과학적 알고리즘을 통해 결과를 제공합니다.
            <br />
            <br />
            <span>잠시만 기다려 주십시오.</span>
          </p>
        </Description>
        {/* <ButtonStart onClick={handleClickPlus}>시작하기</ButtonStart>
        <Warning>
          ※ 질병의 진단 및 치료는 전문적인 의료기관을 이용하세요.
        </Warning> */}
      </EndIntro>
    </SurveyEndWrapper>
  );
}

export default SurveyEnd;

const SurveyEndWrapper = styled.div`
  width: 100%;
`;

const EndHeader = styled.div`
  position: relative;
  margin: auto;
  width: 418px;
  height: 286px;
`;

const IconPilly = styled.span`
  display: inline-block;
  margin-top: 60px;
  width: 60px;
  height: 60px;
  background-image: url(${logo_pilly});
  background-size: 60px;
  background-repeat: no-repeat;
  background-position: 50% 50%;
`;

const Title = styled.div`
  margin-top: 32px;
  > * {
    font-size: 30px;
    line-height: 40px;
    font-weight: 700;

    &:first-child {
      font-weight: 300;
    }
  }
`;

const EndIntro = styled.div`
  position: relative;
  margin: auto;
  width: 418px;
`;

const Description = styled.div`
  > p {
    line-height: 24px;
    font-size: 16px;
    color: #333;

    span {
      font-size: 13px;
      color: #848484;
    }
  }
`;

const ButtonStart = styled.button`
  display: inline-block;
  margin-top: 120px;
  padding: 0 36px;
  width: 418px;
  height: 50px;
  line-height: 50px;
  background-color: #333;
  border: none;
  border-radius: 25px;
  vertical-align: middle;
  text-align: center;
  font-weight: 700;
  color: #fff;
`;

const Warning = styled.p`
  margin-top: 28px;
  font-size: 13px;
  line-height: 24px;
  color: #848484;
`;
