import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { app } from "./firebase.js";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById("root"));

app.firestore().settings({
  cacheSizeBytes: app.firestore.CACHE_SIZE_UNLIMITED,
});

app.firestore().enablePersistence();

serviceWorker.register();
