export const validateLoginForm = (mail: string, password: string) => {
  const isMailValid = validateMail(mail);
  const isPasswordValid = validatePassword(password);

  return isMailValid && isPasswordValid;
};

const validatePassword = (password: string) => {
  return password.length > 5 && password.length < 32;
};

const validateMail = (email: string) => {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
};

const validateUsername = (username: string) => {
  return username.length > 3 && username.length < 32;
};

export const validateRegisterForm = (
  mail: string,
  password: string,
  username: string
) => {
  const isMailValid = validateMail(mail);
  const isPasswordValid = validatePassword(password);
  const isUserNameValid = validateUsername(username);
  return isMailValid && isPasswordValid && isUserNameValid;
};
