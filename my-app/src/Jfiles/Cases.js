import React from 'react';
import '../Cfiles/Cases.css'; // Import your CSS file

const Cases = () => {
  return (
    <div className="cases-container">
      <h2>Case Studies</h2>
      <ul className="case-study-list"> {/* Use an unordered list for bullet points */}
        <li>
          <a href="https://medium.com/@austinpereira6602/case-study-1-8ec2fe2e9f4a" target="_blank" rel="noopener noreferrer">
            Roomba Case Study
          </a>
        </li>
        <li>
          <a href="https://medium.com/@austinpereira6602/chatgpt-9628d5368afd" target="_blank" rel="noopener noreferrer">
            ChatGPT case Study
          </a>
        </li>
        {/* Add more case study links as needed */}
      </ul>
    </div>
  );
};

export default Cases;
