import React from 'react';
import '../Cfiles/Experience.css';
import allos from '../images/allos.png';
import berkeley from '../images/berkely.png';
import bosco from '../images/bosco.jpeg';
import stealth from '../images/stealth.jpeg';
import jacobi from '../images/jacobi.png';
import dps from '../images/dps.jpeg';
import deanza from '../images/de-anza.png';
import education from '../images/edtech.png';
import acm from '../images/acm.png';
import ephrium from '../images/ephrium.png';
import nasa from '../images/nasa.png';
import swsh from '../images/swsh.png';
import venu from '../images/venu.png';
import contractor from '../images/Contractor.png';


const experiencesData = {
  schooling: [
    { id: '1', image: berkeley, title: 'University of California, Berkeley', date: 'May 25', description: 'Bachelors in Computer Science and Entrepreneurship' },
    { id: '1', image: deanza, title: 'De Anza College, Cupertino', date: 'Jun 23', description: 'Associates in Economics and Mathematics' },
    { id: '1', image: dps, title: 'Delhi Public School, India', date: 'May 20', description: 'Completed Grade 12 with Distinction(95%)' },
    { id: '1', image: bosco, title: 'Don Bosco School, India', date: 'May 18', description: 'Completed Grade 10 with Distinction(95%)' },
    
  ],
  professional: [
    { id: '1', image: contractor, title: 'Angel Investor and Business Specialized, Business Development and Strategy Intern', date: 'Jul 24 - Sept 24', description: 'Led strategic market expansion initiatives in India, successfully establishing partnerships with 3 key startup ecosystems in Mumbai and Pune through targeted research and outreach.  Engaged with local startups, including those at the Vegas event, providing tailored GTM strategies and business expansion guidance.  Further drove growth by localizing marketing materials and utilizing data analysis to identify high-potential startup partners.' },
    { id: '2', image: venu, title: 'Venu AI, Account Executive', date: 'Aug 24 - Jul 24', description: 'As an Account Executive, I spearheaded sales efforts by designing and implementing effective outreach strategies, managing the sales pipeline, and successfully closing over 10 deals within 3 months. This directly contributed to increased product adoption and market penetration. I also prioritized relationship-building with key business clients, fostering strong connections through consistent communication and personalized support, ensuring their needs were met and ultimately enhancing customer satisfaction.' },
    { id: '3', image: swsh, title: 'SWSH, Product Marketing Analyst', date: 'Jul 24 - Aug 23', description: 'Led market expansion for SWSH social media platform, focusing on strategic partnerships and user acquisition. Successfully engaged fraternities, sororities, and student organizations, driving significant user growth. Utilized A/B testing to optimize marketing campaigns, resulting in impactful partnerships with Panhellenic councils and student clubs, enhancing brand visibility and user adoption.' },
    { id: '4', image: allos, title: 'Allos AI, Machine Learning Engineer', date: 'Jan 24 - May 24', description: 'Collaborated with cross-functional teams to refine machine learning models and causal algorithms, leveraging innovative methodologies to enhance predictive capabilities on pharmaceutical drug testing results.' },
    { id: '5', image: jacobi, title: 'Jacobi Studios, QA and Software Intern', date: 'Dec 23 - Feb 24', description: 'Collaborated with cross-functional teams to conduct rigorous quality assurance testing of newly developed code and algorithms, ensuring seamless integration and optimal performance of palletizing robots in pharmaceutical drug testing environments.' },
    { id: '6', image: deanza, title: 'MSTRC Center at De Anza, Senior Tutor', date: 'Apr 22 - Jun 23', description: 'Provided part-time tutoring for Physics, Math, and Stat classes, fostering conceptual understanding through weekly sample quiz sheets and practice midterm exams. Mentored 3 fellow tutors, familiarizing them with teaching methods and center operations, while also leading engaging group sessions to facilitate collaborative learning.' },
  ],
  research: [
    { id: '1', image: berkeley, title: 'Computational Linguistic Research, Research Assistant', date: 'Aug 23 - Jun 24', description: 'Conducted Research in Computational Linguistics to translate cuneiforms. Achieved a 70% increase in text recognition accuracy through enhancing optical character recognition algorithms and iterative improvements. Composed over 5 comprehensive Jupyter Notebooks documenting the image translation process for cuneiform texts, enabling global access for historians and researchers. Crafted a valuable resource for combatting illicit trade, and aiding in deciphering ancient scripts.' },
    { id: '2', image: nasa, title: 'NASA NPWEE Program, Project Manager', date: 'Jan 22 - Apr 22', description: 'As the team lead of 10 students, I spearheaded a six-month research initiative in collaboration with NASA Ames and MIT material scientists. Our focus was on developing polyamide-based outer coating materials for aerospace vehicles. Through rigorous research and analysis, we achieved a remarkable 60% increase in tensile strength and a 30% reduction in material costs, significantly enhancing the performance and affordability of aerospace applications. My leadership in developing and executing a comprehensive project management plan, encompassing a detailed work plan and technical proposal, ensured the creation of innovative material solutions that met NASA\'s stringent requirements.' },
  ],
  leadership: [
    { id: '1', image: ephrium, title: 'Ephrium, Founder', date: 'Jun 24 - Present', description: 'Fostering a Global Founder Community: Creating a platform to empower entrepreneurs worldwide with streamlined access to resources, mentorships, and valuable connections, helping them navigate the startup journey from idea to successful product launch.' },
    { id: '2', image: stealth, title: 'Stealth Mode, Co-Founder', date: 'Jan 24 - Present', description: 'I\'m developing a B2B SaaS AI solution that transforms online shopping for clothing brands. By harnessing the power of 2D modeling, computer vision, and AI algorithms, my platform enables businesses to optimize inventory, personalize recommendations, and ultimately elevate the customer experience.' },
    { 
      id: '3', 
      image: education, 
      title: 'Independent, Education and Career Consultant', 
      date: 'Aug 23 - Present', 
      description: 'Empowering students to achieve their academic dreams through personalized career guidance and college application support. I\'ve helped numerous students gain admission to their top-choice universities and navigate successful career paths. My expertise has been shared at 10+ panels, and I\'ve proudly collaborated with FHDA and EducationUSA to promote U.S. education opportunities.' 
    },    
    { id: '4', image: acm, title: 'Association Of Computing Machinery, De Anza College, President', date: 'Oct 22 - Jun 23', description: 'During my time at ACM, I demonstrated strong leadership and organizational skills. I successfully launched and expanded the club to over 400 members within a year through strategic marketing and collaborative partnerships. I also managed a dedicated team to deliver more than 20 impactful technical workshops, career panels, and mentorship programs, providing students with valuable skills and industry connections.' },
    
  ],
  personalProjects: [
    { id: 'bosco', image: bosco, title: 'Bosco School', date: 'Jan 24', description: 'Description for Bosco School...' },
  ],
};

const ExperienceBox = ({ id, image, title, date, description }) => {
  return (
    <div className="experience-box-exp">
      <div className="text-content-exp">
        <h2>{title}</h2>
        <hr />
        <p>{date}</p>
        <p>{description}</p>
      </div>
      <div className="image-contain-exp">
        <img src={image} alt={title} className="img-inborder-exp" />
      </div>
    </div>
  );
};

const ExperienceSection = ({ title, experiences }) => (
  <div className="experience-section-exp">
    <h2 className="section-title-exp">{title}</h2>
    <div className="experience-grid-exp">
      {experiences.map((exp) => (
        <ExperienceBox key={exp.id} {...exp} />
      ))}
    </div>
  </div>
);

const Experience = () => {
  return (
    <div>
      
      <ExperienceSection title="Professional Experience" experiences={experiencesData.professional} />
      <ExperienceSection title="Research Experience" experiences={experiencesData.research} />
      <ExperienceSection title="Leadership Experience" experiences={experiencesData.leadership} />
      <ExperienceSection title="Education" experiences={experiencesData.schooling} />
    </div>
  );
};

export default Experience;
