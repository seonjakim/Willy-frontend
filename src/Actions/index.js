import { CLICK_PLUS, CLICK_MINUS } from "./actionTypes";

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
