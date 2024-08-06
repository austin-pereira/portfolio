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
import Portfolio from './Projects';
import Cases from './Cases';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<> <Header /> <Description /><MainBody /><Footer /></>} />
        <Route path="/skills" element={<> <About /> <Skills /> <Footer /> </>} />
        <Route path="/Experience" element={<> <About /> <Experience /> <Footer /> </>} /> 
        <Route path="/Projects" element={<> <About /> <Portfolio /> <Footer /> </>} />
        <Route path="/case" element={<> <About /> <Cases /> <Footer /> </>} />  

      </Routes>
    </div>
  );
}

export default App;
