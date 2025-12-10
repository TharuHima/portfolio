import React from "react";

function Header() {
  return (
    <header className="site-header">
      <nav>
        <div className="logo">
          <h1>MyPortfolio</h1>
        </div>

        <ul className="nav-links">
          <li><a href="#hero">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
