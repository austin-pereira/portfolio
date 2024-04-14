import React from 'react';
import '../Cfiles/MainBody.css';
import profilePic from '../profile.png';

function MainBody() {
  return (
    <div className="main-body">
      <div className="image-container">
        {/* Assuming you have the image in your public folder or you can import it */}
        <img src={profilePic} alt="Profile" className="img-with-border" />
      </div>
      <div className="text-content">
        <h1>I'm Austin</h1>
        <hr />
        <p>
          A Senior at <span className="uc-berkeley">University Of California, Berkeley</span> majoring in Computer Science with focus in <span className="focus">AI, Robotics</span> 
          and side passion for <span className="focus">Ethical Hacking</span>. In my free time I love to play guitar, hike, try new food explore new activites for adreneline rush. 
          Also I practice Mixed Martial Arts and my area of expertise is Muay Thai, Kyokushin Karate and Brazilian Jui-Jutsu. 
          In next five years I want to run my own <span className="focus">AI and Robotics</span> Company with <span className="focus">Healthcare</span> as the vertical. 
          With enough experience in startup space I wish to start my own <span className="focus">Venture Fund</span> and invest in verticals
          like <span className="focus">Space Tech, Biotech and Food Tech</span>.
        </p>

      </div>
    </div>
  );
}

export default MainBody;