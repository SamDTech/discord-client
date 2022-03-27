import { combineReducers } from "redux";
import { alertReducer } from "./alertReducer";
import { authReducer } from "./authReducer";

const reducers = combineReducers({
  // reducers go here
  auth: authReducer,
  alert: alertReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
