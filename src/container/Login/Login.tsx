import React, { useEffect, useState } from "react";
import GithubIcon from "mdi-react/GithubIcon";
import { Redirect } from "react-router-dom";
import classes from "./Login.module.css";
import { connect, ReactReduxContextValue } from "react-redux";
import * as actions from "../../store/actions/actionsTypes";
import { InitialState } from "../../store/reducer/reducer";
import { ThunkDispatch } from "redux-thunk";
import { Action } from "redux";
import * as myTypes from "../../store/types";

type Loginprops = {
  data: myTypes.InitialState;
  startLogin: Function;
  login: (a: string, b: string) => Function;
  loginBtn: Function;
  startLoading: Function;
};

const Login: React.FC<Loginprops> = ({
  data,
  startLogin,
  login,
  loginBtn,
  startLoading,
}) => {
  const [dataForm, setData] = useState({
    username: {
      elementType: "input",
      elementConfig: { type: "text", placeholder: "Your username" },
      value: "",
      validation: {
        required: true,
        minLength: 1,
      },
    },
    password: {
      elementType: "input",
      elementConfig: { type: "text", placeholder: "Your password" },
      value: "",
      validation: {
        required: true,
        minLength: 2,
      },
    },
  });

  useEffect(() => {
    const url = window.location.href;
    const hashCode = url.includes("?code=");

    if (hashCode) {
      const newUrl = url.split("?code=");
      console.log(newUrl);
      window.history.pushState({}, "", newUrl[0]);
      startLoading();
      if (typeof data.proxy_url === "string") login(data.proxy_url, newUrl[1]);
    }
  }, [data, startLogin, login]);

  if (data.isLoggedIn) {
    return <Redirect to="/" />;
  }
  return (
    <div className={classes.Login}>
      <h1 className={classes.Login__title}>signup</h1>
      {data.errorMessage ? (
        <div className={classes.error_container}>{data.errorMessage}</div>
      ) : null}

      {/* <form className={classes.Login__form}>
        <Input type="input" placeholder="please inter your username" />
        <Input type="input" placeholder="please inter your password" />

        <Button>join</Button>
      </form> */}
      <a
        className={classes.Login__gitub}
        href={`https://github.com/login/oauth/authorize?scope=user&client_id=${data.client_id}&redirect_uri=${data.redirect_url}`}
        onClick={() => {
          loginBtn();
        }}
      >
        <div className={classes.Login__link_text}>
          <GithubIcon />
          <p>signin with github</p>
        </div>
      </a>
    </div>
  );
};

const mapDispatchToprops = (dispatch: Function) => {
  return {
    startLoading: () => dispatch(actions.startLoading()),
    login: (proxy_url: string, hash: string) =>
      dispatch(actions.startLogin(proxy_url, hash)),
    loginBtn: () => dispatch(actions.loginBtn()),
  };
};

const mapStateToprops = (state: InitialState) => {
  return { data: state };
};

export default connect(mapStateToprops, mapDispatchToprops)(Login);
