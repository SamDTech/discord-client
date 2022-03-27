import { ActionType } from "./../actionTypes/index";
import { Dispatch } from "redux";
import { apiClient } from "../../api";
import { Action } from "../actions";
import { NavigateFunction } from "react-router-dom";

interface ILoginDetails {
  email: string;
  password: string;
}

export const loginUser =
  (loginDetails: ILoginDetails, navigate: NavigateFunction) =>
  async (dispatch: Dispatch<Action>) => {
    dispatch({ type: ActionType.USER_LOGIN_REQUEST });
    try {
      const { data } = await apiClient.post("/auth/login", loginDetails);

      dispatch({ type: ActionType.USER_LOGIN_SUCCESS, payload: data });

      localStorage.setItem("userInfo", JSON.stringify(data));

      navigate("/dashboard");
    } catch (error: any) {
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

      dispatch({
        type: ActionType.USER_LOGIN_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
