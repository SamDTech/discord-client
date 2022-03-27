import { ActionType } from "./../actionTypes/index";
import { Dispatch } from "redux";
import { apiClient } from "../../api";
import { Action } from "../actions";
import { NavigateFunction } from "react-router-dom";
import { openAlert } from "./alertAction";

interface ILoginDetails {
  email: string;
  password: string;
}

export const loginUser =
  (loginDetails: ILoginDetails, navigate: NavigateFunction) =>
  async (dispatch: Dispatch<Action>) => {
    console.log("loginUser");
    dispatch({ type: ActionType.USER_LOGIN_REQUEST });
    try {
      const { data } = await apiClient.post("/auth/login", loginDetails);

      console.log(data);

      dispatch({ type: ActionType.USER_LOGIN_SUCCESS, payload: data });

      localStorage.setItem("userInfo", JSON.stringify(data));

      navigate("/dashboard");
    } catch (error: any) {
      console.log(error);
      dispatch({
        type: ActionType.OPEN_ALERT_MESSAGE,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
      dispatch({
        type: ActionType.USER_LOGIN_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const registerUser =
  (
    registerDetails: { email: string; password: string; username: string },
    navigate: NavigateFunction
  ) =>
  async (dispatch: Dispatch<Action>) => {
    dispatch({ type: ActionType.USER_LOGIN_REQUEST });
    try {
      const { data } = await apiClient.post("/auth/register", registerDetails);

      console.log(data);

      dispatch({ type: ActionType.USER_LOGIN_SUCCESS, payload: data });

      localStorage.setItem("userInfo", JSON.stringify(data));

      navigate("/");
    } catch (error: any) {
      console.log(error);
      openAlert(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      );

      dispatch({
        type: ActionType.USER_LOGIN_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

const setUserDetails = (userDetails: any) => ({
  type: ActionType.SET_USER_DETAILS,
  payload: userDetails,
});
