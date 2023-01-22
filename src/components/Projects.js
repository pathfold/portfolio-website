import React from "react";
import Aos from "aos";

import "./Projects.scss";
import "aos/dist/aos.css";

import ProjectCard from "../components/ProjectCard";
import { projectData } from "../data/projectInfo";

export default class Projects extends React.Component {
    componentDidMount() {
        Aos.init();
    }

    render() {
        return (
            <div class="projects" id="projects">
                <div class="projects-margin" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
                    <h1 class="projects-header" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Projects</h1>
                    <div class="projects-divider divider" data-aos="fade-up" data-aos-delay="150" data-aos-duration="1000" data-aos-once="true"></div>
                    <div class="projects-details">
                        {
                            projectData.map((data => {
                                return (
                                    <ProjectCard title={data.title} brief={data.brief} desc={data.description} link={data.link} showLink={data.showLink} imgSrc={data.imgSrc} />
                                )
                            }))
                        }
                    </div>
                </div>
            </div>
        )
    }
}