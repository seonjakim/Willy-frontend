import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import FacebookLogin from "react-facebook-login";
import Kakao from "kakaojs";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { connect } from "react-redux";
import { socialId } from "../../Actions/index";

import { HWAN_URL } from "../../Constants"; // 지환님 IP
import color from "../../Styles/color";
import NavBar from "../../Component/NavBar/NavBar";

// window.Kakao.init("0f69e11dca8e5bb956c1b1183d311fde");
// console.log(Kakao.isInitialized());
function SignIn(props) {
  const [mobile_number, setMobile_number] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [facebookToken, setFacebookToken] = useState(null);

  // Toast 메세지
  const notify = (message) => {
    toast.info(message, {
      position: "bottom-left",
    });
  };

  // 로그인 버튼 클릭
  const handleSignIn = async () => {
    try {
      const response = await axios.post(`${HWAN_URL}/user/sign-in`, {
        mobile_number,
        email,
        password,
      });

      // console.log("signIn..", response);
      localStorage.setItem("access_token", response.data.token);

      props.history.push("/");
    } catch (e) {
      console.log(e.response);
      e.response && notify(e.response.data.message);
    }
  };

  // 페이스북 로그인
  const postToken = async () => {
    console.log("postToken..", facebookToken);
    try {
      const res = await axios.post(`https://10.58.3.89:8000/user/fblogin`, {
        token: facebookToken,
      });
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };

  const didMountRef = useRef(false);
  useEffect(() => {
    if (didMountRef && facebookToken) postToken();
    else didMountRef.current = true;
  });

  const responseFacebook = (response) => {
    console.log("facebook", response);
    setFacebookToken(response.accessToken);
  };

  // 카카오 로그인
  const kakaoLogin = () => {
    Kakao.Auth.login({
      success: function (res) {
        console.log(res);
        fetch(`${HWAN_URL}/user/socialuser`, {
          method: "GET",
          headers: {
            "Content-type": "application/json",
            Authorization: res.access_token,
            Type: 3,
          },
        })
          .then((res) => res.json())
          .then((res) => {
            console.log(res);
            if (res.message === "회원가입 필요") {
              return (
                console.log("info.id: ", res.info.id),
                props.socialId(res.info.id),
                props.history.push("/social/signUp")
              );
            } else {
              return (
                localStorage.setItem("token", res.token),
                props.history.push("/")
              );
            }
          });
      },
      fail: function (err) {
        console.log(err);
        notify(err);
      },
    });
  };

  return (
    <>
      <NavBar props={props} />
      <SignInWrapper>
        <BoxSize>
          <LogoWrapper>
            <Link to={"/"}>
              <Logo src="https://pilly.kr/images/logo-colored.png" />
            </Link>
          </LogoWrapper>

          <Input
            placeholder="이메일 또는 전화번호를 입력하세요."
            onChange={(e) =>
              e.target.value.includes("@")
                ? setEmail(e.target.value)
                : setMobile_number(e.target.value)
            }
            onKeyUp={() => (window.event.keyCode === 13 ? handleSignIn() : "")} // 엔터로 로그인
          />
          <Input
            placeholder="비밀번호를 입력하세요."
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            onKeyUp={() => (window.event.keyCode === 13 ? handleSignIn() : "")}
          />
          <LoginBtn onClick={handleSignIn}>로그인</LoginBtn>
          <Find>
            <PwJoin>비밀번호 찾기</PwJoin>
            <Link to={"/signup"}>
              <PwJoin>회원가입</PwJoin>
            </Link>
          </Find>
          <KakaoBtn onClick={() => kakaoLogin()}>
            <Sns src="https://pilly.kr/images/icons/auth/icon-auth-kakaotalk.png" />
            KAKAO 로그인
          </KakaoBtn>
          {/* 주소로 redirect */}

          <a href="https://www.facebook.com/v2.11/dialog/oauth?client_id=1081499318875893&redirect_uri=https://localhost:3000/">
            <FbBtn>
              <Sns src="https://pilly.kr/images/icons/auth/icon-auth-facebook.png" />
              FACEBOOK
            </FbBtn>
          </a>
          {/* react-facebook Library */}
          {/* <FacebookLogin
          appId="1081499318875893"
          autoLoad={false}
          callback={responseFacebook}
          cssClass={<FbBtn />}
          icon={
            <Sns src="https://pilly.kr/images/icons/auth/icon-auth-facebook.png" />
          }
        /> */}
          <NaverBtn>
            <Sns src="https://pilly.kr/images/icons/auth/icon-auth-naver.png" />
            NAVER 로그인
          </NaverBtn>
        </BoxSize>
        <StyledToastContainer />
      </SignInWrapper>
    </>
  );
}

const mapDispatchProps = (dispatch) => ({
  socialId: (id) => dispatch(socialId(id)),
});

export default connect(null, mapDispatchProps)(SignIn);

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
  background-color: ${color.pillyColor};
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

const StyledToastContainer = styled(ToastContainer).attrs({
  className: "toast-container",
})`
  width: 300px;
  font-size: 16px;

  .Toastify__toast-body {
    margin-left: 10px;
  }
`;
