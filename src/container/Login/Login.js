import React, { useState } from "react";
import GithubIcon from "mdi-react/GithubIcon";
import { Redirect } from "react-router-dom";
import classes from "./Login.module.css";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";

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
  return (
    <div className={classes.Login}>
      <h1 className={classes.Login__title}>signup</h1>
      <form className={classes.Login__form}>
        <Input type="input" />
        <Input type="input" />
        <Button>join</Button>
        <a href="#">
          <p className={classes.Login__toggle}>sigin</p>
        </a>
      </form>
    </div>
  );
};

export default Login;
