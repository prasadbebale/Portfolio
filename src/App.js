import React, { useState, useEffect } from "react";
import Home from "./components/Home/Home";

import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";
import Nav from './components/nav/Nav' 
import Education from './components/Education/Education'
import Skills from './components/skills/Skills'
import Contacts from "./components/Contacts/Contact";
import Achievement from "./components/Achievements/Achievements";


import "bootstrap/dist/css/bootstrap.min.css";


const App = () => {
  return (
    <>
        
     
        <Home />
        <Nav />
        <Education />
        <Skills />
        
        <Projects />
        <Achievement />
        <Contacts />
        <Footer />
        

    </>
  )
}


export default App;
