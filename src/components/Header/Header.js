import React, { useState, useEffect } from 'react';
import "./Header.css";
import apiUrls from "../../urls/apiUrls";

const Header = () => {
    const [activeSection, setActiveSection] = useState('home');
    
    const sections = [
      { id: 'hero', title: 'Home', icon: "bi bi-house navicon" },
      { id: 'about', title: 'About', icon: "bi bi-person navicon" },
      { id: 'skills', title: 'Skills', icon: "bi bi-code-slash navicon" },
      { id: 'resume', title: 'Resume', icon: "bi bi-file-earmark-text navicon"},
      { id: 'portfolio', title: 'Gallary', icon: "bi bi-images navicon" },
      { id: 'contact', title: 'Contact', icon: "bi bi-envelope navicon" }
    ];

    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(entry.target.id);
            }
          });
        },
        { threshold: 0.6 } // Adjust threshold for sensitivity
      );
  
      sections.forEach(({ id }) => {
        const sectionElement = document.getElementById(id);
        if (sectionElement) {
          observer.observe(sectionElement);
        }
      });
  
      return () => {
        sections.forEach(({ id }) => {
          const sectionElement = document.getElementById(id);
          if (sectionElement) {
            observer.unobserve(sectionElement);
          }
        });
      };
    }, []);

  return (
    <header id="header" class="header d-flex flex-column justify-content-center">
        <i class="header-toggle d-xl-none bi bi-list"></i>
        <nav id="navmenu" class="navmenu">
        <a href='#hero' style={{ all: "unset"}} >
          <img href="#hero" className="logo-img" src={ apiUrls.getImagesUrl + "assets/img/logo.png" } alt="Logo" />
        </a>
        <br/><br/><br/>
        <ul>
          {
            sections.map((navitem) => (
              <li>
                <a key={navitem.id}
                  href={`#${navitem.id }`}
                  className={ activeSection && activeSection === navitem.id && "active" }
                >
                  <i className={ navitem.icon }></i>
                  <span>{ navitem.title }</span>
                </a>
              </li>
            ))
          }
        </ul>
        </nav>
    </header>
  );
};

export default Header;