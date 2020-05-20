import { combineReducers } from "redux";
import clickCounter from "./clickCounter";
import surveyForm from "./surveyForm";
import surveyAnswer from "./surveyAnswer";

export default combineReducers({
  clickCounter,
  surveyForm,
  surveyAnswer,
});
