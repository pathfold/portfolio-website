import React from "react";

import Aos from "aos";
import "./Landing.scss";
import "aos/dist/aos.css";

import ProjectCard from "../components/ProjectCard";

import heroImg from "../images/heroImg.png";
import mirrur from "../images/mirrur.jpeg";
import animalRescue from "../images/animalRescue.jpg";
import tmk from "../images/tmk.jpg";
import wtw from "../images/wtw.jpg";
import headImg from "../images/headImg.jpg";

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
                            <h2 class="hero-text-top" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Hi, I'm</h2>
                            <h1 class="hero-text-bottom" data-aos="fade-up" data-aos-delay="150" data-aos-duration="1000" data-aos-once="true">Justin Kwong</h1>
                            <div class="hero-divider divider" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000" data-aos-once="true"></div>
                            <div data-aos="fade-up" data-aos-delay="450" data-aos-duration="1000" data-aos-once="true">
                                <a class="hero-text-btn btn-dark" href="#projects">See My Projects</a>
                            </div>
                        </div>
                        <div class="hero-right">
                            <img class="hero-right-img" src={heroImg} data-aos="fade-up" data-aos-delay="450" data-aos-duration="1500" data-aos-once="true"></img>
                        </div>
                    </div>
                </div>
                
                <div class="projects" id="projects">
                    <div class="projects-margin">
                        <h1 class="projects-header" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Projects</h1>
                        <div class="projects-divider divider" data-aos="fade-up" data-aos-delay="150" data-aos-duration="1000" data-aos-once="true"></div>
                        <div class="projects-details">
                            <ProjectCard imgSrc={animalRescue} title="Animal Rescue" brief="Dynamic Data Parser for Non-Profit organization" link="/" desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."/>
                            <ProjectCard imgSrc={mirrur} title="Mirrur" brief="Natural Language Processing Chatbot" link="https://github.com/jshom/mirrur" desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."/>
                            <ProjectCard imgSrc={wtw} title="What's The Wave" brief="College Social-Event Finder" link="https://github.com/antmcgrann/whatsthewave" desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."/>
                            <ProjectCard imgSrc={tmk} title="TMK Groups" brief="Real-Estate Photography Portfolio" link="https://github.com/pathfold/tmkgroups" desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."/>
                        </div>
                    </div>
                </div>

                <div class="aboutme" id="aboutme">
                    <div class="aboutme-margin">
                        <h1 class="aboutme-header" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">About Me</h1>
                        <div class="aboutme-divider divider" data-aos="fade-up" data-aos-delay="150" data-aos-duration="1000" data-aos-once="true"></div>
                        <div class="aboutme-info"  data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000" data-aos-once="true">
                            <img class="aboutme-img" src={headImg}/>
                            <p class="aboutme-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                    </div>
                </div>
                <div style={{height: `100px`}}></div>
            </div>
        );
    }
}