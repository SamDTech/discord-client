import { ActionType } from "../actionTypes";

const initialState = {
  friends: [],
  pendingFriendsInvitations: [],
  onlineUsers: [],
};

interface Action {
  type: string;
  payload: any;
}

export const friendsReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.SET_PENDING_FRIENDS_INVITATIONS:
      return {
        ...state,
        pendingFriendsInvitations: action.payload,
      };

    case ActionType.SET_FRIENDS:
      return { ...state, friends: action.payload };

    case ActionType.SET_ONLINE_USERS:
      return { ...state, onlineUsers: action.payload };

    default:
      return state;
  }
};
