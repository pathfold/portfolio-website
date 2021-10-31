import React from "react";
import "./Header.scss";

export default class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div class="nav">
                    <div class="nav-logo">
                        <a class="nav-logo-text" href="/">JK</a>
                    </div>
                    <ul class="nav-list">
                        <li class="nav-item"><a class="nav-link">Projects</a></li>
                        <li class="nav-item"><a class="nav-link">About Me</a></li>
                        <li class="nav-item"><a class="nav-link">Resume</a></li>
                    </ul>
                </div>
            </header>
        );
    }
}