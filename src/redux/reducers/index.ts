
import { combineReducers } from "redux";
import userReducer from "./userReducer";
import loggedReducer from "./loggedReducer";
const rootReducer = combineReducers({
	user: userReducer,
	logged: loggedReducer
});

export default rootReducer;
