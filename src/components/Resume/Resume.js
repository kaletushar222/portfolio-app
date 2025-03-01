import React from "react";
import ImgExp from "../../assets/img/exp.png";
import "./Resume.css";

const Resume = ({resumeData}) => {
  return (
    <section id="resume" className="resume section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Resume</h2>
        <p>{resumeData.summary}</p>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <h3 className="resume-title">Summary</h3>
            <div className="resume-item pb-0">
              <h4>{resumeData.name}</h4>
              <ul>
                <li>{resumeData.location}</li>
                <li>{resumeData.phone}</li>
                <li>{resumeData.email}</li>
              </ul>
            </div>

            <h3 className="resume-title">Education</h3>
            {resumeData.education.map((edu, index) => (
              <div className="resume-item" key={index}>
                <h4>{edu.degree}</h4>
                <h5>{edu.years}</h5>
                <p><em>{edu.university}</em></p>
                <p>{edu.description}</p>
              </div>
            ))}

            <div>
              <img id="exp-img" src={ImgExp} alt="experience" />
            </div>
          </div>

          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
            <h3 className="resume-title">Professional Experience</h3>
            {resumeData.experience.map((exp, index) => (
              <div className="resume-item" key={index}>
                <h4>{exp.title}</h4>
                <h5>{exp.years}</h5>
                <p><em>{exp.company}</em></p>
                <ul>
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i}>{resp}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
