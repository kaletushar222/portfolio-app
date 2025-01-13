import React from "react";
import "./About.css";
import ImgTushar from "../../assets/img/tushar.jpg";

const About = () => {
  return (
    <section id="about" class="about section">

      <div class="container section-title" data-aos="fade-up">
        <h2>About</h2>
        <p>I’m a passionate IT professional with expertise in front-end development and a keen eye for creating accessible, user-friendly web applications. Over the years, I’ve worked with technologies like React.js, MeteorJS and Backbone.js contributing to projects that drive innovation and efficiency.</p>
      </div>

      <div class="container" data-aos="fade-up" data-aos-delay="100">

        <div class="row gy-4 justify-content-center">
          <div class="col-lg-4">
            <img src={ ImgTushar } class="img-fluid" alt="" />
          </div>
          <div class="col-lg-8 content">
            <h2>UI/UX Designer &amp; Web Developer.</h2>
            <div class="row">
              <div class="col-lg-6">
                <ul>
                  <li><i class="bi bi-chevron-right"></i> <strong>Website:</strong> <span>www.tushark.in</span></li>
                  <li><i class="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+91 8888422801</span></li>
                  <li><i class="bi bi-chevron-right"></i> <strong>City:</strong> <span>Pune-Maharashra, India</span></li>
                </ul>
              </div>
              <div class="col-lg-6">
                <ul>
                  <li><i class="bi bi-chevron-right"></i> <strong>Age:</strong> <span>30</span></li>
                  <li><i class="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Master's In Computer Science</span></li>
                  <li><i class="bi bi-chevron-right"></i> <strong>Email:</strong> <span>kaletushar222@gmail.com</span></li>
                </ul>
              </div>
            </div>
            <p class="py-3">
              From enhancing legacy systems to building modern, scalable solutions, I’ve always strived to deliver impactful results ..!
            </p>
          </div>
        </div>

      </div>

    </section>
  );
};

export default About;