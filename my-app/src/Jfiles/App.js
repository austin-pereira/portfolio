import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Description from './Description';
import MainBody from './MainBody';
import About from './About';
import '../Cfiles/App.css';
import '@fortawesome/fontawesome-svg-core/styles.css';


function App() {
  return (
    <div className="App">
      <Header />
      <Description/>
      <MainBody/>
      <Footer />
    </div>
  );
}

export default App;
