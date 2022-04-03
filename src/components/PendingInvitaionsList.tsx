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

  return (
    <MainContainer>
      {pendingFriendsInvitations.map((invitaion: any) => {
        return (
          <PendingInvitationsListItem
            key={invitaion._id}
            invitation={invitaion}
           
          />
        );
      })}
    </MainContainer>
  );
};

export default PendingInvitaionsList;
