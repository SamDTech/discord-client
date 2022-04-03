import { styled } from "@mui/system";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import MessengerContent from "./MessengerContent";
import WelcomeMessage from "./WelcomeMessage";

const MainContainer = styled("div")({
  flexGrow: 1,
  display: "flex",
  backgroundColor: "#36393f",
  marginTop: "48px",
});

const Messenger = () => {
  const { chosenChatDetails } = useSelector((state: any) => state.chat);
  return (
    <MainContainer>
      {!chosenChatDetails ? (
        <WelcomeMessage />
      ) : (
        <MessengerContent chosenChat={chosenChatDetails} />
      )}
    </MainContainer>
  );
};

export default Messenger;
