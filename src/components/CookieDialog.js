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

  if (!isVisible) return null;

  return (
    <>
      <div className="cookie-overlay"></div>
      <div className="cookie-dialog">
        <p>We use cookies to improve your experience. Do you accept?</p>
        <div className="cookie-dialog-buttons">
          <button onClick={handleAccept}>Accept</button>
        </div>
      </div>
    </>
  );
};

export default CookieDialog;
