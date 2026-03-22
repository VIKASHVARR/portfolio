import { useState, useEffect } from 'react';

export default function Hero() {
  const titles = ["Vikashvar Rajan", "a Software Engineer", "Gen AI Enthusiast"];
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % titles.length);
        setFade(true);
      }, 300);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="hero">
      <div className="container hero-split">
        <div className="hero-content">
          <h1 className="hero-title">
            I'm <span className={`rotating-text ${fade ? 'fade-in' : 'fade-out'}`}>{titles[index]}</span>
          </h1>
          <p>Passionate Software Engineer with 2+ years of experience in full-stack development. I have built robust back-end applications with Java Spring Boot and enhanced user interfaces with ReactJS. I have developed AI solutions using Retrieval-Augmented Generation (RAG) to streamline knowledge retrieval. I have been a key player in Micro-Frontend Architecture, task scheduling, and third-party integrations.</p>
        </div>
        <div className="hero-image">
          <img src="/src/assets/profile.png" alt="Vikashvar Rajan" className="profile-img" />
        </div>
      </div>
    </section>
  );
}
