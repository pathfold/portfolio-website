import React, { useEffect } from "react";
import "./Landing.scss";
import headImg from "../images/headImg.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

export default class Header extends React.Component {
    componentDidMount() {
        Aos.init();
        this.props.updateTitle("Justin Kwong")
    }

    render() {
        return (
            <div class="hero">
                <div class="hero-margin">
                    <div class="hero-left">
                        <h2 class="hero-text-top" data-aos="fade-up" data-aos-duration="1500">Hi, I'm</h2>
                        <h1 class="hero-text-bottom" data-aos="fade-up" data-aos-delay="150" data-aos-duration="1500">Justin Kwong</h1>
                        <div class="hero-text-divider divider" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1500"></div>
                        <div data-aos="fade-up" data-aos-delay="450" data-aos-duration="1500">
                            <a class="hero-text-btn btn" href="#header">See My Projects</a>
                        </div>
                    </div>
                    <div class="hero-right">
                        <img class="hero-head-img" src={headImg} data-aos="fade-up" data-aos-delay="450" data-aos-duration="1500"></img>
                    </div>
                </div>
            </div>
        );
    }
}