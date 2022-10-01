import React from 'react';
import "./Home.css"
import man_image from "./img/man-image.png"

function Home(props) {
    return (
        <div id={"home"} className={"home_container"}>
            <div className={"text_container"}>
                <h1>NAME<br/>SURNAME</h1>
                <p>Front-End | Developer <br/>AGE years old, RU/AZ</p>
                <p>RU | ENG | AZ</p>
            </div>
            <img className={"image_man-image"} src={man_image} alt="eror"/>
        </div>
    );
}

export default Home;