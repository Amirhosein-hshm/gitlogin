import * as actionType from "./actionsLogin";

import axios from "axios";

export const startLoading = () => {
  return {
    type: actionType.GITHUB__SEND__REQUEST,
  };
};

const LoginSuccess = (data) => {
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

export const startLogin = (proxy_url, hash) => {
  console.log(hash);
  return async function (dispatch) {
    try {
      const response = await axios.post(proxy_url, hash);
      dispatch(LoginSuccess(response));
    } catch (error) {
      dispatch(LoginFail());
    }
  };
};

export const loginBtn = () => {
  return {
    type: actionType.LOGIN__BTN,
    payload: { errorMessage: "", isLoading: false },
  };
};
