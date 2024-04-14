import React from 'react';
import '../Cfiles/Experience.css';
import allos from '../images/allos.png';
import berkeley from '../images/berkely.png';
import bosco from '../images/bosco.jpeg';
import stealth from '../images/stealth.jpeg';
import deanza from '../images/deAnza.png';
import jacobi from '../images/jacobi.png';

const experiencesData = {
  schooling: [
    { id: 'bosco', image: bosco, title: 'Bosco School', date: 'Jan 24', description: 'Description for Bosco School...' },
    // ... other schooling experiences
  ],
  professional: [
    { id: '1', image: allos, title: 'Machine Learning Engineer Allos AI', date: 'Jan 24 - Present', description: 'Collaborated with cross-functional teams to refine machine learning models and causal algorithms, leveraging innovative methodologies to enhance predictive capabilities on pharmaceutical drug testing results. ' }
    ,{ id: '2', image: jacobi, title: 'QA and Software Intern at Jacobi Studios', date: 'Dec 23 - Feb 24', description: 'Collaborated with cross-functional teams to refine machine learning models and causal algorithms, leveraging innovative methodologies to enhance predictive capabilities on pharmaceutical drug testing results. ' }
    ,{ id: '3', image: stealth, title: 'Co-Founder', date: 'Jan 24 - Present', description: 'Building a B2B SAAS AI software for Online Clothing Brands. Using 2d modelling, computer Vision and AI algorithms to imrpovise shopping experience.' }
    ,{ id: '4', image: deanza, title: 'Senior Tutor at MSTRC Center at De Anza', date: 'Jan 24 - Present', description: 'Tutored for Physics, Math and Stat classes part time and helping students clarify their concepts and develop a deep understanding about the material by making weekly sample quiz sheets and sample midterm question paper before exam' }
  ],
  research: [
    { id: '1', image: berkeley, title: 'Research Assistant For Adam Anderson', date: 'Aug 23 - Dec 23', description: 'Conducted Research in Computational Linguistics to translate cuneiforms.Achieved a 70% increase in text recognition accuracy through enhancing optical character recognition algorithms and iterative improvements. Composed over 5 comprehensive Jupyter Notebooks documenting the image translation process for cuneiform texts, enabling global access for historians and researchers. Crafted a valuable resource for combatting illicit trade, and aiding in deciphering ancient scripts. ' }
  ],
  personalProjects: [
    { id: 'bosco', image: bosco, title: 'Bosco School', date: 'Jan 24', description: 'Description for Bosco School...' }
  ],
};

const ExperienceBox = ({ image, title, date, description }) => {
  return (
    <div className="experience-box">
      <div className="image-container">
        <img src={image} alt={title} className="img-inborder" />
      </div>
      <div className="text-content">
        <h2>{title}</h2>
        <hr />
        <p>{date}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};

const ExperienceSection = ({ title, experiences }) => (
  <div className="experience-section">
    <h2 className="section-title">{title}</h2>
    {experiences.map((exp) => (
      <ExperienceBox key={exp.id} {...exp} />
    ))}
  </div>
);
const Experience = () => {
  return (
    <div>
       <ExperienceSection title="Research Experience" experiences={experiencesData.research} />
      <ExperienceSection title="Professional Experience" experiences={experiencesData.professional} />
     
      
    </div>
  );
};

export default Experience;


