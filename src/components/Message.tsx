import React from "react";
import { styled } from "@mui/system";
import Avartar from "./Avartar";
import { Typography } from "@mui/material";

interface IMessageProps {
  _id: string;
  content: string;
  sameAuthor: boolean;
  authorId: {
    username: string;
  };
  date: string;
  sameDay: boolean;
}

const MainContainer = styled("div")({
  width: "97%",
  display: "flex",
  flexDirection: "column",
  marginTop: "10px",
});

const AvatarContainer = styled("div")({
  width: "70px",
});

const MessageContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
});

const MessageContent = styled("div")({
  color: "#dcddde",
});

const SameAuthorMessageContent = styled("div")({
  color: "#dcddde",
  width: "97%",
});

const SameAuthorMessageText = styled("span")({
  marginLeft: "70px",
});

const Message: React.FC<{
  message: IMessageProps;
  sameAuthor: boolean;
  date: string;
}> = ({ message: { _id, content, authorId, sameDay }, sameAuthor, date }) => {
  if (sameAuthor && sameDay) {
    return (
      <SameAuthorMessageContent>
        <SameAuthorMessageText>{content}</SameAuthorMessageText>
      </SameAuthorMessageContent>
    );
  }
  return (
    <MainContainer>
      <AvatarContainer>
        <Avartar username={authorId.username} />
      </AvatarContainer>
      <MessageContainer>
        <Typography
          sx={{
            fontSize: "16px",
            color: "#fff",
          }}
        >
          {authorId.username}{" "}
          <span style={{ fontSize: "12px", color: "#72767d" }}>{date}</span>
        </Typography>
        <MessageContent>{content}</MessageContent>
      </MessageContainer>
    </MainContainer>
  );
};

export default Message;
