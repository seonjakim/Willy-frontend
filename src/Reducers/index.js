import { combineReducers } from "redux";
import clickCounter from "./clickCounter";
import CartNum from "./cartNum";

export default combineReducers({
  clickCounter,
  CartNum,
});
