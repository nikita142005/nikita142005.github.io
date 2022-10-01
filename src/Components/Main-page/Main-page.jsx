import React from 'react';
import "./Main-page.css"
import Header from "../Header/header";
import Home from "../Home/Home";
import About from "../AboutMe/About";
import Skills from "../Skills/Skills";
import Portfolio from "../Portfolio/Portfolio"
import Contact from "../Contact/Contact";

function MainPage(props) {
    return (
        <div className={"site-container"}>
            <Header/>
            <Home/>
            <About/>
            <Skills/>
            <Portfolio/>
            <Contact/>
        </div>
    );
}

export default MainPage;
