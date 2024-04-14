import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Description from './Description';
import MainBody from './MainBody';
import Skills from './Skills';
import { Routes, Route } from 'react-router-dom';
import '../Cfiles/App.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import About from './HeaderRest';
import Experience from './Experience';
import Projects from './Projects';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<> <Header /> <Description /><MainBody /><Footer /></>} />
        <Route path="/skills" element={<> <About /> <Skills /> <Footer /> </>} />
        <Route path="/Experience" element={<> <About /> <Experience /> <Footer /> </>} /> 
        <Route path="/Projects" element={<> <About /> <Projects /> <Footer /> </>} />         
      </Routes>
    </div>
  );
}

export default App;
