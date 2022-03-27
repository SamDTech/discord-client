import { ActionType } from "./../actionTypes/index";
import { Dispatch } from "redux";
import { apiClient, login } from "../../api";
import { Action } from "../actions";

export const loginUser =
  (loginDetails: { email: string; password: string }, navigate: any) =>
  async (dispatch: Dispatch<Action>) => {
    dispatch({ type: ActionType.USER_LOGIN_REQUEST });
    try {
      const { data } = await apiClient.post("/auth/login", loginDetails);

      dispatch({ type: ActionType.USER_LOGIN_SUCCESS, payload: data });

      localStorage.setItem("userInfo", JSON.stringify(data));

      navigate.push("/");
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
    navigate: any
  ) =>
  async (dispatch: Dispatch<Action>) => {
    dispatch({ type: ActionType.USER_REGISTER_REQUEST });
    try {
      const { data } = await apiClient.post("/auth/register", registerDetails);

       dispatch({ type: ActionType.USER_REGISTER_SUCCESS, payload: data });

      localStorage.setItem("userInfo", JSON.stringify(data));

      navigate.push("/");
    } catch (error: any) {
      dispatch({
        type: ActionType.USER_REGISTER_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
