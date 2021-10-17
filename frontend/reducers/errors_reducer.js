import { combineReducers } from "redux";
import videoErrorsReducer from "./video_errors_reducer";
import sessionErrorsReducer from "./session_errors_reducer";

const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  videos: videoErrorsReducer,
});

export default errorsReducer;
