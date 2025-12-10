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
        <span className="skill-badge">JavaScript (ES6+)</span>
        <span className="skill-badge">HTML, CSS, Tailwind</span>
        <span className="skill-badge">Node.js</span>
        <span className="skill-badge">Git & GitHub</span>
      </div>

      <p>I also enjoy reading, crocheting, and learning new technologies.</p>
    </section>
  );
}

export default About;
