import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { validateMail } from "../utils/validator";
import CustomPrimaryButton from "./CustomPrimaryButton";
import InputWithLabel from "./InputWithLabel";
import { useDispatch, useSelector } from "react-redux";
import { sendFriendInvitation } from "../store/actionCreators/friendActions";

interface IAddFriendDialogProps {
  isDialogOpen: boolean;
  closeDialogHandler: () => void;
}

const AddFriendDialog: React.FC<IAddFriendDialogProps> = ({
  closeDialogHandler,
  isDialogOpen,
}) => {
  const [email, setEmail] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  const dispatch = useDispatch();

  const {} = useSelector((state: any) => state.friends);

  const handleSendInvitation = () => {
    dispatch(sendFriendInvitation(email, closeDialogHandler));
    setEmail("");
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
          <Typography>Invite A Friend </Typography>
        </DialogTitle>

        <DialogContent>
          <DialogContentText>
            <Typography>
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
        <DialogActions>
          <CustomPrimaryButton
            onClick={handleSendInvitation}
            disabled={!isFormValid}
            label="Send Invitation"
            additionalStyles={{
              marginLeft: "15px",
              marginRight: "15px",
              marginBottom: "10px",
            }}
          />
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AddFriendDialog;
