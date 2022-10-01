import React from 'react';
import "./header.css"

function Header(props) {
    return (
        <div className={"header_container"}>
            <nav className={"header_links"}>
                <a href="#home">
                    <li>Home</li>
                </a>
                <a href="#about">
                    <li>About Me</li>
                </a>
                <a href="#skills">
                    <li>Skills</li>
                </a>
                <a href="#portfolio">
                    <li>Portfolio</li>
                </a>
                <a href="#contact">
                    <li>Contacts</li>
                </a>
            </nav>
            <button class="nav-toggle" id="nav_toogle" type="button">
                <span class="nav-toggle__item">Menu</span>
            </button>
            <div className={"header_underline"}></div>
        </div>
    );
}

export default Header;