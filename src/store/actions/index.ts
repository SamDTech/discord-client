import { User } from './../../../types';

import { ActionType } from "../actionTypes";

interface LoginActionRequest {
  type: ActionType.USER_LOGIN_REQUEST;
}

interface LoginActionSuccess {
  type: ActionType.USER_LOGIN_SUCCESS;
  payload: User;
}

interface LoginActionFail {
  type: ActionType.USER_LOGIN_FAIL;
  payload: string;
}

interface LogOutAction {
  type: ActionType.LOGOUT;
}

interface SearchQueryAction {
  type: ActionType.SEARCH_QUERY;
  payload: string;
}

interface AddToCart {
  type: ActionType.ADD_TO_CART;
  payload: [];
}

interface SetVisible {
  type: ActionType.SET_VISIBLE;
  payload: boolean;
}

interface CouponApplied {
  type: ActionType.COUPON_APPLIED;
  payload: boolean;
}

interface COD {
  type: ActionType.COD;
  payload: boolean;
}

export type Action =
  | LoginActionRequest
  | LoginActionSuccess
  | LoginActionFail
  | LogOutAction
  | SearchQueryAction
  | AddToCart
  | SetVisible
  | CouponApplied
  | COD;
