import React from "react";
import "./ProjectCard.scss";
import pic from "../images/mirrur.jpeg";
import Aos from "aos";
import "aos/dist/aos.css";

export default class Header extends React.Component {
    componentDidMount() {
        Aos.init();
    }
    
    render() {
        return (
            <div class="project">
                <img class="project-img" src={this.props.imgSrc} data-aos="fade-up" data-aos-duration="1000"/>
                <div class="project-info">
                    <h2 class="project-title" data-aos="fade-up" data-aos-duration="1000">{this.props.title}</h2>
                    <p class="project-desc" data-aos="fade-up" data-aos-duration="1000">{this.props.desc}</p>
                    <div data-aos="fade-up" data-aos-duration="1000" >
                        <a class="project-link btn-light" href="/">
                            See on GitHub
                            <img/>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}