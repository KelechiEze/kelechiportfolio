import { motion } from 'framer-motion';
import { Code, Palette, Smartphone, Zap } from 'lucide-react';
import './Skills.css';

const skills = [
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Creating beautiful, intuitive interfaces that users love to interact with.',
  },
  {
    icon: Code,
    title: 'Web Development',
    description: 'Building responsive, performant websites with modern technologies.',
  },
  {
    icon: Smartphone,
    title: 'Mobile Design',
    description: 'Designing seamless experiences across all devices and screen sizes.',
  },
  {
    icon: Zap,
    title: 'Brand Identity',
    description: 'Crafting unique visual identities that capture your brand essence.',
  },
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-content">
        <motion.div
          className="section-label"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          • What I Do
        </motion.div>

        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Skills & Expertise
        </motion.h2>

        <motion.div
          className="skills-grid"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              className="skill-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              whileHover={{ scale: 1.02, y: -4 }}
            >
              <div className="skill-icon">
                <skill.icon size={24} />
              </div>
              <h3 className="skill-title">{skill.title}</h3>
              <p className="skill-description">{skill.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
