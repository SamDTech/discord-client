import React, { useState } from "react";
import AuthBox from "../../components/AuthBox";
import LoginPageFooter from "../../components/LoginPageFooter";
import LoginPageHeader from "../../components/LoginPageHeader";
import LoginPageInput from "../../components/LoginPageInput";

const Login = () => {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  const handleLogin = () => {
    console.log("login");
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
