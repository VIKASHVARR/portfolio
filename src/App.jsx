import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import TechStack from './components/TechStack';
import Experience from './components/Experience';
import Education from './components/Education';
import Portfolio from './components/Portfolio';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Reveal from './components/Reveal';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Reveal><Services /></Reveal>
      <Reveal><TechStack /></Reveal>
      <Reveal><Experience /></Reveal>
      <Reveal><Education /></Reveal>
      {/*<Reveal><Portfolio /></Reveal>*/}
      <Reveal><Blog /></Reveal>
      <Reveal><Contact /></Reveal>
      <Footer />
    </>
  );
}

export default App;
