import { Button, Typography } from "@mui/material";
import React from "react";
import Avartar from "./Avartar";
import OnlineIndicator from "./OnlineIndicator";
import { useDispatch, useSelector } from "react-redux";
import { AnyAsyncThunk } from "@reduxjs/toolkit/dist/matchers";
import { ChatType } from "../store/actionTypes";

interface IFriendListItemProps {
  _id: number;
  username: string;
  isOnline: boolean;
  name: string;
}

const FriendListItem: React.FC<{ friend: IFriendListItemProps }> = ({
  friend: { _id, username, isOnline, name },
}) => {
  const dispatch = useDispatch();

  const handleChooseActiveConversation = () => {
    dispatch<any>({
      type: "SET_ACTIVE_CONVERSATION",
      payload: {
        _id,
        username,
        name,
        chatType: ChatType.PRIVATE,
      },
    });
  };

  return (
    <Button
    onClick={handleChooseActiveConversation}
      style={{
        width: "100%",
        height: "42px",
        marginTop: "10px",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        textTransform: "none",
        color: "black",
        position: "relative",
      }}
    >
      <Avartar username={username} />

      <Typography
        sx={{
          marginLeft: "7px",
          fontWeight: "700",
          color: "#8e9297",
        }}
        variant="subtitle1"
        align="left"
      >
        {username}
      </Typography>

      {isOnline && <OnlineIndicator />}
    </Button>
  );
};

export default FriendListItem;
