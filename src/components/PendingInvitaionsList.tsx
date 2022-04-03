import { styled } from "@mui/system";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/reducers";
import PendingInvitationsListItem from "./PendingInvitationsListItem";

const MainContainer = styled("div")({
  height: "22%",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  overflow: "auto",
});

const PendingInvitaionsList = () => {
  const { pendingFriendsInvitations } = useSelector(
    (state: RootState) => state.friends
  );

  const handleAcceptFriendInvitation = (id: number) => {};

  const handleRejectFriendInvitation = (id: number) => {};
  return (
    <MainContainer>
      {pendingFriendsInvitations.map((invitaion: any) => {
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
