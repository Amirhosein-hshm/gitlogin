import React, { useEffect, useState } from "react";
import GithubIcon from "mdi-react/GithubIcon";
import { Redirect } from "react-router-dom";
import classes from "./Login.module.css";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { connect } from "react-redux";

const Login = (props) => {
  console.log(props);
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
  console.log(dataForm.showInput);

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
  return {};
};

const mapStateToprops = (state) => {
  return { data: state };
};

export default connect(mapStateToprops, null)(Login);
