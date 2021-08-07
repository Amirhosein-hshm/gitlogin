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
    payload: { erroeMessage: "sorry log in fail", isLoading: false },
  };
};

export const startLogin = (proxy_url, hash) => {
  return (dispatch) => {
    axios
      .post(proxy_url, hash)
      .then((dataResponse) => {
        dispatch(LoginSuccess(dataResponse));
      })
      .catch((error) => {
        dispatch(LoginFail());
      });
  };
};
