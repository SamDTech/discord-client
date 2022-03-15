import React from "react";
import CustomPrimaryButton from "./CustomPrimaryButton";

interface ILoginPageFooter {
  handleLogin: () => void;
  isFormValid: boolean;
}

const LoginPageFooter: React.FC<ILoginPageFooter> = ({
  handleLogin,
  isFormValid,
}) => {
  return (
    <div>
      <CustomPrimaryButton
        label="Login"
        additionalStyles={{ marginTop: "30px" }}
        disabled={!isFormValid}
        onClick={handleLogin}
      />
    </div>
  );
};

export default LoginPageFooter;
