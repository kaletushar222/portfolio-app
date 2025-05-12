import { clarity } from 'clarity-js';
import React, { useState, useEffect } from "react";
import "./App.css";
import PortfolioApp from "./pages/PortfolioApp";
import CookieDialog from "./components/CookieDialog";
import config from "./config.json";

const App = () => {
  const [cookiesAccepted, setCookiesAccepted] = useState(false);

  const handleCookiesAccepted = () => {
    setCookiesAccepted(true);
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