import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer" class="footer position-relative light-background">
      <div class="container">
        <h3 class="sitename">Tushar Kale</h3>
        <p>Designed with passion and built for creativity.</p>
        <div class="social-links d-flex justify-content-center">
          <a href="https://github.com/kaletushar222" target="_blank"><i class="bi bi-github"></i></a>
          <a href="https://www.facebook.com/tushar.kale2/" target="_blank"><i class="bi bi-facebook"></i></a>
          <a href="https://www.instagram.com/tu__shark/" target="_blank"><i class="bi bi-instagram"></i></a>
          <a href="https://www.linkedin.com/in/tusharkale22/" target="_blank"><i class="bi bi-linkedin"></i></a>
          <a href="https://tusharkale.medium.com/" target="_blank"><i class="bi bi-medium"></i></a>
        </div>
      </div>
    </footer>
  )
};

export default Footer;