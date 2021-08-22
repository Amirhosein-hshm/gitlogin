import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reducer from "./store/reducer/reducer";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, Store } from "redux";

import * as myTypes from "./store/types";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Login from "./container/Login/Login";

const store: Store<myTypes.InitialState, myTypes.actionsTyps> & {
  dispatch: myTypes.Dispatch;
} = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={Login} />
          <App />
        </Switch>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
