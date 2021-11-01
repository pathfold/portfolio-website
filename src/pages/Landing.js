import React from "react";

import Aos from "aos";
import "./Landing.scss";
import "aos/dist/aos.css";

import ProjectCard from "../components/ProjectCard";

import headImg from "../images/headImg.jpg";
import mirrur from "../images/mirrur.jpeg";
import animalRescue from "../images/animalRescue.jpg";
import tmk from "../images/tmk.jpg";
import wtw from "../images/wtw.png";

export default class Header extends React.Component {
    componentDidMount() {
        Aos.init();
        this.props.updateTitle("Justin Kwong")
    }

    render() {
        return (
            <div>
                <div class="hero">
                    <div class="hero-margin">
                        <div class="hero-left">
                            <h2 class="hero-text-top" data-aos="fade-up" data-aos-duration="1000">Hi, I'm</h2>
                            <h1 class="hero-text-bottom" data-aos="fade-up" data-aos-delay="150" data-aos-duration="1000">Justin Kwong</h1>
                            <div class="hero-divider divider" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000"></div>
                            <div data-aos="fade-up" data-aos-delay="450" data-aos-duration="1000">
                                <a class="hero-text-btn btn-dark" href="#header">See My Projects</a>
                            </div>
                        </div>
                        <div class="hero-right">
                            <img class="hero-right-img" src={headImg} data-aos="fade-up" data-aos-delay="450" data-aos-duration="1500"></img>
                        </div>
                    </div>
                </div>
                <div class="projects" id="projects">
                    <div class="projects-margin">
                        <h1 class="projects-header" data-aos="fade-up" data-aos-duration="1000">Projects</h1>
                        <div class="projects-divider divider" data-aos="fade-up" data-aos-delay="150" data-aos-duration="1000"></div>
                        <div class="projects-details">
                            <ProjectCard imgSrc={animalRescue} title="Animal Rescue" desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."/>
                            <ProjectCard imgSrc={mirrur} title="Mirrur" desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."/>
                            <ProjectCard imgSrc={wtw} title="What's The Wave" desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."/>
                            <ProjectCard imgSrc={tmk} title="TMK Groups" desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."/>
                        </div>
                    </div>
                </div>
                <div style={{height: `300px`}}></div>
            </div>
        );
    }
}