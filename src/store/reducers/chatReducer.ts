import { ActionType } from "../actionTypes";

interface ChosenPayload {
  _id: string;
  username: string;
  chatType: string;
}

const initialState = {
  chosenChatDetails: null,
  chatType: null,
  messages: [],
};

interface Action {
  type: string;
  payload: {
    _id: string;
    username: string;
    chatType: string;
  };
}

export const chatReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.SET_ACTIVE_CONVERSATION:
      return {
        ...state,
        chosenChatDetails: {
          _id: action.payload._id,
          username: action.payload.username,
        },
        chatType: action.payload.chatType,
        messages: [],
      };

    case ActionType.SET_CHAT_TYPE:
      return { ...state, chatType: action.payload };

    case ActionType.SET_CHAT_MESSAGES:
      return { ...state, messages: action.payload };

    default:
      return state;
  }
};
