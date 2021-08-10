import React from "react";
import { connect } from "react-redux";

const home = (props) => {
  if (props.data.user) {
    console.log(props.data.user, props.data.user.public_repos);
  }

  return <div className="Home"></div>;
};

const mapstateToProps = (state) => {
  return {
    data: state,
  };
};

export default connect(mapstateToProps, null)(home);
