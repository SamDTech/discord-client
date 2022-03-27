import { Alert, Snackbar } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/reducers";

const AlertNotification = () => {
  const { alertMessageContent, showAlertMessage } = useSelector(
    (state: RootState) => state.alert
  );

  

  const dispatch = useDispatch();

  return (
    <Snackbar
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      open={showAlertMessage}
      onClose={() => {
        dispatch({ type: "CLOSE_ALERT_MESSAGE" });
      }}
      autoHideDuration={6000}
    >
      <Alert severity="info">{alertMessageContent}</Alert>
    </Snackbar>
  );
};

export default AlertNotification;
