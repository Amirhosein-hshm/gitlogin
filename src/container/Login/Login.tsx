import React, { useEffect, useState } from "react";
import GithubIcon from "mdi-react/GithubIcon";
import { Redirect } from "react-router-dom";

import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import * as actions from "../../store/actions/actionsTypes";
import { InitialState } from "../../store/types";
import * as myTypes from "../../store/types";
import {
  Wraper,
  Title,
  ErrorPop,
  Gitlink,
  LoginLink,
} from "../../components/Home/stylecomponents.style";

interface LoginProps {}

const Login: React.FC = ({}) => {
  const { proxy_url, errorMessage, isLoggedIn, client_id, redirect_url } =
    useSelector((state: InitialState) => state);

  const dispatch = useDispatch();

  useEffect(() => {
    const url = window.location.href;
    const hashCode = url.includes("?code=");

    if (hashCode) {
      const newUrl = url.split("?code=");
      console.log(newUrl);
      window.history.pushState({}, "", newUrl[0]);
      dispatch(actions.startLoading);
      dispatch(actions.startLogin(proxy_url, newUrl[1]));
    }
  }, [proxy_url, actions.startLoading, actions.startLogin]);

  // console.log(Wraper);

  if (isLoggedIn) {
    return <Redirect to="/" />;
  }
  return (
    <Wraper>
      <Title>signup</Title>
      {errorMessage ? <ErrorPop>{errorMessage}</ErrorPop> : null}

      <Gitlink
        href={`https://github.com/login/oauth/authorize?scope=user&client_id=${client_id}&redirect_uri=${redirect_url}`}
        onClick={() => {
          dispatch(actions.loginBtn());
        }}
      >
        <LoginLink>
          <GithubIcon />
          <p>signin with github</p>
        </LoginLink>
      </Gitlink>
    </Wraper>
  );
};

export default Login;
