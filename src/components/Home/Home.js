import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import classes from "./Home.module.css";

const Home = (props) => {
  if (!props.data.isLoggedIn) {
    return <Redirect to="/login" />;
  }
  // {}

  console.log(props.data.user);
  const {
    name,
    followers,
    following,
    updated_at: lastUpdate,
  } = props.data.user.data;

  return <div className={classes.Home}></div>;
};

const mapstateToProps = (state) => {
  return {
    data: state,
  };
};

export default connect(mapstateToProps, null)(Home);
