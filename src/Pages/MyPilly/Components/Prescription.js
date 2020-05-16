import React from "react";
// import styled from "styled-components";
import { BodyWrapper, TheTitle } from "./MyPoint";

import PrescriptionCard from "./PrescriptionCard";

function Prescription() {
  return (
    <BodyWrapper>
      <TheTitle>문진관리</TheTitle>
      <PrescriptionCard />
    </BodyWrapper>
  );
}

export default Prescription;
