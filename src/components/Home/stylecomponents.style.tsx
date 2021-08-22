import styled, { keyframes } from "styled-components";

import Home from "../../components/Home/Home";

export const WraperApp = styled.div``;

export const Container = styled.div`
  height: 100vh;
  position: relative;
`;

export const Usercard = styled.div`
  background-color: #eee;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  width: 80rem;
  display: flex;
  box-shadow: 0 1rem 1.5rem rgb(110, 110, 110);
`;

export const UserProfile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  border-right: 1px solid rgb(187, 187, 187);
`;

export const Userphoto = styled.img`
  width: 15rem;
  height: 15rem;
  border-radius: 50%;
  border: 1px solid rgb(95, 95, 95);
`;
export const Username = styled.p`
  font-size: 2.4rem;
  color: rgb(24, 24, 24);
`;

export const Userbio = styled.p`
  font-size: 1.6rem;
  color: rgb(27, 27, 27);
  border-bottom: 1px solid rgb(139, 139, 139);
  padding-bottom: 3px;
`;

export const UserInfo = styled.div`
  font-size: 2;
  display: flex;
  justify-content: center;
  flex: 1 0 0;
`;

export const UserInfoText = styled.p`
  margin-right: 2rem;
  color: rgb(27, 27, 27);
  font-size: 2rem;
`;

export const Title = styled.h1`
  font-size: 4rem;
  color: rgb(200, 51, 101);
  letter-spacing: 0.4rem;
  margin-bottom: 10rem;
`;

const erroranimation = keyframes``;

export const ErrorPop = styled.div`
  position: absolute;
  background-color: brown;
  width: 20rem;
  height: 10rem;
  top: 1rem;
  right: 2rem;
  animation: ${erroranimation} 4s;
  border-radius: 6rem;
  opacity: 0;
  font-size: 2rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Gitlink = styled.a`
  font-size: 2rem;
  text-decoration: none;
  color: rgb(200, 51, 101);
  transition: all 0.3s;

  &:hover {
    color: rgb(235, 90, 138);
  }
`;

export const LoginLink = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Wraper = styled.div`
  background-image: linear-gradient(
    to bottom right,
    rgb(200, 51, 101),
    rgb(0, 0, 0)
  );
  width: 80%;
  height: 45rem;
  margin: 0 auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 2rem 3rem rgb(71, 71, 71);
  text-align: center;
`;
