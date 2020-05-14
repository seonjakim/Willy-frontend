import React, { useState, useEffect } from "react";
import styled from "styled-components";

function MainPage5(props) {
  const [QandA, setQandA] = useState([]);
  const [answerIdx, setAnswerIdx] = useState("");
  const [answer, setAnswer] = useState(false);

  useEffect(()=>{
    setQandA(props.datas)
  }, [props.datas])

  const createAnswer = (idx) => {
    setAnswerIdx(idx);
    (answer === true) ? setAnswer(false):setAnswer(true);
  }

  return(
    <Main>
      <Span>무엇이든 답해드려요.</Span>
      <QNAwrapper>
        <QNAlist>
          {QandA.map((data, idx) => {
            return(
              <QNAbox key={idx} onClick={()=>createAnswer(idx)}>
                <BoldText>{data.title}</BoldText>
                {(answerIdx === idx && answer === true) ? 
                <Img src="https://pilly.kr/images/icons/common/icon-arrow-up.png" alt=""/>:<Img src="https://pilly.kr/images/icons/common/icon-arrow-down.png" alt=""/>}
                {(answerIdx === idx) ? <SubText>{data.content}</SubText>:""}
              </QNAbox>
            )})}
        </QNAlist>
        <Img2 src="https://img.pilly.kr/main/v201911/qna2-pc@3x.jpg" alt=""/>
      </QNAwrapper>
    </Main>
  )
}

export default MainPage5;

//style
const Main = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #fafafa;
  padding-top: 100px;
`;

const Span = styled.span`
  align-self: center;
  font-size: 19px;
  font-weight: 700;
`;

const QNAwrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 100px 0;
  width: 100%;
`;

const QNAlist = styled.div`
`;

const QNAbox = styled.div`
  position: relative;
  background-color: white;
  box-shadow: 0 2px 6px 0 rgba(0,0,0,0.06);
  width: 512px;
  padding: 28px 20px;
  margin-top: 20px;
  cursor: pointer;
`;

const Img = styled.img`
  position: absolute;
  right: 20px;
  top: 48px;
`;

const BoldText = styled.div`
  font-size: 17px;
  font-weight: bold;
  background-color: white;
  width: 400px;
`;

const SubText = styled.div`
  font-size: 14px;
  width: 400px;
  padding-top: 16px;
  margin-top: 26px;
  border-top: 1px solid #ddd;
`;

const Img2 = styled.img`
  width: 481px;
  height: 481px;
  margin: 20px 0 0 31px;
`;