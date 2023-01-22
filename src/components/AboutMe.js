import React from "react";
import Aos from "aos";

import "./AboutMe.scss";
import "aos/dist/aos.css";

import headImg from "../images/headImg.jpg";

export default class AboutMe extends React.Component {
    componentDidMount() {
        Aos.init();
    }

    render() {
        return (
            <div class="aboutme" id="aboutme">
                <div class="aboutme-margin">
                    <h1 class="aboutme-header" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">About Me</h1>
                    <div class="aboutme-divider divider" data-aos="fade-up" data-aos-delay="150" data-aos-duration="1000" data-aos-once="true"></div>
                    <div class="aboutme-info"  data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000" data-aos-once="true">
                        <img class="aboutme-img" src={headImg} alt="justin kwong"/>
                        <p class="aboutme-text">Hi, I'm Justin. I am a recent graduate with a B.S in Computer Science from Rensselaer Polytechnic Institute. I have a passion for anything full-stack development and I've worked with technologies like React, MongoDB, Express.js, and Flask before. Outside of work, I love binging Netflix and playing indie pop songs on the piano.</p>
                    </div>
                </div>
            </div>
        )
    }
}