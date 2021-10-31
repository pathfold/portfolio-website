import React from "react";
import "./Landing.scss";
import headImg from "../images/headImg.jpg";

export default class Landing extends React.Component {
    render() {
        return (
            <div class="hero">
                <div class="hero-margin">
                    <div class="hero-left">
                        <h2 class="hero-text-top">Hi, I'm</h2>
                        <h1 class="hero-text-bottom">Justin Kwong</h1>
                        <div class="hero-text-divider divider"></div>
                        <a class="hero-text-btn btn" href="#header">See My Projects</a>
                    </div>
                    <div class="hero-right">
                        <img class="hero-head-img" src={headImg}></img>
                    </div>
                </div>
            </div>
        );
    }
}