import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { InitialState } from "../../store/types";
import {
  Container,
  Usercard,
  UserProfile,
  Userphoto,
  Username,
  Userbio,
  UserInfo,
  UserInfoText,
} from "./stylecomponents.style";

interface IProps {
  data: InitialState;
}

const Home: React.FC<IProps> = ({ data }) => {
  const {
    name,
    followers,
    following,
    updated_at: lastUpdate,
    avatar_url: image,
    bio,
  } = data.user?.data;

  return (
    <Container>
      <Usercard>
        <UserProfile>
          <Userphoto src={image} />
          <Username>{name}</Username>
          <Userbio>{bio}</Userbio>
        </UserProfile>
        <UserInfo>
          <UserInfoText>Followers: {followers}</UserInfoText>
          <UserInfoText>Following: {following}</UserInfoText>
        </UserInfo>
      </Usercard>
    </Container>
  );
};

const mapstateToProps = (state: InitialState) => {
  return {
    data: state,
  };
};

export default connect(mapstateToProps, null)(Home);
