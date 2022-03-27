import { Button, Typography } from "@mui/material";
import React from "react";
import Avartar from "./Avartar";

interface IFriendListItemProps {
  id: number;
  username: string;
  isOnline: boolean;
}

const FriendListItem: React.FC<{ friend: IFriendListItemProps }> = ({
  friend: { id, username, isOnline },
}) => {
  return (
    <Button
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
    </Button>
  );
};

export default FriendListItem;
