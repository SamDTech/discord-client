import { styled } from "@mui/system";
import React from "react";
import AddFriendButton from "./AddFriendButton";
import FriendsList from "./FriendsList";
import FriendsTitle from "./FriendsTitle";
import PendingInvitaionsList from "./PendingInvitaionsList";

const MainContainer = styled("div")({
  width: "224px",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "#2f3136",
});

const FriendSidebar = () => {
  return (
    <MainContainer>
      <AddFriendButton />
      <FriendsTitle title="Private Messages" />
      <FriendsList />
      <FriendsTitle title="Invitations" />
      <PendingInvitaionsList />
    </MainContainer>
  );
};

export default FriendSidebar;
