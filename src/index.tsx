import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./container/App";
import reducer from "./store/reducer/reducer";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, Store } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import * as myTypes from "./store/types";

const store: Store<myTypes.InitialState, myTypes.actionsTyps> & {
  dispatch: myTypes.Dispatch;
} = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
