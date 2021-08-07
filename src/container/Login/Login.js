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

  console.log(props);
  useEffect(() => {
    const url = window.location.href;
    const hashCode = url.includes("?code=");

    if (hashCode) {
      const newUrl = url.split("?code=");
      window.history.pushState({}, "", newUrl[0]);
      props.startLogin();

      // axios.post(props.data.proxy_url, newUrl[1]).then(response => )
    }
  });

  return (
    <div
      // onMouseEnter={() => setData({ ...dataForm, showInput: false })}
      // onMouseLeave={() => setData({ ...dataForm, showInput: true })}
      className={classes.Login}
    >
      <h1 className={classes.Login__title}>signup</h1>
      <form className={classes.Login__form}>
        <Input
          onChange={() => setData({ ...dataForm, showInput: false })}
          type="input"
        />
        <Input type="input" />

        <Button>join</Button>
        <a className={classes.Login__gitub} href="#">
          <p>signin with github</p>
        </a>
      </form>
    </div>
  );
};

const mapDispatchToprops = (dispatch) => {
  return {
    startLoading: () => dispatch(actions.startLoading()),
  };
};

const mapStateToprops = (state) => {
  return { data: state };
};

export default connect(mapStateToprops, mapDispatchToprops)(Login);
