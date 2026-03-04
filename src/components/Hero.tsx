import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <motion.div
          className="hero-time"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Lagos, NG {new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })}
        </motion.div>

        <motion.div
          className="hero-intro"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          • Web Developer & UI Engineer
        </motion.div>

        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Building Modern Web
          <br />
          Experiences with Code
        </motion.h1>

        <motion.div
          className="hero-description"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p>I specialize in creating responsive, performant web applications</p>
          <p>using React, TypeScript, and modern frontend technologies.</p>
        </motion.div>

        <motion.div
          className="hero-tags"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <span className="hero-tag">React</span>
          <span className="hero-tag">TypeScript</span>
          <span className="hero-tag">Next.js</span>
          <span className="hero-tag">UI/UX Design</span>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;