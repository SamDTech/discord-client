import { Tooltip } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import CustomPrimaryButton from "./CustomPrimaryButton";
import RedirectInfo from "./RedirectInfo";

interface ILoginPageFooter {
  handleRegister: () => void;
  isFormValid: boolean;
}

const RegisterPageFooter: React.FC<ILoginPageFooter> = ({
  handleRegister,
  isFormValid,
}) => {
  const navigate = useNavigate();

  const handlePushToLoginPage = () => {
    navigate("/login");
  };

  const getFormIsNotValidMessage = () => {
    return "Username should contain between 3 characters and 12 characters and password should be at least 6 characters. Also correct Email Address should be provided.";
  };

  const getFormIsValidMessage = () => {
    return "Press to Register";
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
            label="Register"
            additionalStyles={{ marginTop: "30px" }}
            disabled={!isFormValid}
            onClick={handleRegister}
          />
        </div>
      </Tooltip>
      <RedirectInfo
        text="Need an Account?"
        redirectText="Already have an account?"
        additionalStyles={{ marginTop: "5px" }}
        redirectHandler={handlePushToLoginPage}
      />
    </>
  );
};

export default RegisterPageFooter;
