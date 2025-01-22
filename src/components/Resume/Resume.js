import React from "react";
import ImgExp from "../../assets/img/exp.png";
import "./Resume.css";

const Resume = () => {
  return (
    <div>
      <section id="resume" className="resume section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Resume</h2>
          <p>Software Developer with 6+ years of experience, specializing in design and integration problem-solving. Expert in ReactJS with strong skills in database analysis and design. Proficient in developing user requirements, creating specifications, and implementing new features.</p>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
              <h3 className="resume-title">Sumary</h3>
              <div className="resume-item pb-0">
                <h4>Tushar Kale</h4>
                <ul>
                  <li>Pune-Maharastra</li>
                  <li>(+91) 8888422801  </li>
                  <li>kaletushar222@gmail.com</li>
                </ul>
              </div>

              <h3 className="resume-title">Education</h3>
              <div className="resume-item">
                <h4>Master's in Computer Science</h4>
                <h5>2015 - 2017</h5>
                <p><em>Pune University, Maharashra, IN</em></p>
                <p>With a Master’s in Computer Science, I’ve deepened my expertise, refining my ability to tackle advanced technical challenges and innovate in the ever-evolving tech landscape.</p>
              </div>

              <div className="resume-item">
                <h4>Bachelor's in Computer Science</h4>
                <h5>2012 - 2015</h5>
                <p><em>Pune University, Maharashra, IN</em></p>
                <p>With a Bachelor's in Computer Science, I’ve built a strong foundation in problem-solving, innovation, and technology—equipping me to tackle complex challenges and drive impactful solutions.</p>
              </div>

              <div>
                <img id="exp-img" src={ ImgExp } alt="experience" />
              </div>

            </div>

            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
              <h3 className="resume-title">Professional Experience</h3>
              <div className="resume-item">
                <h4>Senior Software Engineer</h4>
                <h5>June 2021 - Present</h5>
                <p><em>Accenture, Pune-Maharashra, IN </em></p>
                <ul>
                  <li><strong>Designed and implemented responsive, user-friendly components</strong> to simplify health plan discovery and sign-up processes.</li>
                  <li><strong>Focused on accessibility standards</strong> to improve usability for people with disabilities.</li>
                  <li><strong>Collaborated with scrum teams</strong> to refine user stories and deliver features aligned with project goals.</li>
                  <li><strong>Provided real-time support</strong> to facilitate smooth product releases.</li>
                  <li>Utilized technologies including <strong>ReactJS, Fiber UI, AEM, and Jenkins</strong> to develop and deploy solutions efficiently.</li>
                </ul>
              </div>

              <div className="resume-item">
                <h4>Assistant Manager - Technical</h4>
                <h5>December 2017 - June 2021</h5>
                <p><em>Procmart, Pune-Maharashra, IN</em></p>
                <ul>
                  <li><strong>Developed user interfaces</strong> using Meteor JS to create interactive and efficient applications.</li>
                  <li><strong>Designed schemas</strong> for a B2B e-commerce web application, enabling robust CRUD operations with MongoDB.</li>
                  <li><strong>Collaborated with teams</strong> to implement financial and stock management strategies.</li>
                  <li><strong>Led training sessions</strong> for new candidates, fostering skill development and team integration.</li>
                  <li><strong>Managed server deployments</strong> while gaining basic knowledge of AWS services like EC2 and Elastic IP.</li>
                </ul>
              </div>

              <div className="resume-item">
                <h4>Junior Java Developer - Intern</h4>
                <h5>December 2016 - June 2017</h5>
                <p><em>LBT Mind Technologies Pvt Ltd</em></p>
                <ul>
                  <li><strong>Enhanced and updated a GWT-based Windows application</strong> for inventory and financial management.</li>
                  <li><strong>Utilized Spring MVC and Hibernate</strong> to support backend processes and improve application performance.</li>
                  <li><strong>Implemented solutions</strong> for billing patterns and automated processes like ordering, billing, and barcoding.</li>
                  <li><strong>Added features</strong> to manage accounting and stock flow effectively.</li>
                </ul>
              </div>

          </div>

        </div>
        </div>

      </section>
    </div>
  );
};

export default Resume;