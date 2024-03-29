import React from "react";
import "./ProjectCard.scss";
import Aos from "aos";
import "aos/dist/aos.css";

export default class ProjectCard extends React.Component {
    componentDidMount() {
        Aos.init();
    }
    
    render() {
        return (
            <div class="project">
                <img class="project-img" src={this.props.imgSrc} alt="project"/>
                <div class="project-info">
                    <h2 class="project-title">{this.props.title}</h2>
                    <h5 class="project-brief"><em>{this.props.brief}</em></h5>
                    <p class="project-desc">{this.props.desc}</p>
                    {(this.props.showLink) && 
                        <div>
                            <a class="project-link btn-dark" target="_blank" rel="noopener noreferrer" href={this.props.link || "/"}>
                                See on GitHub
                            </a>
                        </div>}
                </div>
            </div>
        );
    }
}