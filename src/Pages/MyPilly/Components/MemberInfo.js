import React, { useState } from "react";
import styled from "styled-components";
import { WordAboveInput, SmallBtn } from "../../SignUp/SignUp";
import { AgreeBox } from "../../SignUp/SignUp";

function MemberInfo() {
  const [show, hide] = useState(false);
  const [personalInfo, setPersonal] = useState(false);
  const [marketingshow, marketinghide] = useState(false);
  const [empty, checkBox] = useState(true);
  const [secondEmpty, secondCheckBox] = useState(true);

  return (
    <MemberWrapper>
      <Title>회원관리</Title>
      <InfoWrapper>
        <InnerTitle>계정정보</InnerTitle>
        {show === true ? (
          <HiddenDiv>
            <HiddenUserInfo>a@gmail.com</HiddenUserInfo>
            <WordAboveInput>현재 비밀번호</WordAboveInput>
            <HiddenInput placeholder="현재 비밀번호를 입력하세요." />
            <WordAboveInput>새 비밀번호</WordAboveInput>
            <HiddenInput placeholder="새 비밀번호를 입력하세요." />
            <WordAboveInput>비밀번호 확인</WordAboveInput>
            <HiddenInput placeholder="새 비밀번호를 한번 더 입력해주세요." />
            <BtnMargin>
              <FirstBtn>계정정보 저장하기</FirstBtn>
              <SecondBtn onClick={() => hide(!show)}>취소하기</SecondBtn>
            </BtnMargin>
          </HiddenDiv>
        ) : (
          <>
            <UserInfo>a@gmail.com</UserInfo>
            <GrayBtn onClick={() => hide(!show)}>비밀번호 변경</GrayBtn>
          </>
        )}
      </InfoWrapper>
      <InfoWrapper>
        <InnerTitle>전화번호</InnerTitle>
        <UserInfo>01012341234</UserInfo>
        <GrayBtn>전화번호 변경</GrayBtn>
      </InfoWrapper>
      <InfoWrapper>
        <InnerTitle>개인정보</InnerTitle>
        {personalInfo === true ? (
          <HiddenDiv>
            <WordAboveInput>이름</WordAboveInput>
            <HiddenInput></HiddenInput>
            <WordAboveInput>우편번호 (선택)</WordAboveInput>
            <SmallInputGray placeholder="우편번호를 입력하세요." />
            <WiderSmallBtn>우편번호 검색</WiderSmallBtn>
            <WordAboveInput>도로명 주소 (선택)</WordAboveInput>
            <InputGray placeholder="도로명 주소를 입력하세요." />
            <WordAboveInput>나머지 주소 (선택)</WordAboveInput>
            <HiddenInput placeholder="나머지 주소를 입력하세요." />
            <BtnMargin>
              <FirstBtn>마케팅알림 저장하기</FirstBtn>
              <SecondBtn onClick={() => setPersonal(!personalInfo)}>
                취소하기
              </SecondBtn>
            </BtnMargin>
          </HiddenDiv>
        ) : (
          <>
            <UserInfo>김지희</UserInfo>
            <GrayBtn onClick={() => setPersonal(!personalInfo)}>
              개인정보 변경
            </GrayBtn>
          </>
        )}
      </InfoWrapper>
      <InfoWrapper>
        {marketingshow === true ? (
          <HiddenDiv>
            <InnerTitle>마케팅 알림</InnerTitle>
            <Marketing>
              {empty === true ? (
                <AgreeBox onClick={() => checkBox(!empty)} />
              ) : (
                <CheckImg
                  onClick={() => checkBox(!empty)}
                  src="https://pilly.kr/images/icons/icon-checkbox-on.png"
                />
              )}{" "}
              마케팅 수신 동의 (이메일)
            </Marketing>
            <Marketing>
              {secondEmpty === true ? (
                <AgreeBox onClick={() => secondCheckBox(!secondEmpty)} />
              ) : (
                <CheckImg
                  onClick={() => secondCheckBox(!secondEmpty)}
                  src="https://pilly.kr/images/icons/icon-checkbox-on.png"
                />
              )}
              마케팅 수신 동의 (SNS)
            </Marketing>

            <BtnMargin>
              <FirstBtn>마케팅알림 저장하기</FirstBtn>
              <SecondBtn onClick={() => marketinghide(!marketingshow)}>
                취소하기
              </SecondBtn>
            </BtnMargin>
          </HiddenDiv>
        ) : (
          <>
            <InnerTitle>마케팅 알림</InnerTitle>
            <Marketing>
              마케팅 수신 동의 (이메일): <OffOn>OFF</OffOn>
            </Marketing>
            <Marketing>
              마케팅 수신 동의 (SNS): <OffOn>OFF</OffOn>
            </Marketing>
            <GrayBtn onClick={() => marketinghide(!marketingshow)}>
              마케팅 알람 변경
            </GrayBtn>
          </>
        )}
      </InfoWrapper>
      <Withdrawal>회원탈퇴</Withdrawal>
    </MemberWrapper>
  );
}

export default MemberInfo;

const MemberWrapper = styled.div`
  width: 100%;
`;

const Title = styled.div`
  height: 40px;
  font-size: 28px;
`;

const InfoWrapper = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.04);
  position: relative;
  padding: 38px 0 30px 0;
`;

const HiddenDiv = styled.div`
  width: 100%;
`;

const InnerTitle = styled.span`
  font-size: 20px;
  font-weight: 800;
`;

const UserInfo = styled.span`
  font-size: 16px;
  padding-left: 42px;
  font-weight: 500;
  letter-spacing: -0.5px;
  color: #333333;
`;

const HiddenUserInfo = styled(UserInfo)`
  padding: 30px 0 0 0;
  display: inline-block;
`;

const Marketing = styled.span`
  font-size: 16px;
  padding-left: 17px;
  /* display: flex;
  align-items: center; */
`;

const OffOn = styled.span`
  color: #999999;
  font-size: 16px;
  font-weight: 600;
`;

const GrayBtn = styled.button`
  width: 212px;
  height: 50px;
  border: 1px solid #999999;
  background-color: transparent;
  border-radius: 25px;
  color: #999999;
  font-weight: 700;
  font-size: 16px;
  position: absolute;
  right: 0;
  bottom: 25%;
`;

const HiddenInput = styled.input`
  width: 100%;
  height: 60px;
  border: 1px solid rgb(215, 215, 215);
  left: 0;
  font-size: 20px;
  padding: 0 30px;
`;

const InputGray = styled(HiddenInput)`
  background-color: #fafafa;
`;

const SmallInputGray = styled(InputGray)`
  width: 676px;
`;

const WiderSmallBtn = styled(SmallBtn)`
  width: 212px;
`;

const BtnMargin = styled.div`
  width: 689px;
  margin: 0 auto;
`;

export const TwoBtn = styled.button`
  width: 328px;
  height: 50px;
  text-align: center;
  border-radius: 25px;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: -1px;
  margin: 30px 8px 0;
`;

const FirstBtn = styled(TwoBtn)`
  background-color: #e26d59;
  color: white;
  box-shadow: 0 5px 4px 0 rgba(0, 0, 0, 0.15);
`;

const SecondBtn = styled(TwoBtn)`
  background-color: transparent;
  border: 1px solid #d7d7d7;
`;

const Withdrawal = styled.span`
  font-size: 14px;
  padding-bottom: 5px;
  border-bottom: 1px solid #333333;
  letter-spacing: -1px;
  position: absolute;
  right: 42%;
`;

const CheckImg = styled.img`
  margin-right: 10px;
  width: 24px;
  height: 24px;
`;
