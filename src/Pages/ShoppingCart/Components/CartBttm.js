import React from "react";
import styled from "styled-components";
import { InnerWrapper, Table, TableLeft, TableRight } from "./CartMiddle";

export default function CartBttm(props) {
  return (
    <Body>
      <ReviseInnerWrapper>
        <Table>
          <BiggerTableLeft>총 결제금액</BiggerTableLeft>
          <BiggerTableRight>{props.amount.amount__sum}</BiggerTableRight>
        </Table>
        {props.supplement.some((el) => el.type) && (
          <>
            <PricePerDay>
              <Img src="https://pilly.kr/images/cart/img-cart-priceperday@3x.png" />
              <Ptag>
                <Strong>
                  하루{Math.floor(props.amount.amount__sum / 30)}원!
                  <br />
                </Strong>
                건강에 투자하세요.
              </Ptag>
            </PricePerDay>
            <ButtonArea>
              <Button>정기구독 시작하기</Button>
              <SpanTag>언제든 변경 및 해지 가능</SpanTag>
              <OrSpan>또는</OrSpan>
              <UnderlineSpan>
                16,300원 | 할인 없이, 한 번만 구매하기
              </UnderlineSpan>
            </ButtonArea>
          </>
        )}
        {props.supplement.some((el) => el.type) ? (
          ""
        ) : (
          <ButtonArea>
            <Button>구매하기</Button>
          </ButtonArea>
        )}
      </ReviseInnerWrapper>
      )
    </Body>
  );
}

const Body = styled.div``;

const ReviseInnerWrapper = styled(InnerWrapper)`
  margin-top: 15px;
`;

export const BiggerTableLeft = styled(TableLeft)`
  font-size: 22px;
  font-weight: 700;
`;

export const BiggerTableRight = styled(TableRight)`
  color: #e26d59;
  font-size: 22px;
  font-weight: 700;
`;

const PricePerDay = styled.div`
  height: 105px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const Img = styled.img`
  height: 100%;
  position: relative;
`;

const Ptag = styled.p`
  /* padding: 35px 28px 20px; */
  width: 190px;
  height: 103px;
  font-size: 16px;
  position: absolute;
  padding: 37px 0 0 25px;
`;

const Strong = styled.span`
  font-weight: 800;
`;

export const ButtonArea = styled.div`
  width: 100%;
  height: 189px;
  margin: 40px 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Button = styled.button`
  width: 328px;
  height: 60px;
  background-color: #e26d59;
  color: #ffffff;
  font: 16px Arial;
  font-weight: 600;
  box-shadow: 0 5px 4px 0 rgba(0, 0, 0, 0.15);
  border-radius: 30px;
`;

const SpanTag = styled.span`
  color: #e26d59;
  font-size: 14px;
  margin-top: 13px;
`;

const OrSpan = styled.span`
  font-size: 14px;
  margin-top: 30px;
`;

const UnderlineSpan = styled(OrSpan)`
  font-weight: 600;
  border-bottom: 1px solid #000000;
  padding-bottom: 5px;
`;
