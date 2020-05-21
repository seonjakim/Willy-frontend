const initialState = [];

const CartNum = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_NAVCART":
      return [...state, action.payload];
    default:
      return [...state];
  }
};

export default CartNum;
