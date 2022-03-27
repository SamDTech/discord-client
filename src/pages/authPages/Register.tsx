import { Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import AuthBox from "../../components/AuthBox";
import RegisterPageFooter from "../../components/RegisterPageFooter";
import RegisterPageInput from "../../components/RegisterPageInput";
import { registerUser } from "../../store/actionCreators/authAction";
import { validateRegisterForm } from "../../utils/validator";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [mail, setMail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    setIsFormValid(validateRegisterForm(mail, password, username));
  }, [setIsFormValid, mail, password, username]);

  const handleRegister = () => {
    dispatch(registerUser({ email: mail, password, username }, navigate));
  };

  return (
    <AuthBox>
      <Typography variant="h5" sx={{ color: "white" }}>
        Create an account
      </Typography>
      <RegisterPageInput
        mail={mail}
        setMail={setMail}
        password={password}
        setPassword={setPassword}
        username={username}
        setUsername={setUsername}
      />
      <RegisterPageFooter
        handleRegister={handleRegister}
        isFormValid={isFormValid}
      />
    </AuthBox>
  );
};

export default Register;
