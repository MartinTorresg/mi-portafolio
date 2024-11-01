import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Skill from './components/Skill';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <AboutMe />
      <Skill />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
