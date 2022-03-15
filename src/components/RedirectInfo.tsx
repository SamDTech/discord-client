import { Typography } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";

const RedirectText = styled(`span`)({
  color: "#00AFF4",
  fontWeight: 500,
  cursor: "pointer",
});

interface IRedirectInfo {
  text: string;
  redirectText: string;
  additionalStyles: any;
  redirectHandler: () => void;
}

const RedirectInfo: React.FC<IRedirectInfo> = ({
  text,
  redirectText,
  additionalStyles,
  redirectHandler,
}) => {
  return (
    <Typography
      sx={{
        color: "#72767D",
      }}
      style={additionalStyles ? additionalStyles : {}}
      variant="subtitle2"
    >
      {text}
      <RedirectText onClick={redirectHandler}>{redirectText}</RedirectText>
    </Typography>
  );
};

export default RedirectInfo;
