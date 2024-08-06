import React from 'react';
import '../Cfiles/MainBody.css';
import profilePic from '../profile.jpg';

function MainBody() {
  return (
    <div className="main-body">
      <div className="image-container">
        <img src={profilePic} alt="Profile" className="profile-img" />
    </div>
      <div className="text-content">
        <h1>
          <span className="animated-letter" style={{ '--index': 0 }}>👋🏼</span>
          <span className="animated-letter" style={{ '--index': 1 }}>H</span>
          <span className="animated-letter" style={{ '--index': 2 }}>e</span>
          <span className="animated-letter" style={{ '--index': 3 }}>l</span>
          <span className="animated-letter" style={{ '--index': 4 }}>l</span>
          <span className="animated-letter" style={{ '--index': 5 }}>o</span>
          <span className="animated-letter" style={{ '--index': 6 }}>,</span>
          <span className="animated-letter" style={{ '--index': 7 }}>&nbsp;</span>
          <span className="animated-letter" style={{ '--index': 8 }}>I</span>
          <span className="animated-letter" style={{ '--index': 9 }}>'m</span>
          <span className="animated-letter" style={{ '--index': 10 }}>&nbsp;</span>
          <span className="animated-letter" style={{ '--index': 11 }}>A</span>
          <span className="animated-letter" style={{ '--index': 12 }}>u</span>
          <span className="animated-letter" style={{ '--index': 13 }}>s</span>
          <span className="animated-letter" style={{ '--index': 14 }}>t</span>
          <span className="animated-letter" style={{ '--index': 15 }}>i</span>
          <span className="animated-letter" style={{ '--index': 16 }}>n</span>
          <span className="animated-letter" style={{ '--index': 17 }}>!</span>
        </h1>
        <hr />
        <p>
          A driven <span className="focus">Computer Science senior</span> at the 
          <span className="focus"><a href="https://www.berkeley.edu/about/" target="_blank" rel="noopener noreferrer"> University of California, Berkeley</a></span>, 
          with a focus on <span className="focus">AI and Robotics</span>. Passionate about building innovative products that leverage technology to solve real-world problems.
        </p>
        <p>
          Currently building <span className="focus">Ephrium</span>, a startup product ecosystem designed to connect entrepreneurs, academics, investors, and mentors. 
          Proven experience in <span className="focus">product development</span>, with a background in <span className="focus">market research, user testing</span>, and 
          <span className="focus"> feature prioritization</span>. Committed to <span className="focus">ethical technology practices</span>, actively exploring 
          cybersecurity through <span className="focus">ethical hacking</span>.
        </p>
        <p>
          Beyond tech, I enjoy playing the <span className="focus">guitar</span>, practicing martial arts like 
          <span className="focus"> Muay Thai, Kyokushin Karate, and Brazilian Jiu-Jitsu</span>, and engaging in outdoor sports and travelling.
        </p>
        <p>
          Aspiring to launch a <span className="focus">venture fund</span> to invest in early-stage startups in 
          <span className="focus"> Robotics, Healthcare, and Military products</span>, fueled by my passion for 
          <span className="focus"> emerging technologies</span> and their potential to make a positive impact.
        </p>
      </div>
    </div>
  );
}

export default MainBody;
