import { clarity } from 'clarity-js';
import React, { useState, useEffect } from "react";
import "./App.css";
import PortfolioApp from "./pages/PortfolioApp";
import CookieDialog from "./components/CookieDialog";
import config from "./config.json";

const App = () => {
  const [cookiesAccepted, setCookiesAccepted] = useState(false);

  useEffect(() => {
    debugger;
    const storedAcceptance = localStorage.getItem("cookiesAccepted");
    console.log("config", config["clarity-project-id"]);
    if (storedAcceptance === "true") {
      setCookiesAccepted(true);
      console.log("Cookies already accepted");
      addClarityScript();
      clarity.start(config["clarity-project-id"]);
    }
  }, []);

  const addClarityScript = () => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src = `https://www.clarity.ms/tag/${config["clarity-project-id"]}`;
    document.body.appendChild(script);
  };

  const handleCookiesAccepted = () => {
    setCookiesAccepted(true);
    localStorage.setItem("cookiesAccepted", "true");
    addClarityScript();
    clarity.start(config["clarity-project-id"]);
  };

  useEffect(() => {
    if (cookiesAccepted) {
      console.log("Cookies accepted");
      clarity.start(config["clarity-project-id"]);
    }
  }, [cookiesAccepted]);

  return (
    <div>
      <CookieDialog onAccept={handleCookiesAccepted} />
      <PortfolioApp />
    </div>
  );
};

export default App;