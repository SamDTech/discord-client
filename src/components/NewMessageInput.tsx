import React, { useState } from "react";
import { useSelector } from "react-redux";
import { styled } from "@mui/system";

const MainContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "60px",
});

const Input = styled("input")({
  width: "100%",
  height: "98%",
  border: "none",
  fontSize: "14px",
  padding: "0 10px",
  borderRadius: "8px",
  color: "white",
  backgroundColor: "#2f3136",
});

const NewMessageInput = () => {
  const [message, setMessage] = useState("");

  const { chosenChatDetails } = useSelector((state: any) => state.chat);

  const handleKeyPressed = (e: any) => {
    if (e.key === "Enter") {
      if (message.trim() !== "") {
        handleSendMessage();
        setMessage("");
      }
    }
  };

  const handleSendMessage = () => {
    if (message.trim() !== "") {
      const messageObject = {
        message: message,
        sender: "me",
        timestamp: new Date().toLocaleString(),
      };
      chosenChatDetails.messages.push(messageObject);
      setMessage("");
    }
  };

  return (
    <MainContainer>
      <Input
        placeholder={`Write message to ${chosenChatDetails.name}`}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyPressed}
      />
    </MainContainer>
  );
};

export default NewMessageInput;
