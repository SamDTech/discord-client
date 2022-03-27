import { ActionType } from "../actionTypes";

const initialState = {
  showAlertMessage: false,
  alertMessageContent: '',
};

interface Action {
  type: string;
  payload: string;
}

export const alertReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.OPEN_ALERT_MESSAGE:

      return {
        ...state,
        showAlertMessage: true,
        alertMessageContent: action.payload,
      };

    case ActionType.CLOSE_ALERT_MESSAGE:
      return { ...state, showAlertMessage: false, alertMessageContent: '' };

    default:
      return state;
  }
};
