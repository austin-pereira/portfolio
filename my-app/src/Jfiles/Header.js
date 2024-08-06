import React from 'react';
import '../Cfiles/Header.css';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-name" >Austin Pereira</div>
        <nav className="header-nav">
          <Link to="/experience">Experience</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/case">Cases</Link>
          <Link to="/skills">Skills</Link>
          <Link to="https://medium.com/@austinpereira6602">Blogs</Link>
        </nav>
      </div>
    </header>
  );
};


export default Header;