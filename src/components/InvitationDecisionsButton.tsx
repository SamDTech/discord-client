import { Check as CheckIcon, Clear as ClearIcon } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";
import React from "react";

interface IInvitationDecisionsButtonProps {
  disabled: boolean;
  acceptInvitationHandler: () => void;
  rejectInvitationHandler: () => void;
}

const InvitationDecisionsButton: React.FC<IInvitationDecisionsButtonProps> = ({
  disabled,
  acceptInvitationHandler,
  rejectInvitationHandler,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <IconButton
        style={{ color: "white" }}
        disabled={disabled}
        onClick={acceptInvitationHandler}
      >
        <CheckIcon />
      </IconButton>

      <IconButton
        style={{ color: "white" }}
        disabled={disabled}
        onClick={rejectInvitationHandler}
      >
        <ClearIcon />
      </IconButton>
    </Box>
  );
};

export default InvitationDecisionsButton;
