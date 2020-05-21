import { combineReducers } from "redux";
import clickCounter from "./clickCounter";
import surveyForm from "./surveyForm";
import surveyAnswer from "./surveyAnswer";
import CartNum from "./cartNum";
import socialIdStore from "./socialIdStore";

export default combineReducers({
  clickCounter,
  CartNum,
  surveyForm,
  surveyAnswer,
  socialIdStore,
});
