import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { clickPlus } from "../../Actions";

import SurveyStart from "./SurveySection/SurveyStart/SurveyStart";
import SurveyTest from "./SurveySection/SurveyTest/SurveyTest";
import SurveyEnd from "./SurveySection/SurveyEnd/SurveyEnd";

function Survey({ click, handleClickPlus, history }) {
  const goBack = () => history.goBack();

  return (
    <SurveyWrapper>
      <ContentsWrapper>
        <Contents>
          <>
            {click === -1 ? (
              <>
                <CloseButton onClick={goBack}>X</CloseButton>
                <SurveyStart handleClickPlus={handleClickPlus} />
              </>
            ) : click !== "FINISH" ? (
              <>
                <CloseButton onClick={goBack}>X</CloseButton>
                <SurveyTest />
              </>
            ) : (
              <>
                <SurveyEnd history={history} />
              </>
            )}
            {/* <SurveyEnd history={history} /> */}
          </>
        </Contents>
      </ContentsWrapper>
    </SurveyWrapper>
  );
}

const mapStateToProps = (state) => ({
  click: state.clickCounter.click,
});

const mapDispatchToProps = (dispatch) => ({
  handleClickPlus: () => dispatch(clickPlus()),
});

// export default Survey;
export default connect(mapStateToProps, mapDispatchToProps)(Survey);

//styled-components
const SurveyWrapper = styled.div`
  position: relative;
  background-color: #fafafa;
  width: 100%;
  height: 100%;
`;

const ContentsWrapper = styled.div`
  padding: 40px 0 142px;
  vertical-align: top;
`;

const Contents = styled.div`
  position: relative;
  margin: 0 auto;
  padding-bottom: 30px;
  width: 940px;
  background-color: #fff;
  box-shadow: 3px 5px 5px 0 rgba(0, 0, 0, 0.08);
`;

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
  box-shadow: 1px 2px 3px 0 rgba(0, 0, 0, 0.08);
  z-index: 5;
`;
