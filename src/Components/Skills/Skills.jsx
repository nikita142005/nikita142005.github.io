import React from 'react';
import "./Skills.css";
import css_skill_img from "./img/css.png";
import html_skill_img from "./img/html5.png";
import js_skill_img from "./img/js-img.png";
import python_skill_img from "./img/python.png"
import react_skill_img from "./img/react-img.png";


function Skills(props) {
    return (
        <div id={"skills"} className={"skills"}>
            <p class="skills__title">Skills</p>
            <div className={"skills__container"}>
                <div className={"skills__item"}>
                    <img src={css_skill_img} alt="css"/>
                    <h1>CSS</h1>
                </div>
                <div className={"skills__item"}>
                    <img src={html_skill_img} alt="html"/>
                    <h1>HTML</h1>
                </div>
                <div className={"skills__item"}>
                    <img src={js_skill_img} alt="js"/>
                    <h1>JS</h1>
                </div>
                <div className={"skills__item"}>
                    <img src={react_skill_img} alt="react"/>
                    <h1>React</h1>
                </div>
                <div className={"skills__item"}>
                    <img src={python_skill_img} alt="python"/>
                    <h1>Python</h1>
                </div>
            </div>
        </div>
    );
}

export default Skills;
