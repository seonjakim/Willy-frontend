import React, { useEffect } from "react";
import styled, { css } from "styled-components";
import { connect } from "react-redux";

import Nutrients from "./Nutrients/Nutrients";

function Recommendations({ recommendations }) {
  console.log("recommen..", recommendations);

  useEffect(() => {}, [recommendations]);
  return (
    <RecommendationsWrapper>
      <Header>
        <Title>
          영양성분 추천
          <Value>{recommendations.amount}</Value>
          <Description>
            <Bold>{recommendations.name}</Bold>님의 건강 설문에 따르면 다음과
            같은 영양성분이 건강에 도움을 줄 수 있습니다.
          </Description>
        </Title>
      </Header>
      <Nutrients user={recommendations.name} />
    </RecommendationsWrapper>
  );
}

const mapStateToProps = (state) => ({
  recommendations: state.surveyResult.Recommendations,
});

export default connect(mapStateToProps, "")(Recommendations);

const MAX_WIDTH = "1008px";

//inner CSS
const inner = css`
  margin: 0 auto;
  max-width: ${MAX_WIDTH};
`;

const RecommendationsWrapper = styled.div`
  ${inner}
  clear: both;
  margin-top: 10px;
  background-color: #fafafa;
`;

const Header = styled.div`
  padding: 35px 26px;
  background-color: #fff;
`;

const Title = styled.p`
  letter-spacing: 0.2px;
  font-size: 22px;
  color: #333;
  font-weight: 700;
`;

const Value = styled.span`
  margin-left: 5px;
  font-weight: 700;
  color: #e26d59;
`;

const Bold = styled.span`
  font-weight: 700;
`;

const Description = styled.p`
  /* letter-spacing: 0.2px; */
  margin-top: 15px;
  font-size: 16px;
  font-weight: normal;
  line-height: 33px;
  color: #333;
`;
