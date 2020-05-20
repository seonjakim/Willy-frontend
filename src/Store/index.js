import { createStore } from "redux";
import combinedReducer from "../Reducers";

export default createStore(combinedReducer);
