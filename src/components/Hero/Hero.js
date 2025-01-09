import React from "react";
import "./Hero.css";
import ImgHeroBg from "../../assets/img/hero-bg.jpg";

const Hero = () => {
    console.log("hero", ImgHeroBg );
  return (
    <section id="hero" class="hero section light-background">
      <img src={ ImgHeroBg } alt="hero" />
      <div class="container" data-aos="zoom-out">
        <div class="row justify-content-center">
          <div class="col-lg-9">
            <h2>Tushar Kale</h2>
            <p>I'm <span class="typed" data-typed-items="Developer, Designer, Photographer">Developer</span><span class="typed-cursor typed-cursor--blink" aria-hidden="true"></span></p>
            <div class="social-links">
              <a href="https://github.com/kaletushar222" target="_blank"><i class="bi bi-github"></i></a>
              <a href="https://www.facebook.com/tushar.kale2/" target="_blank"><i class="bi bi-facebook"></i></a>
              <a href="https://www.instagram.com/tu__shark/" target="_blank"><i class="bi bi-instagram"></i></a>
              <a href="https://www.linkedin.com/in/tusharkale22/" target="_blank"><i class="bi bi-linkedin"></i></a>
              <a href="https://tusharkale.medium.com/" target="_blank"><i class="bi bi-medium"></i></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;