import { CLICK_PLUS, CLICK_MINUS, GET_SURVEY } from "./actionTypes";

export const clickPlus = () => {
  return {
    type: CLICK_PLUS,
  };
};

export const clickMinus = () => {
  return {
    type: CLICK_MINUS,
  };
};

export const addNavCart = (id) => {
  return {
    type: "ADD_NAVCART",
    payload: id,
  };
};

export const clickFinish = () => {
  return {
    type: "CLICK_FINISH",
  };
};

// survey form
export const getSurvey = (survey) => {
  return {
    type: GET_SURVEY,
    payload: survey,
  };
};

// survey answer
export const getAnswer = (answer) => {
  return {
    type: "GET_ANSWER",
    payload: answer,
  };
};

export const socialId = (id) => {
  return {
    type: "SOCIAL_ID",
    payload: id,
  };
};

// survey result
export const getResult = (result) => {
  return {
    type: "GET_RESULT",
    payload: result,
  };
};
