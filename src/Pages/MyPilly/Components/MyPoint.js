import React from "react";
import styled from "styled-components";

function MyPoint() {
  return (
    <BodyWrapper>
      <TheTitle>내포인트</TheTitle>
      <Point>
        보유 포인트
        <PointUpdate>0 P</PointUpdate>
      </Point>
      <InnerInfo>데이터가 없습니다.</InnerInfo>
    </BodyWrapper>
  );
}

export default MyPoint;

export const BodyWrapper = styled.div`
  width: 100%;
`;

export const TheTitle = styled.h3`
  font-size: 26px;
  font-weight: 500;
  margin-bottom: 40px;
`;

export const Point = styled.div`
  position: relative;
  width: 100%;
  height: 56px;
  padding: 22px 16px;
  background-color: #f5f5f5;
  font-size: 14px;
  border-radius: 6px;
  font-weight: bold;
  display: flex;
  align-items: center;
  letter-spacing: -1px;
  margin: 20px 0;
`;

export const PointUpdate = styled.span`
  position: absolute;
  right: 3%;
  font-size: 20px;
  font-weight: 500;
`;

export const InnerInfo = styled.div`
  height: 95px;
  border-top: 1px solid rgba(1, 19, 108, 0.09);
  border-bottom: 1px solid rgba(1, 19, 108, 0.09);
  color: #999999;
  font-size: 16px;
  letter-spacing: -1px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
