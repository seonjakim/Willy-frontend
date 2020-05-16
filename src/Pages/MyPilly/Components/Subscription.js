import React from "react";
import styled from "styled-components";
import { BodyWrapper, TheTitle, InnerInfo } from "./MyPoint";

function Subscription() {
  return (
    <BodyWrapper>
      <TheTitle>정기구독</TheTitle>
      <InnerInfo>정기구독 내역이 없습니다.</InnerInfo>
    </BodyWrapper>
  );
}

export default Subscription;
