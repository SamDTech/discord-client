import React, { useState } from "react";
import AddFriendDialog from "./AddFriendDialog";
import CustomPrimaryButton from "./CustomPrimaryButton";

const additionalStyles = {
  marginTop: "10px",
  marginLeft: "5px",
  width: "80%",
  height: "30px",
  backgroundColor: "#3ba55d",
};

const AddFriendButton = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleOpenAddFriendDialog = () => {
    setIsDialogOpen(true);
  };

   const handleCloseAddFriendDialog = () => {
     setIsDialogOpen(false);
   };

  return (
    <>
      <CustomPrimaryButton
        additionalStyles={additionalStyles}
        label="Add Friend"
        onClick={handleOpenAddFriendDialog}
        disabled={false}
      />

      <AddFriendDialog
        isDialogOpen={isDialogOpen}
        closeDialogHandler={handleCloseAddFriendDialog}
      />
    </>
  );
}; 

export default AddFriendButton;
