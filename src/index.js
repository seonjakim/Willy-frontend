import React from "react";
import ReactDOM from "react-dom";
import Routes from "./Routes";
import store from "./Store";
import { Provider } from "react-redux";

const unsub = store.subscribe(() => console.log("store", store.getState()));
ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById("root")
);
