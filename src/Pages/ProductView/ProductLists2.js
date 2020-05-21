import React, { useState } from "react";
import styled from "styled-components";

function ProductLists2(props) {
  const [answerIdx, setAnswerIdx] = useState("");
  const [answer, setAnswer] = useState(true);

  const createAnswer = (idx) => {
    setAnswerIdx(idx);
    answer === true ? setAnswer(false) : setAnswer(true);
  };
  return (
    <Body>
      <>
        <img src={props.datas[3].frequent_question_list[0].image_url} alt="" />
        <Title>
          필리 {props.datas[4].material_list[0].nutrial}이 궁금하세요?
        </Title>
        {props.datas[3].frequent_question_list.map((data, idx) => {
          return (
            <QNAbox key={idx} onClick={() => createAnswer(idx)}>
              <BoldText>
                <span>Q. </span>
                {data.question}
              </BoldText>
              {answerIdx === idx && answer === true ? (
                <img
                  src="https://pilly.kr/images/icons/common/icon-arrow-up.png"
                  alt=""
                />
              ) : (
                <img
                  src="https://pilly.kr/images/icons/common/icon-arrow-down.png"
                  alt=""
                />
              )}
              {answer === true || answerIdx !== idx ? (
                <SubText>
                  <div>
                    <span>A. </span>
                    {data.answer}
                  </div>
                </SubText>
              ) : (
                ""
              )}
            </QNAbox>
          );
        })}
      </>
    </Body>
  );
}

export default ProductLists2;

//styled
const Body = styled.div`
  padding: 200px 0 60px 0;
  width: 1024px;
  margin: 0 auto;
  img {
    width: 924px;
    height: 500px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
  }
`;

const Title = styled.p`
  font-size: 18px;
  color: #e26d59;
  font-weight: bold;
  margin: 60px auto 0 auto;
  padding: 0 78px;
`;

const QNAbox = styled.div`
  position: relative;
  background-color: white;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.06);
  width: 768px;
  margin: 20px auto 0 auto;
  cursor: pointer;

  img {
    position: absolute;
    right: 20px;
    top: 30px;
    width: 15px;
    height: 15px;
  }
`;

const BoldText = styled.div`
  font-size: 14px;
  font-weight: bold;
  background-color: white;
  width: 768px;
  padding: 28px 20px;
  span {
    color: #e26d59;
    font-weight: bold;
    font-size: 14px;
  }
`;

const SubText = styled.div`
  font-size: 14px;
  width: 768px;
  border-top: 1px solid #ddd;
  div {
    padding: 28px 20px;
    span {
      font-weight: bold;
      font-size: 14px;
    }
  }
`;
