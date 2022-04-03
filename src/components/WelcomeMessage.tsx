import React from "react";
import { Typography } from "@mui/material";
import { styled } from "@mui/system";

const Wrapper = styled("div")({
  flexGrow: 1,
  height: "100%",
  alignItems: "center",
  justifyContent: "center",
  display: "flex",
});

const WelcomeMessage = () => {
  return (
    <Wrapper>
      <Typography
        variant="h6"
        sx={{
          color: "white",
        }}
      >
        To Start Chating - Choose Conversation
      </Typography>
    </Wrapper>
  );
};

export default WelcomeMessage;
