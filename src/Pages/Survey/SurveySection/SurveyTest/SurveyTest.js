import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import arrow_right from "../../../../Images/arrow_right.png";
import arrow_right_dim from "../../../../Images/arrow_right_dim.png";

import SurveyForm from "./SurveyForm/SurveyForm";

function SurveyTest({ surveyForm }) {
  const { type, percentage } = surveyForm;
  const typeToNum = {
    기본정보: 0,
    "증상/불편": 1,
    "생활 습관": 2,
    기타: 3,
  };

  return (
    <SurveyTestWrapper>
      <TestHeader>
        <TestItems type={typeToNum[type]}>
          <TestItem>기본정보</TestItem>
          <TestItem>증상/불편</TestItem>
          <TestItem>생활 습관</TestItem>
          <TestItem>기타</TestItem>
        </TestItems>
        <Progress>
          <ProgressRate rate={percentage + "%"} />
        </Progress>
      </TestHeader>
      <SurveyForm />
    </SurveyTestWrapper>
  );
}

const mapStateToProps = (state) => ({
  surveyForm: state.surveyForm,
});

// export default SurveyTest;
export default connect(mapStateToProps, "")(SurveyTest);

const SurveyTestWrapper = styled.div`
  width: 100%;
`;

const TestHeader = styled.div`
  height: 91px;
`;

const TestItem = styled.li`
  position: relative;
  display: table-cell;
  height: 90px;
  font-size: 18px;
  font-weight: 700;
  text-align: center;
  vertical-align: middle;
  color: #bdbdbd;
`;

const TestItems = styled.ul`
  display: table;
  margin: 0 auto;
  width: 670px;
  table-layout: fixed;

  ${TestItem} {
    /* section 색 */
    &:nth-child(${(props) => props.type + 1}) {
      color: #e26d59;
    }

    /* section 뒤 화살표 색 */
    &:not(:last-child):after {
      content: "";
      display: block;
      position: absolute;
      top: 34px;
      right: 0;
      margin-right: -13px;
      width: 19px;
      height: 23px;
      background-image: url(${arrow_right_dim});
      background-repeat: no-repeat;
      background-size: 23px;
      background-position: 50% 50%;
    }

    &:nth-child(${(props) => props.type + 1}):after {
      background-image: url(${arrow_right});
    }
  }
`;

const Progress = styled.div`
  height: 4px;
  background-color: #eee;
`;

const ProgressRate = styled.div`
  height: 4px;
  width: ${(props) => props.rate || "0"};
  background-color: #e26d59;
`;
