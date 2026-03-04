import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <motion.div
          className="section-label"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          • About Me
        </motion.div>

        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Front-End Developer
          <br />
          with an Eye for Design
        </motion.h2>

        <motion.div
          className="about-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p>
            I'm a front-end developer based in Lagos, Nigeria, specializing in building 
            beautiful, responsive user interfaces. With expertise in React, TypeScript, 
            and modern CSS, I transform designs into interactive web experiences that 
            engage and delight users.
          </p>
          <p>
            My focus is on writing clean, efficient code while ensuring pixel-perfect 
            implementation of UI designs. I'm passionate about creating accessible, 
            performant interfaces that work seamlessly across all browsers and devices, 
            with special attention to animation and micro-interactions.
          </p>
          <p>
            Currently available for front-end development projects and collaborations 
            with designers and businesses looking to bring their creative visions to 
            life through code.
          </p>
        </motion.div>

        <motion.div
          className="stats-grid"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="stat-card">
            <div className="stat-number">2+</div>
            <div className="stat-label">Years Coding</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">25+</div>
            <div className="stat-label">Projects Built</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">10+</div>
            <div className="stat-label">Frameworks</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;