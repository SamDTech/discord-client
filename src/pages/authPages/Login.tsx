import React, { useState, useEffect } from "react";
import AuthBox from "../../components/AuthBox";
import LoginPageFooter from "../../components/LoginPageFooter";
import LoginPageHeader from "../../components/LoginPageHeader";
import LoginPageInput from "../../components/LoginPageInput";
import { validateLoginForm } from "../../utils/validator";
import { useDispatch } from "react-redux";
import { loginUser } from "../../store/actionCreators/authAction";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    setIsFormValid(validateLoginForm(mail, password));
  }, [setIsFormValid, mail, password]);

  const handleLogin = () => {
    dispatch(loginUser({ email: mail, password }, navigate));
  };

  return (
    <AuthBox>
      <LoginPageHeader />
      <LoginPageInput
        mail={mail}
        setMail={setMail}
        password={password}
        setPassword={setPassword}
      />
      <LoginPageFooter isFormValid={isFormValid} handleLogin={handleLogin} />
    </AuthBox>
  );
};

export default Login;
