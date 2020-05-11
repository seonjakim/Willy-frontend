import React from "react";
import styled from "styled-components"

import SurveySection from "./SurveySection/SurveySection";

function Survey() {
  return (
    <SurveyWrapper>
      <ContentsWrapper>
        <Contents>
          <CloseButton>
            X
          </CloseButton>
          <SurveySection />
        </Contents>
      </ContentsWrapper>
    </SurveyWrapper>
  );
}

export default Survey;

//styled-components
const SurveyWrapper = styled.div`
  position: relative;
  background-color: #fafafa;
  width: 100%;
  height: 100%;
`

const ContentsWrapper = styled.div`
  padding: 40px 0 142px;
  vertical-align: top;
`

const Contents = styled.div`
  position: relative;
  margin: 0 auto;
  padding-bottom: 30px;
  width: 940px;
  background-color: #fff;
  box-shadow: 0px 2px 3px 0 rgba(0, 0, 0, 0.08);
`

const CloseButton = styled.button`
  position: absolute;
  right: -25px;
  top: -25px;
  width: 50px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  border-radius: 50%;
  background-color: #fff;
  box-shadow: 0px 2px 3px 0 rgba(0, 0, 0, 0.08);
  z-index: 5;
`