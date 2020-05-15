import React, { useState } from "react";
import styled, { css } from "styled-components";

import Recommendations from "./Recommendations/Recommendations";
import ButtonCart from "./ButtonCart/ButtonCart";

function Result() {
  const [click, setClick] = useState(false);

  return (
    <ResultWrapper>
      {/* ResultTop */}
      <ResultTop bad>
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
      </ResultTop>
      {/* ResultBox */}
      <ResultBox>
        <ResultBoxWrapper>
          <Lists>
            <List>
              나이<Value>10세</Value>
            </List>
            <List>
              성별<Value>남</Value>
            </List>
            <List onClick={() => setClick(!click)}>
              BMI
              <Info />
              <Value>71.11</Value>
            </List>
          </Lists>
        </ResultBoxWrapper>
      </ResultBox>
      {/* ResultContent */}
      <ResultContent>
        <ContentTitle>
          <BmiLayer click={click}>
            <BmiTitle>BMI</BmiTitle>
            <BmiClose onClick={() => setClick(!click)} />
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
        {/* 영양성분 추천 컴포넌트 */}
        <Recommendations recommendations={""} />
      </ResultContent>
      {/* 장바구니 담기 버튼  */}
      <ButtonCart />
    </ResultWrapper>
  );
}

export default Result;

const MAX_WIDTH = "1008px";

const ResultWrapper = styled.div`
  position: relative;
  min-height: 100%;
  padding-bottom: 60px;
  background-color: #fafafa;
`;

const ResultTop = styled.section`
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

//inner CSS
const inner = css`
  margin: 0 auto;
  max-width: ${MAX_WIDTH};
`;

// ResultBox
const ResultBox = styled.section`
  ${inner}
  margin: -75px auto 0;
  width: 90%;
`;

const ResultBoxWrapper = styled.div`
  margin-top: 40px;
  padding: 0 19px;
  background-color: #fff;
  box-shadow: 0px 5px 4px 0px rgba(0, 0, 0, 0.06);
  border-radius: 6px;
`;

const Lists = styled.ul`
  display: table;
  padding: 20px 0;
  height: 30px;
  width: 100%;
`;

const Value = styled.span`
  display: inline-block;
  margin-left: 7px;
  font-size: 16px;
  font-weight: 400;
`;

const List = styled.li`
  display: table-cell;
  position: relative;
  padding: 8px 0;
  vertical-align: middle;
  font-size: 14px;
  font-weight: 700;
  color: #333;
  width: 30%;
  text-align: center;

  &:last-child {
    width: 40%;
    cursor: pointer;

    ${Value} {
      margin-left: 30px;
    }
  }
`;

const Info = styled.span`
  display: inline-block;
  position: absolute;
  top: 7px;
  margin-left: 3px;
  width: 22px;
  height: 22px;
  background-image: url("https://pilly.kr/images/icons/survey/result/icon-bmiinfo@2x.png");
  background-size: 22px 22px;
  background-repeat: no-repeat;
  background-position: 50% 50%;
`;

// ResultContent

const ResultContent = styled.section`
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
