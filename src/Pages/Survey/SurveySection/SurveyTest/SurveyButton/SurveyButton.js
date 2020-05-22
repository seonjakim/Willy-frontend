import React from "react";
import styled, { css } from "styled-components";
import { connect } from "react-redux";
import { clickPlus, clickMinus } from "../../../../../Actions";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();
function SurveyButton(props) {
  // console.log("props", props);
  const { answer, handleClickPlus, handleClickMinus } = props;

  const notify = () => {
    toast.info("답변을 입력해주세요.", {
      position: "bottom-left",
    });
  };

  return (
    <SurveyButtonWrapper>
      <ButtonPrev onClick={handleClickMinus}>이전</ButtonPrev>
      <ButtonNext
        onClick={() => {
          if (!answer || answer.length === 0) {
            notify();
            return;
          }
          handleClickPlus();
        }}
      >
        이후
      </ButtonNext>
      <StyledToastContainer />
    </SurveyButtonWrapper>
  );
}

const mapStateToProps = (state) => ({
  click: state.clickCounter.click,
});

const mapDispatchToProps = (dispatch) => ({
  handleClickPlus: () => dispatch(clickPlus()),
  handleClickMinus: () => dispatch(clickMinus()),
});

// export default SurveyButton;
export default connect(mapStateToProps, mapDispatchToProps)(SurveyButton);

const SurveyButtonWrapper = styled.div`
  width: 670px;
  margin: 20px auto 0;
  overflow: hidden;
`;

const button = css`
  display: inline-block;
  padding: 0 36px;
  min-width: 74px;
  height: 50px;
  line-height: 48px;
  font-size: 16px;
  font-weight: 700;
  text-align: center;
  vertical-align: middle;
  outline: none;
  border: 1px solid #d7d7d7;
  border-radius: 25px;
  background-color: #fff;
`;

const ButtonPrev = styled.button`
  ${button}
  float: left;
  width: 158px;
`;

const ButtonNext = styled.button`
  ${button}
  float: right;
  width: 430px;
  line-height: 50px;
  background-color: #333;
  border: none;
  color: #fff;
`;

const StyledToastContainer = styled(ToastContainer).attrs({
  className: "toast-container",
})`
  width: 300px;
  font-size: 16px;

  .Toastify__toast-body {
    margin-left: 10px;
  }
`;
