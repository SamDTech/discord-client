import { ActionType } from "./../store/actionTypes/index";
import store from "../store/store";

export const updateChatHistoryIfActive = (data: {
  participants: any;
  messages: any;
}) => {
  const { participants, messages } = data;

  //find id of user from token and id from active conversation
  const chat: any = store.getState().chat;
  const receiverId = chat?.chosenChatDetails?._id;
  const userId = store.getState().auth.userInfo._id;

  console.log("data", data)

  if (userId && receiverId) {
    const usersInConversation = [userId, receiverId];

    updateChatHistoryIfConversationActive({
      participants,
      usersInConversation,
      messages,
    });
  }
};

const updateChatHistoryIfConversationActive = (data: {
  participants: any[];
  usersInConversation: any[];
  messages: any[];
}) => {
  const result = data.participants.every((participantId) => {
    return data.usersInConversation.includes(participantId);
  });

  if (result) {
    store.dispatch({
      type: ActionType.SET_CHAT_MESSAGES,
      payload: data.messages,
    });
  }
};
