import React from "react";
import classes from "./App.module.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Login/Login";
import Home from "../components/Home/Home";

function App() {
  console.log(process.env.REACT_APP_CLIENT_SECRET);
  return (
    <div className={classes.App}>
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
