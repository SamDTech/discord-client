import React, { useEffect, useRef } from "react";
import { styled } from "@mui/system";
import MessageHeader from "./MessageHeader";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/reducers";
import DUMMY_MESSAGES from "../DUMMYDATA";
import Message from "./Message";

const MainContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: "calc(100% - 60px)",
  overflow: "auto",
  alignItems: "center",
});

const convertDateToReadable = (date: Date, format: string) => {
  const map = {
    mm: date.getMonth() + 1,
    dd: date.getDate(),
    yy: date.getFullYear().toString().slice(-2),
    yyyy: date.getFullYear(),
  };

  return format.replace(
    /mm|dd|yy|yyy/gi,
    //@ts-ignore
    (matched: number | string) => map[matched]
  );
};

const Messages = () => {
  const { chosenChatDetails, messages } = useSelector(
    (state: any) => state.chat
  );

  return (
    <MainContainer>
      <MessageHeader name={chosenChatDetails?.username} />
      {messages && messages.map((message: any, index: number) => {
        const sameAuthor =
          index > 0 &&
          messages[index].authorId._id === messages[index - 1].authorId._id;

        const sameDay =
          index > 0 &&
          convertDateToReadable(new Date(message.date), "dd/mm/yy") ===
            convertDateToReadable(
              new Date(messages[index - 1].date),
              "dd/mm/yy"
            );
        return (
          <Message
            key={message._id}
            message={message}
            date={convertDateToReadable(new Date(message.date), "dd/mm/yy")}
            sameAuthor={sameAuthor}
          />
        );
      })}
    </MainContainer>
  );
};

export default Messages;
