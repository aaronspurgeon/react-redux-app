import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleWare } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

ReactDOM.render(<App />, document.getElementById("root"));
