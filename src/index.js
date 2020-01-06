import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";


// const app = React.createElement(App);
ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById("root"));

serviceWorker.unregister();
