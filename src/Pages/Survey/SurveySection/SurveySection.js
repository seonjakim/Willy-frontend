import React, { useState } from "react";
import styled from "styled-components";

import SurveyStart from "./SurveyStart/SurveyStart";
import SurveyTest from "./SurveyTest/SurveyTest";

function SurveySction({ survey, count, handleClickPlus, handleClickMinus }) {
  return (
    <>
      {count === -1 ? (
        <SurveyStart handleClickPlus={handleClickPlus} />
      ) : (
        <SurveyTest
          survey={survey}
          count={count}
          handleClickPlus={handleClickPlus}
          handleClickMinus={handleClickMinus}
        />
      )}
    </>
  );
}

export default SurveySction;
