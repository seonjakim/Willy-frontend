import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";

function SurveyForm(props) {
  // console.log(props.survey);
  const count = props.count;
  const { section, problem, title, content, list } = props.survey;

  const [radioClicked, setRadioClicked] = useState(null);
  const [checkboxClicked, setCheckboxClicked] = useState([]);

  useEffect(() => {
    //list input에 checkbox 포함 시 checkboxClicked 초기화
    if (list.map((e) => e.input).includes("checkbox")) {
      const initCheckboxClicked = () => {
        const checkboxClicked = Array.from(
          { length: list.length },
          () => false
        );
        setCheckboxClicked(checkboxClicked);
      };
      initCheckboxClicked();
    }
    return () => {
      setRadioClicked(null); // 다음 설문 이동 시(count 증가) 버튼 클릭 초기화
      setCheckboxClicked(null); // ""
    };
  }, [count, list]);

  const handleRadioClick = (index) => {
    setRadioClicked(index);
  };

  const handleCheckboxClick = (index) => {
    setCheckboxClicked(
      checkboxClicked.map((checkbox, idx) =>
        idx === index ? !checkbox : checkbox
      )
    );
  };

  return (
    <SurveyFormWrapper>
      <Num>질문 {count + 1}</Num>{" "}
      {problem ? (
        <>
          <Space>|</Space>
          <Num>{problem}</Num>
        </>
      ) : (
        ""
      )}
      <Title>{title}</Title>
      <Content>{content}</Content>
      <AnswerWrapper>
        {list.map((e, index) => (
          <AnswerList
            key={index}
            radioClicked={radioClicked}
            checkboxClicked={
              checkboxClicked && checkboxClicked[index] === true ? index + 1 : 0
            }
          >
            {e.label !== undefined ? (
              <Label
                onClick={() => {
                  e.input === "radio"
                    ? handleRadioClick(index + 1)
                    : handleCheckboxClick(index);
                }}
              >
                {e.input === "radio" ? <Radio /> : <Checkbox />}
                {e.label}
              </Label>
            ) : (
              ""
            )}
            {e.input !== "radio" && e.input !== "checkbox" ? (
              <InputContent
                type={e.input}
                placeholder={e.placeholder}
                min={e.min}
                max={e.max}
              />
            ) : (
              ""
            )}
          </AnswerList>
        ))}
      </AnswerWrapper>
    </SurveyFormWrapper>
  );
}

export default SurveyForm;

const SurveyFormWrapper = styled.div`
  padding-top: 36px;
  margin: 0 auto;
  width: 670px;
`;

const Num = styled.span`
  font-size: 16px;
  font-weight: 700;
  color: #999;
`;

const Space = styled.div`
  display: inline-block;
  width: 25px;
  margin: 0 auto;
  text-align: center;
  font-size: 16px;
  font-weight: 700;
  color: #999;
`;

const Title = styled.p`
  position: relative;
  padding: 10px 0 10px;
  line-height: 1.2;
  font-size: 24px;
  font-weight: 700;
  color: #333;
`;

const Content = styled.p`
  font-size: 16px;
  color: #999;
  padding-bottom: 15px;
`;

const AnswerWrapper = styled.ul`
  border-top: 1px solid #eee;
  padding: 28px 0;
`;

const Label = styled.label`
  position: relative;
  display: inline-block;
  padding-left: 44px;
  line-height: 24px;
  min-height: 24px;
  font-size: 16px;
  color: #333;
`;

const button = css`
  position: absolute;
  left: 0;
  top: 50%;
  margin-top: -12px;
  width: 24px;
  height: 24px;
`;

const Radio = styled.span`
  ${button}
  background-image: url("https://pilly.kr/images/icons/icon-radio-off@2x.png");
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 24px;
`;

const Checkbox = styled.span`
  ${button}
  background-image: url("https://pilly.kr/images/icons/icon-checkbox-off@2x.png");
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 24px;
`;

const AnswerList = styled.li`
  &:not(:first-child) {
    margin-top: 28px;
  }

  &:nth-child(${(props) => props.radioClicked}) {
    ${Radio} {
      background-image: url("https://pilly.kr/images/icons/icon-radio-on@2x.png");
    }
  }

  &:nth-child(${(props) => props.checkboxClicked}) {
    ${Checkbox} {
      background-image: url("https://pilly.kr/images/icons/icon-checkbox-on@2x.png");
    }
  }
`;

const InputContent = styled.input`
  position: relative;
  width: 100%;
  padding: 0 25px;
  height: 50px;
  font-size: 20px;
  border: 1px solid #d7d7d7;
  border-radius: 4px;
`;
