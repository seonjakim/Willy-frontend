const initialState = [];

const CartNum = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_NAVCART":
      return Array.from(new Set([...state, action.payload]));
    default:
      return [...state];
  }
};

export default CartNum;
