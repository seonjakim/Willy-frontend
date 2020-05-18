import { combineReducers } from "redux";

const initialState = [];

const cartList = (state = initialState, action) => {
  switch ((action, type)) {
    case "ADD_CART":
      return [...state, action.payload];
    default:
      return state;
  }
};

export default combineReducers({ cartList });
