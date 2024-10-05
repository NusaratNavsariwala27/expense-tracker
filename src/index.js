import React from "react";
import ReactDOM from "react-dom";
import "./styles/App.css";
import App from "./App";
import { ExpenseProvider } from "./context/ExpenseContext";

ReactDOM.render(
  <ExpenseProvider>
    <App />
  </ExpenseProvider>,
  document.getElementById("root")
);
