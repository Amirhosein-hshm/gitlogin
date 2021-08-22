import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Login from "./container/Login/Login";
import Home from "./components/Home/Home";
import { GlobalStyle } from "./components/Home/global.style";
import { WraperApp } from "./components/Home/stylecomponents.style";
import styled from "styled-components";

interface AppProps {
  className?: string;
}

const App: React.FC<AppProps> = ({ className }) => {
  return (
    <div>
      <GlobalStyle />

      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </div>
  );
};

export default App;
