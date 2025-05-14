import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { clarity } from "clarity-js";
import config from "./config.json";

const startClarityIfAccepted = () => {
  const cookiesAccepted = localStorage.getItem("cookiesAccepted") === "true";
  if (cookiesAccepted) {
    clarity.start(config["clarity-project-id"]);
  }
};

startClarityIfAccepted();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
