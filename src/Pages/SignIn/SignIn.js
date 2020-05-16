import React from "react";
import styled from "styled-components";
import color from "../../Styles/color";

function SignIn() {
  return (
    <SignInWrapper>
      <BoxSize>
        <LogoWrapper>
          <Logo src="https://pilly.kr/images/logo-colored.png" />
        </LogoWrapper>
        <Input placeholder="이메일 또는 전화번호를 입력하세요." />
        <Input placeholder="비밀번호를 입력하세요." />
        <LoginBtn>로그인</LoginBtn>
        <Find>
          <PwJoin>비밀번호 찾기</PwJoin>
          <PwJoin>회원가입</PwJoin>
        </Find>
        <KakaoBtn>
          <Sns src="https://pilly.kr/images/icons/auth/icon-auth-kakaotalk.png" />{" "}
          KAKAO 로그인
        </KakaoBtn>
        <FbBtn>
          <Sns src="https://pilly.kr/images/icons/auth/icon-auth-facebook.png" />{" "}
          FACEBOOK
        </FbBtn>
        <NaverBtn>
          <Sns src="https://pilly.kr/images/icons/auth/icon-auth-naver.png" />{" "}
          NAVER 로그인
        </NaverBtn>
      </BoxSize>
    </SignInWrapper>
  );
}

export default SignIn;

export const loginColor = {
  lightFont: "rgba(51,51,51,0.6)", //회원가입,
  inputColor: "#d7d7d7", //회원가입
  borderBottom: "rgba(1,19,108,0.04)", //회원가입 보더 바텀
};

const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 60px;
`;

const Logo = styled.img`
  width: 59px;
  height: 35px;
`;

const SignInWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #fafafa;
`;

const BoxSize = styled.div`
  width: 458px;
  height: 969px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const Input = styled.input`
  border: 1px solid rgb(215, 215, 215);
  padding: 0 30px;
  width: 100%;
  height: 60px;
  font-size: 20px;
  border-radius: 4px;
  margin: 10px 0;
`;

export const Buttons = styled.button`
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
  margin: 10px 0;
  font: 16px Arial;
  border-radius: 25px;
  border: none;
  cursor: pointer;
  color: white;
  font-weight: 700;
  padding: 0 129px;
`;

export const LoginBtn = styled(Buttons)`
  background-color: ${(props) => {
    return color.pillyColor;
  }};
  justify-content: center;
  margin-top: 35px;
`;
export const KakaoBtn = styled(Buttons)`
  background-color: #ffcc00;
  color: rgba(51, 51, 51, 0.7);
  margin-top: 33px;
`;
export const FbBtn = styled(Buttons)`
  background-color: #4469b0;
`;
export const NaverBtn = styled(Buttons)`
  background-color: #1ec800;
`;

export const Sns = styled.img`
  background-size: 50px 50px;
  width: 60px;
  height: 50px;
  padding: 0 4px;
`;

const Find = styled.div`
  padding: 20px 0 30px 0;
  text-align: center;
  border-bottom: 1px solid rgba(1, 19, 108, 0.04);
`;

const PwJoin = styled.span`
  padding: 0 16px;
  font: 14.5px "Noto Sans KR", sans-serif;
  font-weight: 550;
  color: rgba(51, 51, 51, 0.6);
  letter-spacing: -1px;
  &:last-child {
    border-left: 1px solid rgba(51, 51, 51, 0.6);
  }
`;
