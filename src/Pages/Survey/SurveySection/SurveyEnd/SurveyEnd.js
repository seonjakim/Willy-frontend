import React, { useState, useEffect } from "react";
import styled from "styled-components";

function SurveyEnd({ history }) {
  useEffect(() => {
    animateCircle();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const [num, setNum] = useState(0);

  const animateCircle = () => {
    const ctx = document.querySelector(".canvas").getContext("2d");
    ctx.lineWidth = 4;
    ctx.strokeStyle = "red";
    const end = Math.PI * 1.5;
    for (let i = 0; i <= 100; i++) {
      setTimeout(() => {
        ctx.clearRect(0, 0, 200, 200);
        ctx.beginPath();
        ctx.arc(50, 50, 40, Math.PI * 1.5, (end / 100) * i - 0.0045);
        ctx.stroke();
        setNum(i);
        if (i === 100) setTimeout(() => history.push("/result"), 1200);
      }, i * 30);
    }
  };

  return (
    <SurveyEndWrapper>
      <Canvas width="100" height="100" className="canvas" />
      <Score>
        <Num>{num}</Num>
      </Score>
      <EndHeader>
        <Title>
          <p>답변 내용을</p>
          <p>분석하고 있습니다.</p>
        </Title>
      </EndHeader>
      <EndIntro>
        <Description>
          <p>
            필리는 전문가가 참여한
            <br />
            과학적 알고리즘을 통해 결과를 제공합니다.
            <br />
            <br />
            <span>잠시만 기다려 주십시오.</span>
          </p>
        </Description>
        {/* <ButtonStart onClick={handleClickPlus}>시작하기</ButtonStart>
        <Warning>
          ※ 질병의 진단 및 치료는 전문적인 의료기관을 이용하세요.
        </Warning> */}
      </EndIntro>
    </SurveyEndWrapper>
  );
}

export default SurveyEnd;

const SurveyEndWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const Canvas = styled.canvas`
  position: relative;
  top: 70px;
  left: 255px;
  width: 90px;
  height: 90px;
`;

const Score = styled.span`
  display: inline-block;
  position: absolute;
  width: 50px;
  top: 100px;
  left: 275px;
  vertical-align: middle;
  text-align: center;
  font-size: 13px;
  color: #333;
`;

const Num = styled.em`
  display: inline-block;
  font-size: 22px;
  font-weight: 400;
`;

const EndHeader = styled.div`
  position: relative;
  margin: 110px auto 70px;
  width: 418px;
`;

const Title = styled.div`
  margin-top: 32px;
  > * {
    font-size: 30px;
    line-height: 40px;
    font-weight: 700;

    &:first-child {
      font-weight: 300;
    }
  }
`;

const EndIntro = styled.div`
  position: relative;
  margin: auto;
  margin-bottom: 150px;
  width: 418px;
`;

const Description = styled.div`
  > p {
    line-height: 24px;
    font-size: 16px;
    color: #333;

    span {
      font-size: 13px;
      color: #848484;
    }
  }
`;

const ButtonStart = styled.button`
  display: inline-block;
  margin-top: 120px;
  padding: 0 36px;
  width: 418px;
  height: 50px;
  line-height: 50px;
  background-color: #333;
  border: none;
  border-radius: 25px;
  vertical-align: middle;
  text-align: center;
  font-weight: 700;
  color: #fff;
`;

const Warning = styled.p`
  margin-top: 28px;
  font-size: 13px;
  line-height: 24px;
  color: #848484;
`;
