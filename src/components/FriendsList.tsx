import { styled } from "@mui/system";
import React from "react";
import FriendListItem from "./FriendListItem";

const DummyFriends = [
  {
    id: 1,
    username: "johndoe",
    isOnline: true,
  },
  {
    id: 2,
    username: "johndoe",
    isOnline: false,
  },

  {
    id: 3,
    username: "johndoe",
    isOnline: false,
  },
];

const MainContainer = styled("div")({
  flexGrow: 1,
  width: "100%",
});

const FriendsList = () => {
  return (
    <MainContainer>
      {DummyFriends.map((friend) => {
        return <FriendListItem key={friend.id} friend={friend} />;
      })}
    </MainContainer>
  );
};

export default FriendsList;
