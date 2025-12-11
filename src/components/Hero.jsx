import React from "react";
import ProfilePic from '../assets/profile.jpg';

function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <img src={ProfilePic} className="profile-pic" alt="Profile Picture" />
        <h1>Hi, I'm Tharushi Himadhya</h1>
        <h2>Software Developer | Designer</h2>
        <p className="bio-summary">
          Crafting intuitive digital experiences through modern frontend engineering 
          and innovative problem-solving.
        </p>

        <a href="#projects" className="btn primary-btn">
          View My Work
        </a>
      </div>
    </section>
  );
}

export default Hero;
