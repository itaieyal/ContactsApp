import React from "react";
import ReactDOM from "react-dom";
import "./styles/app.css";
import "./styles/header.css";
import "./styles/contacts.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
