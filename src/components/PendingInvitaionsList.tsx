import { styled } from "@mui/system";
import React from "react";
import PendingInvitationsListItem from "./PendingInvitationsListItem";

const DummyInvitaion = [
  {
    id: 1,
    senderId: {
      username: "johndoe",
      email: "john@gmail.com",
    },
  },

  {
    id: 2,
    senderId: {
      username: "johndoe",
      email: "john@gmail.com",
    },
  },

  {
    id: 3,
    senderId: {
      username: "johndoe",
      email: "john@gmail.com",
    },
  },
];

const MainContainer = styled("div")({
  height: "22%",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  overflow: "auto",
});

const PendingInvitaionsList = () => {
 const handleAcceptFriendInvitation = (id: number) => {}

 const handleRejectFriendInvitation = (id: number) => {}
  return (
    <MainContainer>
      {DummyInvitaion.map((invitaion) => {
        return (
          <PendingInvitationsListItem
            key={invitaion.id}
            invitation={invitaion}
            acceptFriendInvitation={handleAcceptFriendInvitation}
            rejectFriendInvitation={handleRejectFriendInvitation}
          />
        );
      })}
    </MainContainer>
  );
};

export default PendingInvitaionsList;
