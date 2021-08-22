import { Url } from "url";
import * as actionsTypes from "../actions/actionsLogin";
import * as myTypes from "../types";

const reducer = (
  state: myTypes.InitialState = initialState,
  action: myTypes.actionsTyps
) => {
  switch (action.type) {
    case actionsTypes.LOGED_IN:
      localStorage.setItem(
        "isLoggedIn",
        JSON.stringify(action.payload.isLoggedIn)
      );
      localStorage.setItem("user", JSON.stringify(action.payload.user));
      return {
        ...state,
        isLoggedIn: action.payload.isLoggedIn,
        user: action.payload.user,
      };
    case actionsTypes.LOGED_OUT: {
      localStorage.clear();
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    }

    case actionsTypes.GITHUB__SEND__REQUEST:
      return {
        ...state,
        isLoading: true,
        errorMessage: "",
      };

    case actionsTypes.LOGIN__FAIL:
      return {
        ...state,
        isLoading: action.payload.isLoading,
        errorMessage: action.payload.errorMessage,
      };

    case actionsTypes.LOGIN__BTN:
      return {
        ...state,
        isLoading: action.payload.isLoading,
        errorMessage: action.payload.errorMessage,
      };
    default:
      return state;
  }
};

export const initialState: myTypes.InitialState = {
  isLoggedIn: JSON.parse(localStorage.getItem("isLoggedIn") as string) || false,
  user: JSON.parse(localStorage.getItem("user") as string) || null,
  client_id: process.env.REACT_APP_CLIENT_ID as string,
  redirect_url: process.env.REACT_APP_REDIRECT_URL as string,
  client_secret: process.env.REACT_APP_CLIENT_SECRET as string,
  proxy_url: process.env.REACT_APP_PROXY_URL as string,
  isLoading: false,
  errorMessage: "",
};

export default reducer;
