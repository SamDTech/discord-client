import React from "react";
import InputWithLabel from "./InputWithLabel";

interface ILoginPageInputProps {
  mail: string;
  password: string;
  setPassword: Function;
  setMail: Function;
}

const LoginPageInput: React.FC<ILoginPageInputProps> = ({
  mail,
  password,
  setMail,
  setPassword,
}) => {
  return (
    <>
      <InputWithLabel
        value={mail}
        setValue={setMail}
        label="E-mail"
        type="text"
        placeholder="Enter Your Email"
      />

      <InputWithLabel
        value={password}
        setValue={setPassword}
        label="Password"
        type="password"
        placeholder="Enter Your Password"
      />
    </>
  );
};

export default LoginPageInput;
