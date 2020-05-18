import React, { useEffect, useState } from "react";
import styled from "styled-components";

function TheFirstPage(props) {
  return (
    <Container>
      <FirstNameDiv>
        <NameDiv>
          {" "}
          <ActualName>{props.user.name}</ActualName> 님의 필리
        </NameDiv>
        <Email>{props.user.email}</Email>
        <PointDiv>
          <Ptag>
            P
            <TickImg src="https://pilly.kr/images/icons/icon-select-next.png" />
          </Ptag>
        </PointDiv>
      </FirstNameDiv>
      <Height70>
        <BoldLetter>내 초대코드</BoldLetter>
        <MyCode>{props.user.invitation_code}</MyCode>
      </Height70>
      <MidDiv>
        <TopInMidDiv>
          <NumPeople>0명</NumPeople>정기구독중 /{" "}
          <DiscountPercent>0%</DiscountPercent>할인혜택 적용중
        </TopInMidDiv>
        <UlBox>
          <ListInMidDiv>최대 25% 친구초대 할인을 받으세요.</ListInMidDiv>
          <SpanInLi>1명당 5%씩 누적할인! 정기구독 기간 중 매회 할인!</SpanInLi>
          <ListInMidDiv>대박 포인트 적립</ListInMidDiv>
          <SpanInLi>첫 친구 정기구독 시 5,000 포인트 적립!</SpanInLi>
          <ListInMidDiv>
            초대받은 친구도 결제금액의 5% 할인 혜택을 받아요.
          </ListInMidDiv>
        </UlBox>
        <PillyColorBtn>친구 초대하고 혜택받기</PillyColorBtn>
      </MidDiv>
      <Height70>
        <BoldLetter>최근 배송 내역</BoldLetter>
        <SmallGrayLetter onClick={() => props.setDiffcom(4)}>
          더보기
          <TickImg src="https://pilly.kr/images/icons/icon-select-next.png" />
        </SmallGrayLetter>
      </Height70>
      <Height70>
        <BoldLetter>최근 결제 내역</BoldLetter>
        <SmallGrayLetter onClick={() => props.setDiffcom(4)}>
          더보기
          <TickImg src="https://pilly.kr/images/icons/icon-select-next.png" />
        </SmallGrayLetter>
      </Height70>
      <Height70>
        <BoldLetter>최근 영양 추천</BoldLetter>
        <SmallGrayLetter onClick={() => props.setDiffcom(2)}>
          더보기
          <TickImg src="https://pilly.kr/images/icons/icon-select-next.png" />
        </SmallGrayLetter>
      </Height70>
    </Container>
  );
}

export default TheFirstPage;

const Container = styled.div`
  width: 100%;
`;

const FirstNameDiv = styled.div`
  width: 100%;
  height: 66px;
  position: relative;
`;

const NameDiv = styled.h2`
  font-size: 25px;
`;

const MyCode = styled.span`
  font-size: 22px;
  font-weight: 700;
  color: #e26d59;
  position: absolute;
  right: 0;
`;

const ActualName = styled.span`
  font-weight: 700;
`;

const Email = styled.div`
  color: #999999;
  font-size: 12px;
  font-weight: 400;
  margin-top: 8px;
`;

const Ptag = styled.p``;

const PointDiv = styled.div`
  width: 120px;
  height: 36px;
  border-radius: 21px;
  background-color: #f5f5f5;
  position: absolute;
  right: 0;
  top: 0;
  font-size: 20px;
  ${Ptag} {
    position: absolute;
    right: 0;
    display: flex;
    align-items: center;
  }
`;

const TickImg = styled.img`
  display: inline-block;
  width: 7px;
  margin: 10px;
`;

const MidDiv = styled.div`
  height: 287px;
  border-top: 1px solid #d7d7d7;
  border-bottom: 1px solid #d7d7d7;
  color: #999999;
  position: relative;
`;

const TopInMidDiv = styled.p`
  height: 59px;
  padding: 20px 0;
  font-size: 16px;
  text-align: center;
`;

const NumPeople = styled.span`
  color: #333333;
  font-size: 16px;
  margin-right: 5px;
`;

const DiscountPercent = styled.span`
  color: #e26d59;
  font-size: 16px;
  margin-right: 5px;
`;

const UlBox = styled.ul`
  margin: 0 0 0 320px;
`;

const ListInMidDiv = styled.li`
  font-size: 13px;
  font-weight: 700;
  &::before {
    content: "•";
    padding-right: 8px;
  }
`;

const SpanInLi = styled.span`
  display: block;
  font-size: 13px;
  margin: 12px 12px 20px 12px;
`;

const PillyColorBtn = styled.button`
  color: white;
  font: 12px Arial;
  font-weight: 700;
  background-color: #e26d59;
  height: 40px;
  width: 198.76px;
  border-radius: 20px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 23px;
  box-shadow: 0 5px 4px 0 rgba(0, 0, 0, 0.15);
`;

const Height70 = styled.div`
  height: 80px;
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  border-top: 10px solid rgba(1, 19, 108, 0.04);
`;

const BoldLetter = styled.span`
  font-size: 18px;
  font-weight: bold;
`;

const SmallGrayLetter = styled.span`
  color: #999999;
  font-size: 12px;
  font-weight: 800;
  position: absolute;
  right: 0;
  display: flex;
  align-items: center;
  cursor: pointer;
`;
