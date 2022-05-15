import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import STORE from "./store/index";

import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider STORE={STORE}>
    <App />
  </Provider>
);
