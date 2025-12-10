import React from 'react';
import LinkedInIcon from '../assets/linkedin.png';
import GitHubIcon from '../assets/github.png';

function Footer() {
  const currentYear = new Date().getFullYear(); 

  return (
    <footer className="site-footer">
      <p>
        &copy; {currentYear} [Tharushi Himadhya]. Built with React.
      </p>
      <div className="social-links">
        <a href="https://www.linkedin.com/in/tharushi-himadhya-94364a320" target="_blank"><img src={LinkedInIcon} className="contact-icon" alt="Hero visual" /></a>
        <a href="https://github.com/TharuHima" target="_blank"><img src={GitHubIcon} className="contact-icon" alt="Hero visual" /></a>
      </div>
    </footer>
  );
}

export default Footer;