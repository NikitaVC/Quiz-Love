
import "./styles.css";
import React from "react";
import ReactDOM from "react-dom/client";
import QuizApp from "./App";

const rootElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <QuizApp />
  </React.StrictMode>
);
