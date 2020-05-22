import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import Nutrient from "./Nutrient/Nutrient";

function Nutrients({ user, nutrients }) {
  console.log("NU", nutrients);
  return (
    <NutrientsWrapper>
      {nutrients.map((nutrient, idx) => (
        <Nutrient user={user} idx={idx} nutrient={nutrient}></Nutrient>
      ))}
    </NutrientsWrapper>
  );
}

const mapStateToProps = (state) => ({
  nutrients: state.surveyResult.Recommendations.nutrients,
});

export default connect(mapStateToProps, "")(Nutrients);

const NutrientsWrapper = styled.ul`
  line-height: 1.2;
`;
