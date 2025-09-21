import React from "react";
import "./Skills.css";
import apiUrls from "../../urls/apiUrls";

const Skills = ({skills}) => {
  return (
    <div>
        <section id="skills" className="skills section">
          <div className="container section-title" data-aos="fade-up">
            <h2>Skills</h2>
            <p>Highlighting the Skills and Expertise That Define My Journey and Drive Success</p>
          </div>
          <div className="container" data-aos="fade-up" data-aos-delay="100">
            <div className="row gy-4 justify-content-center">
              <div className="tech-container">
                {
                  skills.map((skill, map)=>{
                    return (
                      <div className="tech-box">
                        <img src={ apiUrls.imageURL + skill.imageUrl } alt={ skill.name } />
                        <p>{ skill.name }</p>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
        </section>
    </div>
  );
};

export default Skills;