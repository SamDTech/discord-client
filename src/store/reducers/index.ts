import { combineReducers } from "redux";
import { alertReducer } from "./alertReducer";
import { authReducer } from "./authReducer";
import { friendsReducer } from "./friendsReducer";

const reducers = combineReducers({
  // reducers go here
  auth: authReducer,
  alert: alertReducer,
  friends: friendsReducer
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
