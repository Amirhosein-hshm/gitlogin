import React from "react";
import classes from "./Button.module.css";

const button = (props) => {
  // console.log(props.disbled);
  return (
    <button
      disabled={props.disbled}
      onClick={props.fnHandler}
      className={classes.Button}
    >
      {props.children}
    </button>
  );
};

export default button;
