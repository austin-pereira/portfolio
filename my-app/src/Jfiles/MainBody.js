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
        As a senior at the 
        <span className="uc-berkeley">
        <a href="https://www.berkeley.edu/about/" target="_blank" rel="noopener noreferrer">
        University Of California, Berkeley
        </a></span>, majoring in 
        Computer Science with a focus on <span className="focus">AI, Robotics</span>. Alongside academics, 
        I have a keen interest in <span className="focus">Ethical Hacking</span>, driven by a desire to ensure the security of digital systems.
      </p> 
      <p>
        Outside of my academic, I find joy in a variety of activities. I am an avid <span className="focus">Guitarist</span>, 
        enjoying the creative expression and peace that it brings. Exploring nature through hiking and seeking out exploring new <span className="focus">Cusinies </span> 
        are also among my favorite pastimes. Additionally, I have a penchant for <span className="focus">Adrenaline</span>-inducing activities, 
        always on the lookout for new adventures.
      </p>
      <p>
        In the realm of martial arts, I am dedicated to honing my skills in disciplines such as <span className="focus">Muay Thai, Wushu</span>, Kyokushin Karate, 
        and Brazilian Jiu-Jitsu. This commitment to martial arts not only enhances my physical fitness but also instills 
        discipline and focus in all aspects of my life.
      </p>
      <p>
        Looking towards the future, my ambition is to establish my own AI and Robotics company, with a particular emphasis 
        on <span className="focus">Healthcare</span> applications. Drawing from my experiences in the <span className="focus">Startup</span> ecosystem, I aspire to eventually launch 
        a <span className="focus">Venture Fund</span>, investing in emerging technologies across diverse sectors such as <span className="focus">Space Tech, Biotech, and Food Tech</span>.
      </p>

      </div>
    </div>
  );
}

export default MainBody;