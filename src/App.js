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
      clarity.start(config["clarity-project-id"]);
    }
  }, []);

  const handleCookiesAccepted = () => {
    setCookiesAccepted(true);
    localStorage.setItem("cookiesAccepted", "true");
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