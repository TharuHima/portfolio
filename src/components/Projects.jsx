function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>

      <div className="projects-grid">

        <div className="project-card">
          <h3>Online Job Portal</h3>
          <p>A full-stack web application designed to modernize the recruitment process by connecting job seekers with employers through a centralized digital platform.
            This system provides a complete solution for job posting, application management, and real-time communication.
          </p>

          <div className="tech-badge-list">
            <span className="tech-badge">HTML</span>
            <span className="tech-badge">CSS</span>
            <span className="tech-badge">JavaScript</span>
            <span className="tech-badge">PHP</span>
          </div>

          <div className="project-links">
            <a className="btn github-btn" href="https://github.com/TharuHima/jobportal.git" target="_blank">GitHub</a>
          </div>
        </div>

        <div className="project-card">
          <h3>Autonomous Robot for Warehouses</h3>
          <p>The system integrates Arduino and ESP32 controllers with IR, ultrasonic, and LiDAR sensors to enable autonomous navigation and obstacle detection. 
            High-torque motors, a motor driver, and a compact lifting mechanism handle movement and load operations, 
            all mounted on a durable chassis to ensure stable performance.
          </p>

          <div className="tech-badge-list">
            <span className="tech-badge">Arduino</span>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Projects;
