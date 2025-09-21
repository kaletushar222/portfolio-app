import { React, useEffect, useState } from "react";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Resume from "../components/Resume/Resume";
import Skills from "../components/Skills/Skills";
import Portfolio from "../components/Portfolio/Portfolio";
import $ from 'jquery';
import { toggleMobileHeader } from "../utils/utils.js";
import apiUrls from "../urls/apiUrls";
import PortfolioDataModel from "../models/PortfolioDataModel";

const PortfolioApp = () => {
    const [scrollActiveSection, setScrollActiveSection] = useState('home');
    const [portfolioData, setPortfolioData] = useState(new PortfolioDataModel());

    useEffect(() => {
        console.log("Fetching portfolio data from ", apiUrls.dataURL + "portfolio-data.json");
        fetch(apiUrls.dataURL + "portfolio-data.json")
            .then(res => res.json())
            .then(data => setPortfolioData(new PortfolioDataModel(data)));
    }, []);

    const appLoaded = () => {
        $("#preloader").hide();
    };
  
    useEffect(() => {
        appLoaded();
    }, []);

    useEffect(() => {
        if (!portfolioData) return;
        const handleScroll = () => {
            portfolioData.sections.forEach((section) => {
                const element = document.getElementById(section.id);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    // If section is in viewport, update activeSection
                    if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
                        console.log("sectionid -- > ", section.id);
                        setScrollActiveSection(section.id);
                    }
                }
            });
        };
    
        window.addEventListener("scroll", handleScroll);
    
        // Cleanup function to remove event listener on unmount
        return () => window.removeEventListener("scroll", handleScroll);
    }, [portfolioData]);

    const hideMobileHeader = () => {
        // if mobile header is visible then hide it
        console.log("hideMobileHeader called");
        debugger;
        const header = document.getElementById("header");
        if (header && header.classList.contains("header-show")) {
            toggleMobileHeader();
        }
    }
    if (!portfolioData) {
        return <div id="preloader"></div>;
    }
    return (
    <div >
        <div id="preloader"></div>
        <Header sections={portfolioData.sections} scrollActiveSection={scrollActiveSection} setScrollActiveSection={setScrollActiveSection} />
        <main onClick={() => hideMobileHeader}>
            <Hero />
            <About personalInfo={ portfolioData.personalInfo } />
            <Skills skills={ portfolioData.skills }/>
            <Resume resumeData={ portfolioData.resumeData } />
            <Portfolio photographs={ portfolioData.photographs } applications={ portfolioData.applications } />
            <Contact personalInfo={ portfolioData.personalInfo } />
        </main>
        <Footer />
    </div>
  );
};

export default PortfolioApp;