import { ActionType } from "../actionTypes";

const initialState = {
  userInfo: null,
  loading: false,
};

interface Action {
  type: string;
  payload: any;
}

export const authReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.USER_LOGIN_REQUEST:
      return {...state, loading: true };

    case ActionType.USER_LOGIN_SUCCESS:
      return {...state, loading: false, userInfo: action.payload };

    case ActionType.USER_LOGIN_FAIL:
      return {...state, loading: false, error: action.payload };

    // case LOGOUT:
    //   return {};

    default:
      return state;
  }
};
