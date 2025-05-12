import React, { useState } from "react";
import "./CookieDialog.css";

const CookieDialog = ({ onAccept }) => {
  const [isVisible, setIsVisible] = useState(() => {
    return localStorage.getItem("cookiesAccepted") !== "true";
  });

  const handleAccept = () => {
    console.log("Cookies accepted");
    setIsVisible(false);
    localStorage.setItem("cookiesAccepted", "true");
    if (onAccept) onAccept();
  };

  const handleDecline = () => {
    console.log("Cookies declined");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="cookie-dialog">
      <p>We use cookies to improve your experience. Do you accept?</p>
      <div className="cookie-dialog-buttons">
        <button onClick={handleAccept}>Accept</button>
        <button onClick={handleDecline}>Decline</button>
      </div>
    </div>
  );
};

export default CookieDialog;
