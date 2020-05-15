import React from "react";
import styled, { css } from "styled-components";

import Nutrient from "./Nutrient/Nutrient";

function Nutrients() {
  return (
    <NutrientsWrapper>
      {/* use .map() here */}
      <Nutrient></Nutrient>
    </NutrientsWrapper>
  );
}

export default Nutrients;

const NutrientsWrapper = styled.ul`
  line-height: 1.2;
`;
