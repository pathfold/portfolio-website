import React from "react";

import Aos from "aos";
import "./Landing.scss";
import "aos/dist/aos.css";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import Projects from "../components/Projects";

import resumePdf from "../docs/resumePdf.pdf";

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
                        <li class="menu-item"><a class="menu-link" href={resumePdf} target="_blank" rel="noreferrer">Resume</a></li>
                    </ul>
                </div> }
                
                <Hero />
                <Projects />
                <AboutMe />
                <Footer />
            </div>
        );
    }
}