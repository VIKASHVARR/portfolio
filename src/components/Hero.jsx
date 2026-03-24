import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import profileImg from '../assets/profile.png';

export default function Hero() {
  const titles = ["Vikashvar Rajan", "a Software Engineer", "Gen AI Enthusiast", "a Freelancer"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const containerVars = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const itemVars = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section id="about" className="hero">
      <div className="container hero-split">
        <motion.div
          className="hero-content"
          variants={containerVars}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h1
            className="hero-title"
            variants={itemVars}
            style={{ display: "flex", alignItems: "center", gap: "0.3em", flexWrap: "wrap" }}
          >
            <span>I'm</span>
            <div style={{ height: "1.7em", position: "relative", overflow: "hidden", flex: 1, minWidth: "300px" }}>
              <AnimatePresence mode="popLayout">
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -40 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="rotating-text"
                  style={{ position: "absolute", left: 0 }}
                >
                  {titles[index]}
                </motion.span>
              </AnimatePresence>
            </div>
          </motion.h1>
          <motion.p variants={itemVars}>
            Passionate Software Engineer with 2+ years of experience in full-stack development. I have built robust back-end applications with Java Spring Boot and enhanced user interfaces with ReactJS. I have developed AI solutions using Retrieval-Augmented Generation (RAG) to streamline knowledge retrieval. I have been a key player in Micro-Frontend Architecture, task scheduling, and third-party integrations.
          </motion.p>
        </motion.div>
        <motion.div
          className="hero-image"
          initial={{ opacity: 0, scale: 0.8, rotate: -2 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
        >
          <img src={profileImg} alt="Vikashvar Rajan" className="profile-img" />
        </motion.div>
      </div>
    </section>
  );
}
