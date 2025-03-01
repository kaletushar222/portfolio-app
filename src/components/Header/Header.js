import React, { useState, useEffect } from 'react';
import "./Header.css";
import apiUrls from "../../urls/apiUrls";

const Header = ({ sections, scrollActiveSection, setScrollActiveSection }) => {
    return (
      <header id="header" className="header d-flex flex-column justify-content-center">
          <i className="header-toggle d-xl-none bi bi-list"></i>
          <nav id="navmenu" className="navmenu">
          <a href='#hero' style={{ all: "unset"}} >
            <img href="#hero" className="logo-img" src={ apiUrls.imagesURL + "assets/img/logo.png" } alt="Logo" />
          </a>
          <br/><br/><br/>
          <ul>
            {
              sections.map((navitem) => (
                <li>
                  <a key={navitem.id}
                    href={`#${navitem.id }`}
                    onClick={() => setScrollActiveSection(navitem.id)}
                    className={ scrollActiveSection && scrollActiveSection === navitem.id && "active" }
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