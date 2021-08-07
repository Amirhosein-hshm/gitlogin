import * as actionsTypes from "../actions/actionsLogin";

export const initialState = {
  isLoggedIn: JSON.parse(localStorage.getItem("isLoggedIn")) || false,
  user: JSON.parse(localStorage.getItem("user")) || null,
  client_id: process.env.REACT_APP_CLIENT_ID,
  redirect_url: process.env.REACT_APP_REDIRECT_URI,
  client_secret: process.env.REACT_APP_CLIENT_SECRET,
  proxy_url: process.env.REACT_APP_PROXY_URL,
  isLoading: false,
  errorMessage: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionsTypes.LOGED_IN:
      localStorage.setItem("isLoggedIn", action.payload.isLoggedIn);
      localStorage.setItem("user", action.payload.user);
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

export default reducer;
