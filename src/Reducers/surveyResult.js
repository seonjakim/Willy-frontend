const initialState = {
  Banner: {
    name: "",
    type: "",
    summary: "",
    prescriptions: [],
  },
  UserInfo: {
    age: "",
    sex: "",
    bmi: "",
  },
  Summary: {
    name: "",
    height: "",
  },
  Recommendations: {
    amount: 0,
    name: "",
    nutrients: [],
  },
};

const surveyResult = (state = initialState, action) => {
  console.log("payload..", action.payload);
  switch (action.type) {
    case "GET_RESULT":
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default surveyResult;
