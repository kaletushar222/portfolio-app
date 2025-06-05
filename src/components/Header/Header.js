import React, { useState } from 'react';
import "./Header.css";
import apiUrls from "../../urls/apiUrls";
import { toggleMobileHeader } from '../../utils/utils';
const Header = ({ sections, scrollActiveSection, setScrollActiveSection }) => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);

  const toggleHeader = () => {
    toggleMobileHeader();
    if (isHeaderVisible) {
      // If header is already visible, hide it
      setIsHeaderVisible(false);
      return;
    }
    setIsHeaderVisible(true);
  };

  const handleNavItemClick = (id) => {
      setScrollActiveSection(id);
      toggleHeader();
  }

  return (
    // add header-show class conditionally based on isHeaderVisible state
    <header id="header" className={`header d-flex flex-column justify-content-center ${isHeaderVisible ? 'header-show' : ''}`}>
      <i onClick={toggleHeader} className="header-toggle d-xl-none bi bi-list"></i>
      <nav id="navmenu" className="navmenu">
        <a href='#hero' style={{ all: "unset" }}>
          <img href="#hero" className="logo-img" src={apiUrls.imagesURL + "assets/img/logo.png"} alt="Logo" />
        </a>
        <br /><br /><br />
        <ul>
          {
              sections.map((navitem) => (
                <li>
                  <a key={navitem.id}
                    href={`#${navitem.id }`}
                    onClick={() => { handleNavItemClick(navitem.id)}}
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