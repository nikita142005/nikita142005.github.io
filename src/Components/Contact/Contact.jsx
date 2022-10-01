import React from 'react';
import "./Contact.css"
import Discord from "./img/Discord.png"
import Telegram from "./img/Telegram.png"
import VK from "./img/vk.png";
import Mail from "./img/email.png";
import Github from "./img/Github.png"

function Contact(props) {
    return (
        <div id={"contact"} className={"contact_container"}>
            <h1>Contacts</h1>
            <div className={"links_container"}>
                <a href="https://discord.gg" target={"_blank"}>
                    <img src={Discord} alt="Discord"/>
                </a>
                <a href="https://t.me/
" target={"_blank"}>
                    <img src={Telegram} alt="Telegram"/>
                </a>
                <a href="" target={"_blank"}>
                    <img src={Mail} alt="Mail"/>
                </a>
                <a href="https://github.com/" target={"_blank"}>
                    <img src={Github} alt="Github"/>
                </a>
            </div>
        </div>
    );
}

export default Contact;