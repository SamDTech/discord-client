import React, { ChangeEvent } from "react";
import { styled } from "@mui/system";

const Wrapper = styled("div")({
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  width: "100%",
});

const Label = styled("p")({
  fontSize: "16px",
  textTransform: "uppercase",
  fontWeight: "600",
  color: "#b9bbbe",
});

const Input = styled("input")({
  flexGrow: 1,
  height: "40px",
  border: "1px solid black",
  borderRadius: "5px",
  color: "#dcddde",
  background: "#35393f",
  margin: 0,
  fontSize: "16px",
  padding: "0 5px",
});

interface IInputWithLabel {
  label: string;
  value: string;
  setValue: Function;
  type: string;
  placeholder: string;
}

const InputWithLabel: React.FC<IInputWithLabel> = ({
  label,
  value,
  setValue,
  type,
  placeholder,
}) => {
  const handleValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <Wrapper>
      <Label>{label}</Label>
      <Input
        value={value}
        onChange={handleValueChange}
        type={type}
        placeholder={placeholder}
      />
    </Wrapper>
  );
};

export default InputWithLabel;
