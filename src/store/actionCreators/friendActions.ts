import { checkStatus } from './../../api';
import { ActionType } from "./../actionTypes/index";
import { Dispatch } from "redux";
import { apiClient } from "../../api";
import { Action } from "../actions";
import { NavigateFunction } from "react-router-dom";
import { openAlert } from "./alertAction";

export const friendInvitation =
  (email: string, closeDialogHandler: Function) =>
  async (dispatch: Dispatch<Action>) => {
    try {
      const { data } = await apiClient.post("/friendInvitation/invite", email);

      dispatch({
        type: ActionType.OPEN_ALERT_MESSAGE,
        payload: "Invitation sent",
      });

      dispatch({ type: ActionType.USER_LOGIN_SUCCESS, payload: data });
    } catch (error: any) {
        checkStatus(error)
      console.log(error);
      dispatch({
        type: ActionType.OPEN_ALERT_MESSAGE,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
      closeDialogHandler();
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
