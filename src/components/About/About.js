import React from "react";
import "./About.css";
import ImgTushar from "../../assets/img/tushar.jpg";

const About = ({personalInfo}) => {
  return (
    <section id="about" className="about section">

      <div className="container section-title" data-aos="fade-up">
        <h2>About</h2>
        <p>I’m a passionate IT professional with expertise in front-end development and a keen eye for creating accessible, user-friendly web applications. Over the years, I’ve worked with technologies like React.js, MeteorJS and Backbone.js contributing to projects that drive innovation and efficiency.</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">

        <div className="row gy-4 justify-content-center">
          <div className="col-lg-4">
            <img src={ ImgTushar } className="img-fluid" alt="" />
          </div>
          <div className="col-lg-8 content">
            <h2>{ personalInfo.designation }</h2>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Website:</strong> <span>{ personalInfo.website }</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>{ personalInfo.phone }</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>{ personalInfo.city }</span></li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>{ personalInfo.age }</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>{ personalInfo.degree }</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>{ personalInfo.email }</span></li>
                </ul>
              </div>
            </div>
            <p className="py-3">
              From enhancing legacy systems to building modern, scalable solutions, I’ve always strived to deliver impactful results ..!
            </p>
          </div>
        </div>

      </div>

    </section>
  );
};

export default About;