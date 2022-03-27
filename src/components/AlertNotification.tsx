import { Alert, Snackbar } from "@mui/material";
import React from "react";

const AlertNotification = () => {
  return (
    <Snackbar
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      open
      onClose={() => {}

    }
   // autoHideDuration={6000}
    >
      <Alert severity="info">alert message</Alert>
    </Snackbar>
  );
};

export default AlertNotification;
