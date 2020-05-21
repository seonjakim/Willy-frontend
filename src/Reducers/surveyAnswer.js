const initialState = {
  question: "0",
  answer: [0],
  box: "",
};

const surveyAnswer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ANSWER":
      return {
        // ...state,
        // ...initialState,
        ...action.payload,
      };
    default:
      return { ...state };
  }
};

export default surveyAnswer;
