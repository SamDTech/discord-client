import { Typography } from "@mui/material";
import React from "react";

const FriendsTitle: React.FC<{ title: string }> = ({ title }) => {
  return (
    <Typography
      sx={{
        textTransform: "uppercase",
        color: "#8e9297",
        fontSize: "14px",
        marginTop: "10px",
      }}
    >
      {title}
    </Typography>
  );
};

export default FriendsTitle;
