import React from 'react';
import '../Cfiles/HeaderRest.css';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="name-and-title">
          <span className="header-name">Austin Pereira</span>
          <span className="header-title">Robotics and AI Engineer</span>
        </div>
        <nav className="header-nav">
        <Link to="/">Home</Link>
          <Link to="/skills">Skills</Link>
          <Link to="/experience">Experience</Link>
          <Link to="/projects">Projects</Link>
          <Link to="https://medium.com/@austinpereira6602">Blogs</Link>
        </nav>
      </div>
    </header>
  );
};

export default About;


