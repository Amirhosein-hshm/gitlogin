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
    avatar_url: image,
    bio,
  } = props.data.user.data;

  return (
    <div className={classes.Home}>
      <div className={classes.User__card}>
        <div className={classes.User__profile}>
          <img src={image} className={classes.User__profile_picture} />
          <p className={classes.User__profile_name}>{name}</p>
          <p className={classes.User__bio}>{bio}</p>
        </div>
        <div className={classes.User__about}>
          <p className={classes.User__about_paragraph}>
            Followers: {followers}
          </p>
          <p className={classes.User__about_paragraph}>
            Following: {following}
          </p>
        </div>
      </div>
    </div>
  );
};

const mapstateToProps = (state) => {
  return {
    data: state,
  };
};

export default connect(mapstateToProps, null)(Home);
