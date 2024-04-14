import React from "react";
import '../Cfiles/Projects.css'; // Import your CSS file
import libraryImage from '../images/library.jpg';
import house from '../images/housing.jpg';
import journey from '../images/journeyGenie.jpg';
import tapgame from '../images/tapgame.png';
import byow from '../images/byow.png';
import suduko from '../images/suduko.png';
import Emotional from '../images/emotionalAI.png';

const Portfolio = () => {
  const portfolios = [
    {
      id: 4,
      src: byow, // use the imported image variable here
      title: "BYOW Game",
      description: "Coin Collection Game with AI programmed catcher.",
      repoLink: "https://github.com/your-username/library-management-repo"
    },
    {
      id: 4,
      src: Emotional, // use the imported image variable here
      title: "Emotional AI",
      description: "Assesses Users Mood Based on Questionnaire and Face Recognition.",
      repoLink: "https://devpost.com/software/genai-173sk0"
    },
    {
      id: 1,
      src: journey, // use the imported image variable here
      title: "AILocation Suggestor",
      description: "Suggest Location Based on Users Personality.",
      repoLink: "https://devpost.com/software/journeygenie-zavmf7"
    },
    {
      id: 2,
      src: house, // use the imported image variable here
      title: "Housing Project",
      description: "Tinder Like Housing Search For College Students.",
      repoLink: "https://devpost.com/software/housing-9-0"
    },
    {
      id: 4,
      src: libraryImage, // use the imported image variable here
      title: "Library Management",
      description: "Self Management Library Database.",
      repoLink: "https://github.com/AUSt-in/bookshelf"
    },
    {
      id: 4,
      src: suduko, // use the imported image variable here
      title: "AI suduko Solver",
      description: "Suduko Solver that uses AI to solve for missing Values.",
      repoLink: "https://github.com/AUSt-in/Suduko_Solver_ML"
    },
    {
      id: 4,
      src: tapgame, // use the imported image variable here
      title: "Tap game",
      description: "Tap the Floor Game.",
      repoLink: "https://github.com/AUSt-in/games_projects"
    },
    
    // Add more projects here
  ];

  return (
    <div className="portfolio-container">
      {portfolios.map(({ id, src, title, description, repoLink }) => (
        <div key={id} className="portfolio-card">
          <img src={src} alt={title} className="portfolio-image" />
          <div className="portfolio-content">
            <p className="portfolio-title">{title}</p>
            <p className="portfolio-description">{description}</p>
            <button
              className="portfolio-button"
              onClick={() => window.open(repoLink, "_blank")}
            >
              Visit
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Portfolio;

