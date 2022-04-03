import { Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/reducers";

const ChosenOptionLabel = () => {
  const { chosenChatDetails } = useSelector((state: any) => state.chat);

  return (
    <Typography
      sx={{
        fontSize: "16px",
        color: "white",
        fontWeight: "bold",
      }}
    >
      {`${
        chosenChatDetails?.username
          ? `Choosen Conversation: ${chosenChatDetails?.username}`
          : ""
      }`}
    </Typography>
  );
};

export default ChosenOptionLabel;
