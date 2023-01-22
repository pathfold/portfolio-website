import React from "react";
import Aos from "aos";

import "./Hero.scss";
import "aos/dist/aos.css";

import heroImg from "../images/heroImg.png";

export default class Hero extends React.Component {
    componentDidMount(){
        Aos.init();
    }

    render() {
        return (
            <div class="hero" style={{height: `100%`}}>
                <div class="hero-margin">
                    <div class="hero-left">
                        <h2 class="hero-text-top" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Hi, I'm</h2>
                        <h1 class="hero-text-bottom" data-aos="fade-up" data-aos-delay="150" data-aos-duration="1000" data-aos-once="true">Justin Kwong</h1>
                        <div class="hero-divider divider" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000" data-aos-once="true"></div>
                        <div data-aos="fade-up" data-aos-delay="450" data-aos-duration="1000" data-aos-once="true">
                            <a class="hero-text-btn btn-dark" href="#projects">See My Projects</a>
                        </div>
                    </div>
                    <div class="hero-right">
                        <img class="hero-right-img" src={heroImg} alt="computer with code" data-aos="fade-up" data-aos-delay="450" data-aos-duration="1500" data-aos-once="true"></img>
                    </div>
                </div>
            </div>
        )
    }
}