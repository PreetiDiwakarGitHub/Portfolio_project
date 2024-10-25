import React from 'react';
import { Element } from 'react-scroll';
import About from './componet/About';
import Skills from './componet/Skills';
import List from './componet/projects';
import Contact from './componet/Contact';
import Home from './componet/Home';
import Navbar from './componet/Navbar';


function App() {
  return (
    <>
     <Navbar/>
      <Element name='home'>
        <Home />
      </Element>
      <Element name='about'>
        <About />
      </Element>
      <Element name='skills'>
        <Skills />
      </Element>
      <Element name='project'>
        <List />
      </Element>
      <Element name='contact'>
        <Contact />
      </Element>

    </>
  );
}

export default App;