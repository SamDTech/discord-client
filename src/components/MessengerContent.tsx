import { Typography } from "@mui/material";
import { styled } from "@mui/system";
import React, { useEffect } from "react";
import Messages from "./Messages";
import NewMessageInput from "./NewMessageInput";

const Wrapper = styled("div")({
  flexGrow: 1,
  // height: "100%",
  // alignItems: "center",
  // justifyContent: "center",
  // display: "flex",
});

interface IMessengerProps {
  chosenChat: any;
}

const MessengerContent: React.FC<IMessengerProps> = ({ chosenChat }) => {
  useEffect(() => {
    // TODO: fetching chat history for the chosen chat
  }, [chosenChat]);

  return (
    <Wrapper>
      <Messages />
      <NewMessageInput />
    </Wrapper>
  );
};

export default MessengerContent;
