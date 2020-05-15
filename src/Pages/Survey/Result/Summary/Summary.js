import React from "react";
import styled, { css } from "styled-components";

const Summary = (props) => {
  return (
    <SummaryWrapper>
      <ContentTitle>
        <BmiLayer click={props.click}>
          <BmiTitle>BMI</BmiTitle>
          <BmiClose onClick={() => props.setClick((click) => !click)} />
          <BmiDescription>
            비만도를 나타내는 지수로 체중과 키의 관계를
            <br />
            이용하여 간접적으로 계산하여 평가를 합니다.
            <br />
            (몸무게를 키의 제곱으로 나눈 값)
            <br />
            <br />
            - 저체중: ~ 18.5
            <br />
            - 정상 체중: 18.5 ~ 24.9
            <br />
            - 비만: 25.0 ~ 29.9
            <br />- 고도비만: 30.0
          </BmiDescription>
        </BmiLayer>
        <ContentDescription>
          <Bold>{"칙촉"}</Bold>
          님의 BMI(체질량 지수)는
          <Bold>{" 비만 "}</Bold>
          범위에 있습니다.
          <Advice>
            140cm의 키에 해당하는 정상 체중 범위는 36kg ~ 45kg 입니다.
            <br />
            전문의와 상담도 고려해 보세요.
          </Advice>
        </ContentDescription>
      </ContentTitle>
    </SummaryWrapper>
  );
};

export default Summary;

const MAX_WIDTH = "1008px";

//inner CSS
const inner = css`
  margin: 0 auto;
  max-width: ${MAX_WIDTH};
`;

const SummaryWrapper = styled.section`
  padding: 0 26px;
  background-color: #fafafa;
`;

const ContentTitle = styled.div`
  ${inner}
  height: auto;
  /* height: 52px; */
  position: relative;
  margin-top: 41px;
  padding: 0 30px;
`;

const ContentHeader = styled.p`
  padding-bottom: 30px;
  font-size: 15px;
  line-height: 24px;
  color: #333;
  font-weight: 400;
`;

const BmiLayer = styled.div`
  display: ${(props) => (props.click ? "block" : "none")};
  position: absolute;
  top: -30px;
  right: 0;
  width: 353px;
  height: auto;
  padding: 25px 20px 28px 25px;
  background: #fff;
  border: 1px solid #dedede;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.06);
  z-index: 100;
`;

const BmiTitle = styled.p`
  font-size: 16px;
  line-height: 24px;
  color: #333;
  font-weight: 700;
`;

const BmiClose = styled.button`
  position: absolute;
  right: 21px;
  top: 28px;
  width: 20px;
  height: 20px;
  padding: 0 4px;
  background-image: url("https://pilly.kr/images/btn-list-delete.png");
  background-size: 12px;
  background-repeat: no-repeat;
  background-position: 50% 50%;
`;

const BmiDescription = styled.p`
  margin-top: 20px;
  font-size: 14px;
  line-height: 22px;
  color: #333;
`;

const ContentDescription = styled.h4`
  float: left;
  padding-bottom: 30px;
  font-size: 17px;
  line-height: 30px;
  color: #333;
  font-weight: 400;
`;

const Bold = styled.b`
  font-weight: 700;
`;

const Advice = styled.p`
  font-size: 16px;
`;
