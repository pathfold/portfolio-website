import React from "react";
import "./Header.scss";
import resumePdf from "../docs/resumePdf.pdf";

export default class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div class="nav">
                    <div class="nav-logo">
                        <a class="nav-logo-text" href="/">jk</a>
                    </div>
                    <ul class="nav-list">
                        <li class="nav-item"><a class="nav-link" href="#projects">Projects</a></li>
                        <li class="nav-item"><a class="nav-link" href="#aboutme">About Me</a></li>
                        <li class="nav-item"><a class="nav-link" style={{color: `rgb(255, 243, 149)`}} href={resumePdf} target="_blank" rel="noreferrer">Resume</a></li>
                    </ul>
                    <div class="nav-menu" onClick={this.props.handleClick}>
                        <div class="nav-bar"></div>
                        <div class="nav-bar"></div>
                        <div class="nav-bar"></div>
                    </div>
                </div>
            </header>
        );
    }
}

/*
<li class="nav-item"><a class="nav-link" href="#projects">Projects</a></li>
                        <li class="nav-item"><a class="nav-link" href="#aboutme">About Me</a></li>
                        <li class="nav-item"><a class="nav-link" href="#resume">Resume</a></li>
*/