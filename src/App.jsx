import React, { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Home/Hero';
import Contact from './Components/Contact/Contact';
import Links from './Components/Links/Links';
import Footer from './Components/Footer/Footer';
import WhatWeDo from './Components/Home/WhatWeDo';

function App() {
  const [activeSection, setActiveSection] = useState('');

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const offset = section.offsetTop - (8 * window.innerHeight) / 100; // Resta 8vh
      window.scrollTo({
        top: offset,
        behavior: 'smooth',
      });
      setActiveSection(id);
    }
  };

  return (
    <div>
      <Navbar />
      <Hero scrollToSection={scrollToSection} />
      <section id="what-we-do">
        <WhatWeDo />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Links />
      <Footer  scrollToSection={scrollToSection} />
    </div>
  );
}

export default App;
