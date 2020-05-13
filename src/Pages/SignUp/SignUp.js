import React from "react";
import styled from "styled-components";
import { Buttons, LoginBtn, KakaoBtn, FbBtn, NaverBtn, Sns } from "../SignIn/SignIn";

function SignUp() {
    return (
        <SignUpWrapper>
            <SignUpWord>회원가입</SignUpWord>
            <WordAboveInput>이름</WordAboveInput>
            <SignUpInput placeholder="이름을 입력해 주세요."></SignUpInput>
            <WordAboveInput>연락처</WordAboveInput>
            <SmallerInput placeholder="연락처('-'제외)를 입력해 주세요."></SmallerInput>
            <SmallBtn>인증번호 발송</SmallBtn>
            <SmallerInput placeholder="인증번호를 입력해 주세요."></SmallerInput>
            <SmallBtn>확인</SmallBtn>
            <GrayBorderLine></GrayBorderLine>
            <WordAboveInput>아이디(이메일)</WordAboveInput>
            <SignUpInput placeholder="아이디(이메일)을 입력해 주세요."></SignUpInput>
            <WordAboveInput>비밀번호</WordAboveInput>
            <SignUpInput placeholder="비밀번호를 입력해 주세요."></SignUpInput>
            <WordAboveInput>비밀번호 확인</WordAboveInput>
            <SignUpInput placeholder="비밀번호를 다시 입력해 주세요."></SignUpInput>
            <ThickLetter>
                <AgreeBox /> 모두 동의하기
            </ThickLetter>
            <GrayBorderLine></GrayBorderLine>
            <DeleteMargin>
                <AgreeBox /> 이용 약관 동의
                <Contract>전문보기</Contract>
            </DeleteMargin>
            <AgreeBoxWrapper>
                <AgreeBox /> 개인정보처리방침 동의
                <Contract>전문보기</Contract>
            </AgreeBoxWrapper>
            <AgreeBoxWrapper>
                <AgreeBox /> 마케팅 수신 동의
                <SelectGrey>(선택)</SelectGrey>
                <Contract>전문보기</Contract>
            </AgreeBoxWrapper>
            <BtnWrapper>
                <LoginBtn>회원가입</LoginBtn>
                <KakaoModify>
                    <Sns src="https://pilly.kr/images/icons/auth/icon-auth-kakaotalk.png" /> KAKAO 회원가입
                </KakaoModify>
                <FbModify>
                    <Sns src="https://pilly.kr/images/icons/auth/icon-auth-facebook.png" /> FACEBOOK 회원가입
                </FbModify>
                <NaverModify>
                    <Sns src="https://pilly.kr/images/icons/auth/icon-auth-naver.png" /> NAVER 회원가입
                </NaverModify>
            </BtnWrapper>
        </SignUpWrapper>
    )
}

export default SignUp;

const SignUpWrapper = styled.div`
    width: 668px;
    margin: 0 auto;
    padding: 107px 0 260px;
`;

const SignUpWord = styled.div`
    font: 28px "Noto Sans KR", sans-serif;
    font-weight: 510;
    color: #333333;
`;

const WordAboveInput = styled.div`
    margin: 30px 0 10px;
    color: #999999;
    font-size: 14px;    
    font-weight: bold;
    letter-spacing: -1px;
`;

const SignUpInput = styled.input`
    border: 1px solid #d7d7d7;
    border-radius: 4px;
    width: 100%;
    height: 60px;
    padding: 0 30px;
    font-size: 20px;
    cursor: text;
`;

const SmallerInput = styled(SignUpInput)`
    width: 492px;
    padding: 0 30px;
    margin: 5px 0;
`;

const GrayBorderLine = styled.div`
    border-bottom: 1px solid #eee;
    padding-bottom: 32px;
    margin-bottom: 32px;
`;

const SmallBtn = styled.button`
    width: 156px;
    height: 50px;
    color: white;
    background-color: #333333;
    padding: 0 4px;
    border: none;
    border-radius: 25px;
    font: 16px Arial;
    font-weight: 700;
    margin: 0 0 0 20px;
`;

const AgreeBoxWrapper = styled.div`
    display: inline-block;
    display: flex;
    align-items: center;
    width: 100%;
    font-size: 16px;
    color: #333333;
    margin: 32px 0;
    font-weight: 540;
    letter-spacing: -1px;
    position: relative;
    
`;

const DeleteMargin = styled(AgreeBoxWrapper)`
    margin-top: 0px;
`;

const ThickLetter = styled(AgreeBoxWrapper)`
    font-size: 20px;
    font-weight: 600;
    margin: 70px 0 0 0;
`;

const SelectGrey = styled.span`
    font-size: 16px;
    color: #999999;
    font-weight: 550;
    margin-left: 9px;
`;

const AgreeBox = styled.input`
    width: 24px;
    height: 24px;
    margin-right: 10px;
    border: 1.5px solid #d7d7d7;
    border-radius: 4px;
`;

const BtnWrapper = styled.div`
    width: 418px;
    margin: 90px auto 0;
`;

const Contract = styled.span`
    color: #999999;
    font-size: 14px;
    border-bottom: 1px solid #999999;
    position: absolute;
    right: 0;
    padding-bottom: 5px;
    font-weight: 500;
`;

const KakaoModify = styled(KakaoBtn)`
    padding: 0 95px;
    margin-top: 50px;
`;

const FbModify = styled(FbBtn)`
    padding: 0 95px;
`;

const NaverModify = styled(NaverBtn)`
    padding: 0 95px;
`;
