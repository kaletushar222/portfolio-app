import React from "react";
import "./Skills.css";
import ImgReact from "../../assets/img/skills/react.png";
import ImgJavaScript from "../../assets/img/skills/javascript.png";
import ImgHtml from "../../assets/img/skills/html.png";
import ImgCss from "../../assets/img/skills/css.png";
import ImgBackbone from "../../assets/img/skills/backbonejs.png";
import ImgMeteor from "../../assets/img/skills/meteor.png";
import ImgMongo from "../../assets/img/skills/mongo.png";
import ImgNode from "../../assets/img/skills/node.png";
import ImgPython from "../../assets/img/skills/python.png";
import ImgBootstrap from "../../assets/img/skills/bootstrap.png";
import ImgJquery from "../../assets/img/skills/jquery.png";
import ImgAws from "../../assets/img/skills/aws.png";

/* var skills = [
  {
    name: "JavaScript",
    id: "javascript",
    img: ImgJavaScript
  },
  {
    name: "Html",
    id: "html",
    img: ImgHtml
  },
  {
    name: "Html",
    id: "html",
    img: ImgHtml
  },
  {
    name: "Html",
    id: "html",
    img: ImgHtml
  },
  {
    name: "Html",
    id: "html",
    img: ImgHtml
  }
] */

const Skills = () => {
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
                <div className="tech-box">
                  <img src={ ImgReact } alt="react" />
                  <p>React JS</p>
                </div>
                <div className="tech-box">
                  <img src={ ImgJavaScript } alt="javascript" />
                  <p>JavaScript</p>
                </div>
                <div className="tech-box">
                  <img src={ ImgHtml } alt="html" />
                  <p>HTML</p>
                </div>
                <div className="tech-box">
                  <img src={ ImgCss } alt="CSS" />
                  <p>CSS</p>
                </div>
                <div className="tech-box">
                  <img src={ ImgBackbone } alt="Backbonejs" />
                  <p>BackboneJS</p>
                </div>
                <div className="tech-box">
                  <img src={ ImgMeteor } alt="meteor" />
                  <p>MeteorJS</p>
                </div>
                <div className="tech-box">
                  <img src={ ImgMongo } alt="mongo" />
                  <p>Mongo DB</p>
                </div>
                <div className="tech-box">
                  <img src={ ImgNode } alt="node" />
                  <p>Node JS</p>
                </div>
                <div className="tech-box">
                  <img src={ ImgPython } alt="python" />
                  <p>Python</p>
                </div>
                <div className="tech-box">
                  <img src={ ImgBootstrap } alt="bootstrap" />
                  <p>Bootstrap</p>
                </div>
                <div className="tech-box">
                  <img src={ ImgJquery } alt="jquery" />
                  <p>jQuery</p>
                </div>
                <div className="tech-box">
                  <img src={ ImgAws } alt="aws" />
                  <p>AWS</p>
                </div>
              </div>
            </div>
          </div>
        </section>
    </div>
  );
};

export default Skills;