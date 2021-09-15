import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";

import App from "./components/App";

import "./stylesheets/grid.min.css";
import "./stylesheets/style.scss";

ReactDOM.render(<App />, document.getElementById("react-root"));
