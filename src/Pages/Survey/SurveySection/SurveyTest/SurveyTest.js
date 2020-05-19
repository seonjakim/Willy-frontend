import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

import arrow_right from "../../../../Images/arrow_right.png";
import arrow_right_dim from "../../../../Images/arrow_right_dim.png";

import SurveyForm from "./SurveyForm/SurveyForm";
import SurveyButton from "./SurveyButton/SurveyButton";

function SurveyTest(props) {
  const { survey, count, handleClickPlus, handleClickMinus } = props;
  // const [survey, setSurvey] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  // const [section, setSection] = useState("");

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const { data: survey } = await axios.get("data/survey.json");
  //     setSurvey(survey["survey"]);
  //     setIsLoading(false);
  //   };
  //   fetchData();
  // }, []);

  return (
    <SurveyTestWrapper>
      {console.log("Test", survey)}
      <TestHeader>
        <TestItems count={count}>
          <TestItem>기본정보</TestItem>
          <TestItem>증상/불편</TestItem>
          <TestItem>생활 습관</TestItem>
          <TestItem>기타</TestItem>
        </TestItems>
        <Progress>
          <ProgressRate rate="3%" />
        </Progress>
      </TestHeader>
      {isLoading ? <h2>...</h2> : <SurveyForm survey={survey[count]} />}
      <SurveyButton />
    </SurveyTestWrapper>
  );
}

export default SurveyTest;

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
    &:nth-child(${(props) => props.count + 1}) {
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

    &:nth-child(${(props) => props.count + 1}):after {
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
