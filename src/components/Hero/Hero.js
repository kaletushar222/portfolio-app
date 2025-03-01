import React, { useEffect } from "react";
import "./Hero.css";
import Typewriter from "../Typewriter/Typewriter"
import apiUrls from "../../urls/apiUrls";

const Hero = () => {
  useEffect(() => {
  }, []);

  return (
    <section id="hero" className="hero section light-background">
      <img src={ apiUrls.imagesURL + "assets/img/hero-bg.jpg" } alt="hero" />
      <div className="container" data-aos="zoom-out">
        <div className="row justify-content-center">
          <div className="col-lg-9">
            <h2>Tushar Kale</h2>
            <p>I'm <Typewriter
                    words={['Developer', 'Photographer', 'Designer']}
                    typeSpeed={100}
                    delay={1000}
                  />
            </p>
            <div className="social-links">
              <a href="https://github.com/kaletushar222" target="_blank"><i className="bi bi-github"></i></a>
              <a href="https://www.facebook.com/tushar.kale2/" target="_blank"><i className="bi bi-facebook"></i></a>
              <a href="https://www.instagram.com/tu__shark/" target="_blank"><i className="bi bi-instagram"></i></a>
              <a href="https://www.linkedin.com/in/tusharkale22/" target="_blank"><i className="bi bi-linkedin"></i></a>
              <a href="https://tusharkale.medium.com/" target="_blank"><i className="bi bi-medium"></i></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;