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
          San Francisco, CA {new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })}
        </motion.div>

        <motion.div
          className="hero-intro"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          • Introduction
        </motion.div>

        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Making Your World a Pain
          <br />
          Free Experience
        </motion.h1>

        <motion.div
          className="hero-description"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p>My passion lies in crafting elegant, straightforward digital experiences.</p>
          <p>It's a love for simplicity, pure and simple</p>
        </motion.div>

        <motion.div
          className="hero-tags"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <span className="hero-tag">Branding</span>
          <span className="hero-tag">Art Direction</span>
          <span className="hero-tag">UI Design</span>
          <span className="hero-tag">Webflow Development</span>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
