import React from 'react';
import Hero from './components/Hero';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen w-full bg-slate-950 text-slate-100 font-sans">
      <Hero />
      <TechStack />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
