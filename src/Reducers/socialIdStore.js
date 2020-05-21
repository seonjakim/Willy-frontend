const initialState = 0;

const socialIdStore = (state = initialState, action) => {
  switch (action.type) {
    case "SOCIAL_ID":
      return action.payload;
    default:
      return state;
  }
};

export default socialIdStore;
