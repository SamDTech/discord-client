import { Box, Tooltip, Typography } from "@mui/material";
import React, { useState } from "react";
import Avartar from "./Avartar";
import InvitationDecisionsButton from "./InvitationDecisionsButton";
import { useDispatch } from "react-redux";
import {
  acceptFriendsInvitation,
  rejectFriendsInvitation,
} from "../store/actionCreators/friendActions";
import { idText } from "typescript";

interface IPendingInvitationsListItemProps {
  _id: string;
  senderId: {
    _id: string;
    username: string;
    email: string;
  };
}

const PendingInvitationsListItem: React.FC<{
  invitation: IPendingInvitationsListItemProps;
}> = ({
  invitation: {
    _id,

    senderId: { email, username },
  },
}) => {
  const [buttonsDisabled, setButtonsDisabled] = useState(false);

  const dispatch = useDispatch();

  const handleAcceptFriendInvitation = () => {
    dispatch(acceptFriendsInvitation(_id));
    setButtonsDisabled(true);
  };

  const handleRejectFriendInvitation = () => {
    dispatch(rejectFriendsInvitation(_id));
    setButtonsDisabled(true);
  };

  return (
    <Tooltip title={email}>
      <div
        style={{
          width: "100%",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "42px",
            marginTop: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Avartar username={username} />
          <Typography
            sx={{
              marginLeft: "7px",
              fontWeight: "700",
              color: "#8e9297",
              flexGrow: 1,
            }}
            variant="subtitle1"
          >
            {username}
          </Typography>

          <InvitationDecisionsButton
            disabled={buttonsDisabled}
            acceptInvitationHandler={handleAcceptFriendInvitation}
            rejectInvitationHandler={handleRejectFriendInvitation}
          />
         
        </Box>
      </div>
    </Tooltip>
  );
};

export default PendingInvitationsListItem;
