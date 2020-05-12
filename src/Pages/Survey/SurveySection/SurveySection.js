import React, { useState } from "react";
import styled from "styled-components";

import SurveyStart from "./SurveyStart/SurveyStart";
import SurveyTest from "./SurveyTest/SurveyTest";

function SurveySction({ location }) {
  //console.log(location);
  const [count, setCount] = useState(-1);

  const handleClickPlus = () => {
    setCount(count + 1);
  };

  const handleClickMinus = () => {
    setCount(count - 1);
  };

  return (
    <>
      {count === -1 ? (
        <SurveyStart handleClickPlus={handleClickPlus} />
      ) : (
        <SurveyTest
          count={count}
          handleClickPlus={handleClickPlus}
          handleClickMinus={handleClickMinus}
        />
      )}
    </>
  );
}

export default SurveySction;
