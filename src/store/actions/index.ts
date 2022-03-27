import { User } from "./../../../types";

import { ActionType } from "../actionTypes";

interface LoginActionRequest {
  type: ActionType.USER_LOGIN_REQUEST;
}

interface LoginActionSuccess {
  type: ActionType.USER_LOGIN_SUCCESS;
  payload: string;
}

interface LoginActionFail {
  type: ActionType.USER_LOGIN_FAIL;
  payload: string;
}

interface RegisterActionRequest {
  type: ActionType.USER_REGISTER_REQUEST;
}

interface RegisterActionSuccess {
  type: ActionType.USER_REGISTER_SUCCESS;
  payload: string;
}

interface RegisterActionFail {
  type: ActionType.USER_REGISTER_FAIL;
  payload: string;
}

interface LogOutAction {
  type: ActionType.LOGOUT;
}

interface OpenAlertMessage {
  type: ActionType.OPEN_ALERT_MESSAGE;
}

export type Action =
  | LoginActionRequest
  | LoginActionSuccess
  | LoginActionFail
  | RegisterActionRequest
  | RegisterActionSuccess
  | RegisterActionFail
  | LogOutAction
  | OpenAlertMessage;
