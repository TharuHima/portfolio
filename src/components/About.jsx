import React from 'react';

function About() {
  return (
    <section id="about" className="about-section">
      <h2>About Me</h2>
      <p>
        I am a passionate software developer with a strong focus on frontend technologies
        and crafting seamless user experiences.
      </p>

      <h3>Tech Stack & Skills</h3>
      <div className="skills-list">
        <span className="skill-badge">React</span>
        <span className="skill-badge">JavaScript</span>
        <span className="skill-badge">HTML, CSS</span>
        <span className="skill-badge">Git & GitHub</span>
      </div>

      <p>I also like working on creative projects and learning something new every day.</p>
    </section>
  );
}

export default About;
