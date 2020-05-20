import { CLICK_MINUS, CLICK_PLUS } from "../Actions/actionTypes";

const initialState = {
  click: -1,
  diff: 1,
};

const clickCounter = (state = initialState, action) => {
  switch (action.type) {
    case CLICK_MINUS:
      return {
        ...state,
        click: state.click - state.diff,
      };
    case CLICK_PLUS:
      return {
        ...state,
        click: state.click + state.diff,
      };
    case "CLICK_FINISH":
      return {
        ...state,
        click: "FINISH",
      };
    default:
      return state;
  }
};

export default clickCounter;
