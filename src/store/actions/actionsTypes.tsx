import * as actionType from "./actionsLogin";
import { ThunkAction } from "redux-thunk";
import axios from "axios";
import { AnyAction } from "redux";
import * as myType from "../types";

export const startLoading = () => {
  return {
    type: actionType.GITHUB__SEND__REQUEST,
  };
};

const LoginSuccess = (data: Object) => {
  return {
    type: actionType.LOGED_IN,
    payload: { user: data, isLoggedIn: true },
  };
};

const LoginFail = () => {
  return {
    type: actionType.LOGIN__FAIL,
    payload: { errorMessage: "sorry log in fail", isLoading: false },
  };
};

export const startLogin = (proxy_url: string, hash: string) =>
  async function (dispatch: myType.Dispatch) {
    try {
      const response = await axios.post(proxy_url, hash);
      dispatch(LoginSuccess(response) as myType.actionsTyps);
    } catch (error) {
      dispatch(LoginFail() as myType.actionsTyps);
    }
  };

export const loginBtn = () => {
  return {
    type: actionType.LOGIN__BTN,
    payload: { errorMessage: "", isLoading: false },
  };
};
