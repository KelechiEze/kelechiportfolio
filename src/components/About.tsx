import { motion } from 'framer-motion';
import { useInView } from 'react-spring';
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
          Crafting Digital
          <br />
          Experiences with Purpose
        </motion.h2>

        <motion.div
          className="about-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p>
            I'm a digital designer and developer based in San Francisco, specializing in creating
            intuitive and engaging web experiences. With a focus on minimalism and functionality,
            I bring ideas to life through clean code and thoughtful design.
          </p>
          <p>
            My approach combines strategic thinking with creative execution, ensuring that every
            project not only looks beautiful but also delivers measurable results for your business.
          </p>
          <p>
            Currently available for select freelance projects and collaborations with forward-thinking
            brands who value quality over quantity.
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
            <div className="stat-number">50+</div>
            <div className="stat-label">Projects Completed</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">5+</div>
            <div className="stat-label">Years Experience</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">30+</div>
            <div className="stat-label">Happy Clients</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
