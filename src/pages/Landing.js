import React from "react";

import Aos from "aos";
import "./Landing.scss";
import "aos/dist/aos.css";

import ProjectCard from "../components/ProjectCard";
import Header from "../components/Header";

import heroImg from "../images/heroImg.png";
import mirrur from "../images/mirrur.jpeg";
import animalRescue from "../images/animalRescue.jpg";
import tmk from "../images/tmk.jpg";
import wtw from "../images/wtw.jpg";
import headImg from "../images/headImg.jpg";

import { animalRescueData, mirrurData, wtwData, tmkData } from "../data/projectInfo";

export default class Landing extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            menuState: "close"
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = (e) => {
        if (this.state.menuState === "open") {
            this.setState({menuState: "close"});
        }
        else {
            this.setState({menuState: "open"});
        }
        console.log("The menuState state is now " + this.state.menuState);
    }

    componentDidMount() {
        Aos.init();
        this.props.updateTitle("Justin Kwong")
    }

    render() {
        return (
            <div style={{height: `100%`}}>
                <Header handleClick={this.handleClick}/>
                {this.state.menuState === "open" && <div class="menu" data-aos="fade-left" data-aos-duration="1000" data-aos-once="true">
                    <ul class={"menu-list " + this.state.menuState}>
                        <li class="menu-item"><a class="menu-link" href="#projects">Projects</a></li>
                        <li class="menu-item"><a class="menu-link" href="#aboutme">About Me</a></li>
                        <li class="menu-item"><a class="menu-link" href="#resume">Resume</a></li>
                    </ul>
                </div> }

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
                
                <div class="projects" id="projects">
                    <div class="projects-margin" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
                        <h1 class="projects-header" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Projects</h1>
                        <div class="projects-divider divider" data-aos="fade-up" data-aos-delay="150" data-aos-duration="1000" data-aos-once="true"></div>
                        <div class="projects-details">
                            <ProjectCard imgSrc={animalRescue} title="Animal Rescue" brief="Dynamic Data Parser for Non-Profit organization" desc={animalRescueData}/>
                            <ProjectCard imgSrc={mirrur} title="Mirrur" brief="Natural Language Processing Chatbot" showLink={true} link="https://github.com/jshom/mirrur" desc={mirrurData}/>
                            <ProjectCard imgSrc={wtw} title="What's The Wave" brief="College Social-Event Finder" showLink={true} link="https://github.com/antmcgrann/whatsthewave" desc={wtwData}/>
                            <ProjectCard imgSrc={tmk} title="TMK Groups" brief="Real-Estate Photography Portfolio" showLink={true} link="https://github.com/pathfold/tmkgroups" desc={tmkData}/>
                        </div>
                    </div>
                </div>

                <div class="aboutme" id="aboutme">
                    <div class="aboutme-margin">
                        <h1 class="aboutme-header" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">About Me</h1>
                        <div class="aboutme-divider divider" data-aos="fade-up" data-aos-delay="150" data-aos-duration="1000" data-aos-once="true"></div>
                        <div class="aboutme-info"  data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000" data-aos-once="true">
                            <img class="aboutme-img" src={headImg} alt="justin kwong"/>
                            <p class="aboutme-text">Hi, I'm Justin. I am currently studying Computer Science at Rensselaer Polytechnic Institute. I have a passion for anything full-stack development and I've worked with technologies like React, MongoDB, Express.js, and Flask before. Outside of work, I love binging Netflix and playing indie pop songs on the piano.</p>
                        </div>
                    </div>
                </div>
                <div style={{height: `100px`}}></div>
            </div>
        );
    }
}