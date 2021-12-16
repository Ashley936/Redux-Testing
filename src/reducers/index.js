import commentReducer from "./comment";
import { combineReducers } from "redux";

export default combineReducers({
    comments: commentReducer
})