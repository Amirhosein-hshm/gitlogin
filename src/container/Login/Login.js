import React, { useEffect, useState } from "react";
import GithubIcon from "mdi-react/GithubIcon";
import { Redirect } from "react-router-dom";
import classes from "./Login.module.css";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { connect } from "react-redux";
import * as actions from "../../store/actions/actionsTypes";

const Login = (props) => {
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
      window.history.pushState({}, "", newUrl[0]);
      props.startLoading();
      props.login(props.data.proxy_url, newUrl[1]);
    }
  }, [props.data, props.startLogin, props.login]);

  if (props.data.isLoggedIn) {
    return <Redirect to="/" />;
  }
  return (
    <div className={classes.Login}>
      <h1 className={classes.Login__title}>signup</h1>
      {props.data.errorMessage ? (
        <div className={classes.error_container}>{props.data.errorMessage}</div>
      ) : null}

      {/* <form className={classes.Login__form}>
        <Input type="input" placeholder="please inter your username" />
        <Input type="input" placeholder="please inter your password" />

        <Button>join</Button>
      </form> */}
      <a
        className={classes.Login__gitub}
        href={`https://github.com/login/oauth/authorize?scope=user&client_id=${props.data.client_id}&redirect_uri=${props.data.redirect_url}`}
        onClick={() => {
          props.loginBtn();
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

const mapDispatchToprops = (dispatch) => {
  return {
    startLoading: () => dispatch(actions.startLoading()),
    login: (proxy_url, hash) => dispatch(actions.startLogin(proxy_url, hash)),
    loginBtn: () => dispatch(actions.loginBtn()),
  };
};

const mapStateToprops = (state) => {
  return { data: state };
};

export default connect(mapStateToprops, mapDispatchToprops)(Login);
