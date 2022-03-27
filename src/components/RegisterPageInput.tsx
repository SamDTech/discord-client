import React from "react";
import InputWithLabel from "./InputWithLabel";

interface IRegisterPageInputProps {
  mail: string;
  setMail: Function;
  password: string;
  setPassword: Function;
  username: string;
  setUsername: Function;
}

const RegisterPageInput: React.FC<IRegisterPageInputProps> = ({
  mail,
  setMail,
  password,
  setPassword,
  username,
  setUsername,
}) => {
  return (
    <>
      <InputWithLabel
        value={mail}
        setValue={setMail}
        label="Email Address"
        type="email"
        placeholder="Enter your email address"
      />
      <InputWithLabel
        value={username}
        setValue={setUsername}
        label="Username"
        type="text"
        placeholder="Enter your Username"
      />
      <InputWithLabel
        value={password}
        setValue={setPassword}
        label="Password"
        type="password"
        placeholder="Enter your password"
      />
    </>
  );
};

export default RegisterPageInput;
