import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Route } from "react-router-dom";
import axios from "axios";

import SurveySection from "./SurveySection/SurveySection";
import SurveyStart from "./SurveySection/SurveyStart/SurveyStart";
import SurveyTest from "./SurveySection/SurveyTest/SurveyTest";

function Survey({ match, history }) {
  const goBack = () => history.goBack();

  //추가
  const [survey, setSurvey] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [count, setCount] = useState(-1);

  useEffect(() => {
    const fetchData = async () => {
      const { data: survey } = await axios.get("data/survey.json");
      setSurvey(survey["survey"]);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  const handleClickPlus = () => {
    if (survey && count < survey.length) setCount(count + 1);
  };

  const handleClickMinus = () => {
    if (survey && count > -1) setCount(count - 1);
  };

  return (
    <SurveyWrapper>
      <ContentsWrapper>
        <Contents>
          {/* <CloseButton onClick={goBack}>X</CloseButton> */}
          <>
            {count === -1 ? (
              <>
                <CloseButton onClick={goBack}>X</CloseButton>
                <SurveyStart handleClickPlus={handleClickPlus} />
              </>
            ) : (
              <SurveyTest
                survey={survey}
                count={count}
                handleClickPlus={handleClickPlus}
                handleClickMinus={handleClickMinus}
              />
            )}
          </>

          {/* <SurveySection
            survey={survey}
            count={count}
            handleClickPlus={handleClickPlus}
            handleClickMinus={handleClickMinus}
            history={history}
          /> */}
          {/* <Route
            path={match.path}
            render={() => (
              <SurveySection
                survey={survey}
                count={count}
                handleClickPlus={handleClickPlus}
                handleClickMinus={handleClickMinus}
              />
            )}
          /> */}
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
