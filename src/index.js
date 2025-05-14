import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { clarity } from "clarity-js";
import config from "./config.json";

const enableClarityScript = () => {
  const clarityScript = document.querySelector('script[data-disabled="true"]');
  if (clarityScript) {
    clarityScript.removeAttribute("data-disabled");
    clarity.start(config["clarity-project-id"]);
  }
};

const startClarityIfAccepted = () => {
  const cookiesAccepted = localStorage.getItem("cookiesAccepted") === "true";
  if (cookiesAccepted) {
    enableClarityScript();
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
