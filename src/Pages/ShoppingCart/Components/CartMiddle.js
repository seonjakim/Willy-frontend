import React from "react";
import styled from "styled-components";

export default function CartMiddle(props) {
  return (
    <Wrapper>
      <InnerWrapper>
        <PriceTop>
          <Table>
            {props.supplement.some((el) => el.type) && (
              <>
                <TableLeft>정기구독 제품합계</TableLeft>
                <TableRight>{props.subscribe.amount__sum}</TableRight>
              </>
            )}

            {/* {props.supplement.type === false ? (
              <>
                <TableLeft>1회구매 제품합계</TableLeft>
                <TableRight>{props.disposable.amount__sum}</TableRight>
              </>
            ) : (
              ""
            )} */}
            {props.supplement.some((el) => !el.type) && (
              <>
                <TableLeft>1회구매 제품합계</TableLeft>
                <TableRight>{props.disposable.amount__sum}</TableRight>
              </>
            )}

            <TableLeft>배송비</TableLeft>
            <TableRight>2,500원</TableRight>
          </Table>
        </PriceTop>
        {props.supplement.some((el) => el.type) && (
          <>
            <Discount>
              <DiscountDt>정기구독 할인혜택</DiscountDt>
              <DiscountDd>총 2,500원</DiscountDd>
            </Discount>
            <ActualPricing>
              <TableLeft>배송비 무료</TableLeft>
              <TableRight>-2,500원</TableRight>
              <TableLeft>문진할인 이벤트</TableLeft>
              <TableRight>0원</TableRight>
              <TableLeft>
                초대코드 할인<InputButton>입력</InputButton>
              </TableLeft>
              <TableRight>0원</TableRight>
            </ActualPricing>
          </>
        )}
      </InnerWrapper>
    </Wrapper>
  );
}

export const Wrapper = styled.div`
  border-top: 1px solid rgba(1, 19, 108, 0.3);
  border-bottom: 1.5px solid #7d7d7d;
`;

export const InnerWrapper = styled.div`
  width: 1024px;
  margin: 0 auto;
  padding: 0 50px;
  display: flex;
  flex-direction: column;
`;

const PriceTop = styled.div`
  font-size: 16px;
`;

export const Table = styled.dl`
  width: 100%;
  padding: 15px 0;
`;

export const TableLeft = styled.dt`
  padding: 15px 0;
  width: 50%;
  float: left;
`;
export const TableRight = styled.dd`
  padding: 15px 0;
  width: 50%;
  float: right;
  text-align: right;
`;

const InputButton = styled.button`
  width: 74px;
  height: 30px;
  color: #999999;
  background-color: #ffffff;
  font-size: 12px;
  border: 1px solid #d7d7d7;
  border-radius: 20px;
  font-weight: 800;
  margin: 0 20px;
`;

const Discount = styled.dl`
  height: 82px;
  padding: 15px 30px;
  background-color: #f0f0f0;
  width: 100%;
`;

const DiscountDt = styled(TableLeft)`
  font-weight: 600;
`;
const DiscountDd = styled(TableRight)`
  font-weight: 600;
`;

const ActualPricing = styled.dl`
  padding: 15px 30px;
  background-color: rgba(1, 19, 108, 0.02);
`;
