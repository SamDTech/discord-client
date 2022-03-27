import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { validateMail } from "../utils/validator";
import InputWithLabel from "./InputWithLabel";

interface IAddFriendDialogProps {
  isDialogOpen: boolean;
  closeDialogHandler: () => void;
  sendFriendInvitation?: () => void;
}

const AddFriendDialog: React.FC<IAddFriendDialogProps> = ({
  closeDialogHandler,
  isDialogOpen,
}) => {
  const [email, setEmail] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  const handleSendInvitation = () => {
    // send friend request
  };

  const handleCloseDialog = () => {
    // send friend request
    closeDialogHandler();
    setEmail("");
  };

  useEffect(() => {
    setIsFormValid(validateMail(email));
  }, [email]);

  return (
    <div>
      <Dialog open={isDialogOpen} onClose={handleCloseDialog}>
        <DialogTitle>
          <Typography >
            Invite A Friend{" "}
          </Typography>
        </DialogTitle>

        <DialogContent>
          <DialogContentText>
            <Typography  >
              Enter Email Address of friend you will like to invite.
            </Typography>
          </DialogContentText>
          <InputWithLabel
            label="Email"
            type="email"
            value={email}
            setValue={setEmail}
            placeholder="Enter Email Address"
          />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddFriendDialog;
