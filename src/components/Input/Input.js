import React from "react";
import classes from "./Input.module.css";

const Input = (props) => {
  let inputClass = null;

  inputClass = [classes.Input];

  switch (props.type) {
    case "input":
      return <input className={inputClass.join(" ")} />;

    default:
      <input className={inputClass.join(" ")} />;
  }
};

export default Input;