import { styled } from "@mui/system";
import { relative } from "path";
import React from "react";

const Separator = styled("div")({
  width: "95%",
  background: "#b9bbbe",
  height: "1px",
  position: "relative",
  marginTop: "20px",
  marginBottom: "10px",
});

const DateLabel = styled("span")({
  backgroundColor: "#36393f",
  position: "absolute",
  left: "45%",
  top: "-10px",
  color: "#b9bbbe",
  padding: "0 5px",
  fontSize: "14px",
});

const DateSeparator: React.FC<{ date: string }> = ({ date }) => {
  return (
    <Separator>
      <DateLabel>{date}</DateLabel>
    </Separator>
  );
};

export default DateSeparator;
