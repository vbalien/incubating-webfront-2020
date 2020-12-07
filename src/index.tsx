import "core-js/stable";
import "regenerator-runtime/runtime";
import store from "store";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider as ReduxProvider } from "react-redux";

ReactDOM.render(
  <ReduxProvider store={store}>
    <App />
  </ReduxProvider>,
  document.getElementById("root")
);
