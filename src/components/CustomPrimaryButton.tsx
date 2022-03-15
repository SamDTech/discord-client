import { Button } from "@mui/material";
import React from "react";

interface ICustomPrimaryButton {
  label: string;
  disabled: boolean;
  additionalStyles: any;
  onClick: () => void;
}

const CustomPrimaryButton: React.FC<ICustomPrimaryButton> = ({
  label,
  disabled,
  additionalStyles,
  onClick,
}) => {
  return (
    <Button
      variant="contained"
      sx={{
        bgcolor: "#5865F2",
        color: "white",
        textTransform: "none",
        fontSize: "16px",
        fontWeight: 500,
        height: "40px",
        width: "100%",
      }}
      style={additionalStyles ? additionalStyles : {}}
      disabled={disabled}
      onClick={onClick}
    >
      {label}
    </Button>
  );
};

export default CustomPrimaryButton;
