import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header id="header" class="header d-flex flex-column justify-content-center">
        <i class="header-toggle d-xl-none bi bi-list"></i>
        <nav id="navmenu" class="navmenu">
        <img href="#hero" id="hero-img" src="assets/img/logo.png" alt="Logo" />
        <br/><br/><br/>
        <ul>
            <li><a href="#hero" class="active"><i class="bi bi-house navicon"></i><span>Home</span></a></li>
            <li><a href="#about"><i class="bi bi-person navicon"></i><span>About</span></a></li>
            <li><a href="#resume"><i class="bi bi-file-earmark-text navicon"></i><span>Resume</span></a></li>
            <li><a href="#portfolio"><i class="bi bi-images navicon"></i><span>Gallery</span></a></li>
            <li><a href="#contact"><i class="bi bi-envelope navicon"></i><span>Contact</span></a></li>
        </ul>
        </nav>
    </header>
  );
};

export default Header;