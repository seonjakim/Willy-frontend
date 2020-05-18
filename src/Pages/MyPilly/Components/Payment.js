import React from "react";
import styled from "styled-components";
import { BodyWrapper, TheTitle, InnerInfo } from "./MyPoint";

function Payment() {
  return (
    <BodyWrapper>
      <TheTitle>결제관리</TheTitle>
      <InnerInfo>결제 내역이 없습니다.</InnerInfo>
    </BodyWrapper>
  );
}

export default Payment;
