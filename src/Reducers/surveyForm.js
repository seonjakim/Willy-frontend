import { GET_SURVEY } from "../Actions/actionTypes";

const initialState = {
  id: 1,
  type: "",
  question: "",
  sub_question: "",
  image_url: "",
  limit: "",
  percentage: 0,
  person_id: 0,
  answer_list: [
    {
      id: 1,
      survey_question_id: 1,
      answer: "",
      placeholder: "",
      next_question: 2,
      box: "",
    },
  ],
};

const surveyForm = (state = initialState, action) => {
  switch (action.type) {
    case GET_SURVEY:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return { ...state };
  }
};

export default surveyForm;
