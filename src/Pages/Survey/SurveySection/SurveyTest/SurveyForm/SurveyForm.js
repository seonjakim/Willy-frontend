import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import axios from "axios";
import { connect } from "react-redux";
import { getSurvey, clickFinish } from "../../../../../Actions";
import { HO_URL } from "../../../../../Constants";

import SurveyButton from "../SurveyButton/SurveyButton";

function SurveyForm({ click, surveyForm, handleGetSurvey, handleClickFinish }) {
  const [radioClicked, setRadioClicked] = useState(null);
  const [checkboxClicked, setCheckboxClicked] = useState([]);
  const [textInput, setTextInput] = useState("");
  const [name, setName] = useState("");

  const {
    id,
    person_id,
    question,
    detail_question,
    sub_question,
    image_url,
    limit,
  } = surveyForm;

  const answer_list = surveyForm.answer_list;

  let box = "";
  const setAnswer = () => {
    if (radioClicked) {
      box = "radio";

      return [answer_list[radioClicked - 1].id];
    } else if (textInput) {
      box = "textbox";

      return [textInput];
    } else if (checkboxClicked.length > 0) {
      box = "checkbox";

      return checkboxClicked
        .map((check, idx) => (check ? answer_list[idx].id : undefined))
        .filter((e) => e !== undefined);
    }
  };

  console.log("name..", name);
  console.log("answer..", setAnswer());
  console.log("personID from Form..", person_id);
  console.log("box", box);

  // 유저 인풋 -> api 바디에 포함
  let userInput = {
    question: id ? id : "0",
    answer: setAnswer() || [0],
    person_id: person_id,
    box: box,
  };

  // SurveyForm Fetch
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.post(`${HO_URL}/survey`, userInput);
      console.log("response!", response.data.survey);

      if (response.data.message && response.data.message === "finish") {
        //마지막 설문시
        //click 마지막 == .length
        localStorage.setItem("survey", 1);
        localStorage.setItem("person_id", person_id);
        handleClickFinish();
      } else {
        console.log(response.data.survey);
        handleGetSurvey(response.data.survey[0]);
      }
    };
    fetchData();

    return () => {
      setRadioClicked(null); // 다음 설문 이동 시(count 증가) 버튼 클릭 초기화
      setCheckboxClicked([]); // ""
      setTextInput(""); // ""
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [handleGetSurvey, click]);

  // 체크박스 초기화
  useEffect(() => {
    const initializeContent = () => {
      if (answer_list.map((e) => e.box).includes("checkbox")) {
        const checkboxClicked = Array.from(
          { length: answer_list.length },
          () => false
        );
        setCheckboxClicked(checkboxClicked);
      }
    };
    initializeContent();
  }, [answer_list]);

  const handleRadioClick = (index) => {
    setRadioClicked(index);
  };

  const handleCheckboxClick = (index, limit) => {
    const clickedNum = checkboxClicked.filter((check) => check === true).length;

    setCheckboxClicked(
      checkboxClicked.map((checkbox, idx) => {
        if (idx === index) {
          return !checkbox;
        } else if (clickedNum < Number(limit)) {
          return checkbox;
        }
      })
    );
  };

  return (
    <SurveyFormWrapper>
      <Num>질문 {click + 1}</Num>
      {detail_question && (
        <>
          <Space>|</Space>
          <Num>{detail_question}</Num>
        </>
      )}
      <Title>{question.startsWith("님") ? name + question : question}</Title>
      <Image img={image_url} />
      <Content>{sub_question}</Content>
      <AnswerWrapper>
        {answer_list.map((e, index) => (
          <AnswerList
            key={index}
            radioClicked={radioClicked}
            checkboxClicked={
              checkboxClicked && checkboxClicked[index] === true ? index + 1 : 0
            }
          >
            {e.box !== "textbox" && (
              <Label
                onClick={() => {
                  e.box === "radio"
                    ? handleRadioClick(index + 1)
                    : handleCheckboxClick(index, limit);
                }}
              >
                {e.box === "radio" ? <Radio /> : <Checkbox />}
                {e.answer}
              </Label>
            )}
            {e.box !== "radio" && e.box !== "checkbox" && (
              <InputContent
                type={
                  answer_list[0].placeholder === "이름" ||
                  answer_list[0].placeholder === "이메일" ||
                  answer_list.some((answer) => answer.placeholder === "기타")
                    ? "text"
                    : "number"
                }
                placeholder={e.placeholder}
                value={textInput}
                onChange={(e) => {
                  if (click === 0) setName(e.target.value);
                  setTextInput(e.target.value);
                }}
              />
            )}
          </AnswerList>
        ))}
      </AnswerWrapper>
      <SurveyButton answer={setAnswer()} />
    </SurveyFormWrapper>
  );
}

const mapStateToProps = (state) => ({
  click: state.clickCounter.click,
  surveyForm: state.surveyForm,
});

const mapDispatchToProps = (dispatch) => ({
  handleGetSurvey: (survey) => dispatch(getSurvey(survey)), //survey form 질문
  handleClickFinish: () => dispatch(clickFinish()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SurveyForm);

const SurveyFormWrapper = styled.div`
  position: relative;
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

const Image = styled.span`
  position: absolute;
  top: 40px;
  right: 0px;
  width: 60px;
  height: 60px;
  background-image: url(${(props) => props.img});
  background-size: 60px 60px;
  background-repeat: no-repeat;
  background-position: 50% 50%;
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
