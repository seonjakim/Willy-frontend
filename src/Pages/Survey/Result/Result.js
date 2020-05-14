import React from "react";
import styled from "styled-components";

function Result() {
  return (
    <ResultWrapper>
      <ResultTop bad>
        <Inner>
          <Title>
            <Head>
              {"칙촉"}님의
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
            </Prescriptions>
          </Content>
        </Inner>
      </ResultTop>
    </ResultWrapper>
  );
}

export default Result;

const ResultWrapper = styled.div`
  position: relative;
  min-height: 100%;
  padding-bottom: 60px;
`;

const ResultTop = styled.section`
  background-size: cover;
  background-image: ${(props) =>
    props.bad
      ? "-webkit-gradient(linear, left top, right bottom, from(#ef3810), to(#fd7e48))"
      : "-webkit-gradient(linear, left top, right bottom, from(#2e469b), to(#4398a1))"};
  background-image: ${(props) =>
    props.bad
      ? "linear-gradient(to bottom right, #ef3810, #fd7e48)"
      : "linear-gradient(to bottom right, #2e469b, #4398a1)"};
`;

const Inner = styled.div`
  padding: 120px 30px 70px 30px;
  margin: 0 auto;
  max-width: 908px;
`;

const Head = styled.p`
  /* font-size: 36px;
    line-height: 40px;
    color: #fff;
    font-weight: 400; */
`;

const Appendix = styled.p`
  /* margin-top: 5px;
    font-size: 12px;
    line-height: 18px; */
`;

const Title = styled.div`
  ${Head} {
    font-size: 36px;
    line-height: 40px;
    color: #fff;
    font-weight: 400;
  }
  ${Appendix} {
    margin-top: 5px;
    font-size: 12px;
    line-height: 18px;
    color: #ededed;
  }
`;

const Hrsplit = styled.div`
  content: "";
  margin-top: 31px;
  width: 20px;
  height: 3px;
  background-color: #fff;
`;

const Summary = styled.p``;

const Prescriptions = styled.ul``;

const Prescription = styled.li``;

const Content = styled.div`
  margin-top: 30px;

  ${Summary} {
    font-size: 18px;
    line-height: 28px;
    color: #fff;
    font-weight: 700;
  }

  ${Prescriptions} {
    margin-top: 10px;

    ${Prescription} {
      position: relative;
      font-size: 13px;
      line-height: 24px;
      color: #fff;
      padding-left: 12px;
    }
  }
`;
