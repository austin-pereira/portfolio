import React from 'react';
import '../Cfiles/Header.css';


const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-name">Austin Pereira</div>
        <nav className="header-nav">
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#blogs">Blogs</a>
        </nav>
      </div>
    </header>
  );
};


export default Header;