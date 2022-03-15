import { Tooltip } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import CustomPrimaryButton from "./CustomPrimaryButton";
import RedirectInfo from "./RedirectInfo";

interface ILoginPageFooter {
  handleLogin: () => void;
  isFormValid: boolean;
}

const LoginPageFooter: React.FC<ILoginPageFooter> = ({
  handleLogin,
  isFormValid,
}) => {
  const navigate = useNavigate();

  const handlePushToRegisterPage = () => {
    navigate("/register");
  };

  const getFormIsNotValidMessage = () => {
    return "Enter correct email address and password must be at least 6 characters";
  };

  const getFormIsValidMessage = () => {
    return "Press to login";
  };

  return (
    <>
      <Tooltip
        title={
          !isFormValid ? getFormIsNotValidMessage() : getFormIsValidMessage()
        }
      >
        <div>
          <CustomPrimaryButton
            label="Login"
            additionalStyles={{ marginTop: "30px" }}
            disabled={!isFormValid}
            onClick={handleLogin}
          />
        </div>
      </Tooltip>
      <RedirectInfo
        text="Need an Account?"
        redirectText="Create an account"
        additionalStyles={{ marginTop: "5px" }}
        redirectHandler={handlePushToRegisterPage}
      />
    </>
  );
};

export default LoginPageFooter;
