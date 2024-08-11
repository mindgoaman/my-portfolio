import React from 'react'
import Navbar from './component/Navbar'
import Home from './page/Home';
import Experience from './page/Experience';
import Skills from './page/Skills';
import Projects from './page/Projects';
import Contact from './page/Contact';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </>
  )
}

export default App
