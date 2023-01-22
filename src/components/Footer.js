import React from "react";
import "./Footer.scss";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default class Footer extends React.Component {
    render() {
        return (
            <footer id="footer" class="footer">
                <div class="footer-margin">
                    <div class="footer-links">
                        <a href="https://www.linkedin.com/in/justinkwong1/" target="_blank" rel="noreferrer" class="footer-icon" ><FaLinkedin /></a>
                        <a href="https://github.com/pathfold" target="_blank" rel="noreferrer" class="footer-icon"><FaGithub /></a>
                    </div>
                    <div class="footer-logo"><a href="/">justinkwong.dev</a></div>
                </div>
            </footer>
        );
    }
}