import { React, useEffect } from "react";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Resume from "../components/Resume/Resume";
import Skills from "../components/Skills/Skills";
import Portfolio from "../components/Portfolio/Portfolio";
import $ from 'jquery';


const PortfolioApp = () => {
    
    const appLoaded = () => {
        $("#preloader").hide();
    };
  
    useEffect(() => {
        console.log("I Only run once (When the component gets mounted)")
        appLoaded();
    }, []);

    return (
    <div>
        <div id="preloader"></div>
        <Header />
        <main>
            <Hero />
            <About />
            <Skills />
            <Resume />
            <Portfolio />
            <Contact />
        </main>
        <Footer />
    </div>
  );
};

export default PortfolioApp;