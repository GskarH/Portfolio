import React from 'react';
import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Experience from './components/sections/Experience';
import Education from './components/sections/Education';
import Certifications from './components/sections/Certifications';
import Skills from './components/sections/Skills';
import Hobbies from './components/sections/Hobbies';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-200">
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Education />
        <Certifications />
        <Skills />
        <Hobbies />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;