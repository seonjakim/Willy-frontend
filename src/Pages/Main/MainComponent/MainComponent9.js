import React from "react";
import styled from "styled-components";

function MainPage9() {
  return(
    <Main>
      <div>
        <TOP>
          <TOPText>
            <TopSpan>이용약관</TopSpan>
            <TopSpan>개인정보처리방침</TopSpan>
            <TopSpan>고객센터</TopSpan>
          </TOPText>
          <TOPText>
            <Img src="https://img.pilly.kr/main/v201911/icon-instagram.png" alt=""/>
            <Img src="https://img.pilly.kr/main/v201911/icon-facebook.png" alt=""/>
            <Img src="https://img.pilly.kr/main/v201911/icon-blog.png" alt=""/>
          </TOPText>
        </TOP>
        <Middle>
          <MiddleText>
            <Span>pilly</Span>
            <p>(주)케어위드 |사업자번호: 759-87-00821|대표: 고성훈</p>
            <p>개인정보취급담당자: 김종령</p>
            <p>서울시 관악구 관악로 158 BS타워 2층|연구소: 서울 강남구 선릉로 661, 석영빌딩 303호</p>
            <p>통신판매업신고: 제 2018-서울관악-0832 호 사업자정보확인</p>
            <p>유통판매업신고: 제 2018-0107314 호</p>
            <p>건강기능식품판매업신고: 제 2018-0107318 호</p>
          </MiddleText>
          <div>
            <Span>고객센터</Span>
            <p>고객문의: cs@carewith.us|전화: 02-6203-9810</p>
            <p>제휴문의: marketing@carewith.us|전화: 02-6203-9811</p>
          </div>
        </Middle>
        <span>ⓒ Carewith Inc. All Rights Reserved.</span>
      </div>
    </Main>
  )
}

export default MainPage9;

//style
const Main = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 12px;
  padding: 25px 50px;
  line-height:27.6px;
  width: 1124px;
  margin: 0 auto;
`;

const TOP = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TOPText = styled.div`
`;

const TopSpan = styled.span`
  margin-right: 30px;
  font-weight: bold;
`;

const Img = styled.img`
  margin-left: 30px;
`;

const Middle = styled.div`
  display: flex;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  margin-top: 23px;
  padding: 18px 0;
`;

const MiddleText = styled.div`
  width: 664px;
`;

const Span = styled.span`
  font-weight: bold;
  padding: 18px 0;
`;