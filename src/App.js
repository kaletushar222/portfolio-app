import { clarity } from 'clarity-js';
import React, { useState, useEffect } from "react";
import "./App.css";
import PortfolioApp from "./pages/PortfolioApp";
import CookieDialog from "./components/CookieDialog";
import config from "./config.json";

const App = () => {
  const [cookiesAccepted, setCookiesAccepted] = useState(false);

  useEffect(() => {
    const storedAcceptance = localStorage.getItem("cookiesAccepted");
    if (storedAcceptance === "true") {
      setCookiesAccepted(true);
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