import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { connect } from "react-redux";
import { HO_URL } from "../../Constants"; // 지환님 IP

import { LoginBtn } from "../SignIn/SignIn";
import NavBar from "../../Component/NavBar/NavBar";

const SignUp = (props) => {
  //console.log("소셜로그인페이지:", props);
  const [name, setName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [authNumber, setAuthNumber] = useState("");
  const [authTimer, setAuthTimer] = useState(false);
  const [mobileAgreement, setMobileAgreement] = useState("");
  const [email, setEmail] = useState("");
  // 약관 동의
  const [agreeAll, setAgreeAll] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState([false, false]);
  const [agreeSMS, setAgreeSMS] = useState(false);

  //인증 end초 타이머
  const setTimer = (end) => {
    let time = 0;
    const timer = setInterval(() => {
      time += 1;

      if (time >= end) {
        clearInterval(timer);
        setAuthTimer(false);
      }
    }, 1000);
    setAuthTimer(true);
  };

  //회원가입 API
  const register = async () => {
    try {
      const response = await axios.post(`${HO_URL}/user/sign-up`, {
        name,
        mobile_number: mobileNumber,
        email,
        mobile_agreement: mobileAgreement, //연락처 인증시 1
        terms: agreeTerms.every((term) => term === true) ? "1" : "0", //모두 true 일 경우 1 반환
        agreement: agreeSMS ? "1" : "0",
        social_type: 3,
        social_id: props.socialIdStore,
      });
      console.log("reponse..", response);
      alert(response.data.message);
      props.history.push("/signin");
    } catch (e) {
      console.log(agreeTerms.every((term) => term === true));
      console.log("bad request..", e.response);
      e.response && alert(e.response.data.message);
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
        alert(response.data.message);
      } catch (e) {
        console.log(e.response);
        e.response && alert(e.response.data.message); //undefined
      }
    } else {
      alert("올바른 휴대폰 번호를 입력해주세요.");
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
        alert(response.data.message);
        setMobileAgreement("1");
      }
      console.log(response.data.message);
      alert(response.data.message);
    } catch (e) {
      console.log("bad request..", e.response);
      console.log(authNumber);
      alert(e.response.data.message);
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
        </BtnWrapper>
      </SignUpWrapper>
    </>
  );
};

const mapStateProps = (state) => {
  return {
    socialIdStore: state.socialIdStore,
  };
};

export default connect(mapStateProps)(SignUp);

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
