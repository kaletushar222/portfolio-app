import React from "react";
import "./Footer.css";
import config from "../../config.json";

const Footer = () => {
  return (
    <footer id="footer" class="footer position-relative light-background">
      <div class="container">
        <h3 class="sitename">Tushar Kale</h3>
        <p>Designed with passion and built for creativity.</p>
        <div class="social-links d-flex justify-content-center">
          <a href="https://github.com/kaletushar222" target="_blank" rel="noreferrer"><i class="bi bi-github"></i></a>
          <a href="https://www.facebook.com/tushar.kale2/" target="_blank" rel="noreferrer"><i class="bi bi-facebook"></i></a>
          <a href="https://www.instagram.com/tu__shark/" target="_blank" rel="noreferrer"><i class="bi bi-instagram"></i></a>
          <a href="https://www.linkedin.com/in/tusharkale22/" target="_blank" rel="noreferrer"><i class="bi bi-linkedin"></i></a>
          <a href="https://tusharkale.medium.com/" target="_blank" rel="noreferrer"><i class="bi bi-medium"></i></a>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="container">
          <p class="text-center">© 2025 Tushar Kale. All rights reserved. | V: {config["app-version"]}  </p>
        </div>
      </div>
      <div style={{ float: "right", fontStyle: "italic", marginRight: "2%" }}>
        Last updated: {config.lastUpdated}
      </div>
      <br/>
    </footer>
  )
};

export default Footer;