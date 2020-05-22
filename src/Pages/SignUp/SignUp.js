import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { HO_URL } from "../../Constants"; // 지환님 IP

import { LoginBtn, KakaoBtn, FbBtn, NaverBtn, Sns } from "../SignIn/SignIn";
import NavBar from "../../Component/NavBar/NavBar";

const SignUp = (props) => {
  const [name, setName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [authNumber, setAuthNumber] = useState("");
  const [authTimer, setAuthTimer] = useState(false);
  const [mobileAgreement, setMobileAgreement] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  // 약관 동의
  const [agreeAll, setAgreeAll] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState([false, false]);
  const [agreeSMS, setAgreeSMS] = useState(false);

  // Toast 메세지
  const notify = (message) => {
    toast.info(message, {
      position: "bottom-left",
    });
  };

  //인증 end초 타이머
  const setTimer = (end) => {
    let time = 0;
    const timer = setInterval(() => {
      time += 1;
      console.log(time);

      if (time >= end) {
        clearInterval(timer);
        setAuthTimer(false);
      }
    }, 1000);
    setAuthTimer(true);
  };

  //회원가입 API
  const register = async () => {
    if (password === passwordCheck) {
      try {
        const response = await axios.post(`${HO_URL}/user/sign-up`, {
          name,
          mobile_number: mobileNumber,
          email,
          social_type: "1",
          password,
          mobile_agreement: mobileAgreement, //연락처 인증시 1
          terms: agreeTerms.every((term) => term === true) ? "1" : "0", //모두 true 일 경우 1 반환
          agreement: agreeSMS ? "1" : "0",
        });
        console.log("reponse..", response);
        notify(response.data.message);
        props.history.push("/signin");
      } catch (e) {
        e.response && notify(e.response.data.message);
      }
    } else {
      notify("비밀번호가 일치하지 않습니다.");
    }
  };

  // 인증번호 발송
  const verifyMobile = async () => {
    if (mobileNumber.length === 11 || mobileNumber.length === 10) {
      try {
        const response = await axios.post(`${HO_URL}/user/sms`, {
          mobile_number: mobileNumber,
        });
        console.log(response);
        setTimer(25);
        notify(response.data.message);
      } catch (e) {
        console.log(e.response);
        e.response && notify(e.response.data.message); //undefined
      }
    } else {
      notify("올바른 휴대폰 번호를 입력해주세요.");
    }
  };

  // 인증번호 입력 확인
  const verifySMS = async () => {
    try {
      const response = await axios.post(`${HO_URL}/user/sms/verification`, {
        mobile_number: mobileNumber,
        auth_number: authNumber,
      });
      if (response.status === 200) {
        notify(response.data.message);
        setMobileAgreement("1");
      }
      console.log(response.data.message);
      notify(response.data.message);
    } catch (e) {
      console.log("bad request..", e.response);
      console.log(authNumber);
      notify(e.response.data.message);
    }
  };

  // 모두 동의
  const agreeAllClick = () => {
    if (!agreeAll) {
      setAgreeTerms([true, true]);
      setAgreeSMS(true);
    } else {
      setAgreeTerms([false, false]);
      setAgreeSMS(false);
    }
    setAgreeAll((agreeAll) => !agreeAll);
  };

  //약관 체크 버튼
  const checkedOff = "https://pilly.kr/images/icons/icon-checkbox-off@2x.png";
  const checkedOn = "https://pilly.kr/images/icons/icon-checkbox-on@2x.png";

  return (
    <>
      <NavBar props={props} />
      <SignUpWrapper>
        <SignUpWord>회원가입</SignUpWord>
        <WordAboveInput>이름</WordAboveInput>
        <SignUpInput
          placeholder="이름을 입력해 주세요."
          onChange={(e) => setName(e.target.value)}
          미
        ></SignUpInput>
        <WordAboveInput>연락처</WordAboveInput>
        <SmallerInput
          placeholder="연락처('-'제외)를 입력해 주세요."
          onChange={(e) => setMobileNumber(e.target.value)}
        ></SmallerInput>
        <SmallBtn onClick={verifyMobile} style={{ backgroundColor: "#333333" }}>
          인증번호 발송
        </SmallBtn>
        <SmallerInput
          placeholder="인증번호를 입력해 주세요."
          onChange={(e) => setAuthNumber(e.target.value)}
        ></SmallerInput>
        <SmallBtn
          onClick={authTimer ? verifySMS : ""}
          style={{ cursor: authTimer ? "pointer" : "default" }}
          timer={authTimer}
        >
          확인
        </SmallBtn>
        <GrayBorderLine></GrayBorderLine>
        <WordAboveInput>아이디(이메일)</WordAboveInput>
        <SignUpInput
          placeholder="아이디(이메일)을 입력해 주세요."
          onChange={(e) => setEmail(e.target.value)}
        ></SignUpInput>
        <WordAboveInput>비밀번호</WordAboveInput>
        <PasswordInput
          placeholder="비밀번호를 입력해 주세요."
          type="password"
          style={{ borderColor: "#d7d7d7" }}
          onChange={(e) => setPassword(e.target.value)}
        ></PasswordInput>
        <WordAboveInput>비밀번호 확인</WordAboveInput>
        <PasswordInput
          placeholder="비밀번호를 다시 입력해 주세요."
          type="password"
          equal={password === passwordCheck ? true : false} //비밀번호 다르면 false => border-color: red
          onChange={(e) => setPasswordCheck(e.target.value)}
        ></PasswordInput>
        {/* -- 약관 -- */}
        <ThickLetter onClick={agreeAllClick}>
          <AgreeBox checked={agreeAll ? checkedOn : checkedOff} /> 모두 동의하기
        </ThickLetter>
        <GrayBorderLine></GrayBorderLine>
        <DeleteMargin
          onClick={() => setAgreeTerms((terms) => [!terms[0], terms[1]])}
        >
          <AgreeBox checked={agreeTerms[0] ? checkedOn : checkedOff} />
          이용 약관 동의
          <Contract>전문보기</Contract>
        </DeleteMargin>
        <AgreeBoxWrapper
          onClick={() => setAgreeTerms((terms) => [terms[0], !terms[1]])}
        >
          <AgreeBox checked={agreeTerms[1] ? checkedOn : checkedOff} />
          개인정보처리방침 동의
          <Contract>전문보기</Contract>
        </AgreeBoxWrapper>
        <AgreeBoxWrapper onClick={() => setAgreeSMS((agree) => !agree)}>
          <AgreeBox checked={agreeSMS ? checkedOn : checkedOff} />
          마케팅 수신 동의
          <SelectGrey>(선택)</SelectGrey>
          <Contract>전문보기</Contract>
        </AgreeBoxWrapper>
        <BtnWrapper>
          <LoginBtn onClick={register}>회원가입</LoginBtn>
          <KakaoModify>
            <Sns src="https://pilly.kr/images/icons/auth/icon-auth-kakaotalk.png" />{" "}
            KAKAO 회원가입
          </KakaoModify>
          <FbModify>
            <Sns src="https://pilly.kr/images/icons/auth/icon-auth-facebook.png" />{" "}
            FACEBOOK 회원가입
          </FbModify>
          <NaverModify>
            <Sns src="https://pilly.kr/images/icons/auth/icon-auth-naver.png" />{" "}
            NAVER 회원가입
          </NaverModify>
        </BtnWrapper>
        <StyledToastContainer />
      </SignUpWrapper>
    </>
  );
};

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

export const WordAboveInput = styled.div`
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

const PasswordInput = styled(SignUpInput)`
  border-color: ${(props) => (props.equal ? "#d7d7d7" : "red")};
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

export const SmallBtn = styled.button`
  width: 156px;
  height: 50px;
  color: white;
  background-color: ${(props) => (props.timer ? "#333333" : "#999999")};
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

export const AgreeBox = styled.span`
  width: 24px;
  height: 24px;
  margin-right: 10px;
  /* background-image: url("https://pilly.kr/images/icons/icon-checkbox-off@2x.png"); */
  background-image: url(${(props) => props.checked});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 24px;
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

const StyledToastContainer = styled(ToastContainer).attrs({
  className: "toast-container",
})`
  width: 300px;
  font-size: 16px;

  .Toastify__toast-body {
    margin-left: 10px;
  }
`;
