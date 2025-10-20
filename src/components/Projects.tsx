import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import './Projects.css';

const projects = [
  {
    id: 1,
    title: 'X-direct Mobile',
    category: 'Mobile App Design',
    date: 'May 2024',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80',
  },
  {
    id: 2,
    title: 'Website Design',
    category: 'Website Design',
    date: 'Apr 2024',
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&q=80',
  },
  {
    id: 3,
    title: 'BLACK VOGUE',
    category: 'Brand Identity',
    date: 'Mar 2024',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80',
  },
  {
    id: 4,
    title: 'SF Portfolio',
    category: 'UI/UX Design',
    date: 'Feb 2024',
    image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&q=80',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-content">
        <motion.div
          className="section-label"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          • My Work
        </motion.div>

        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Featured Projects
        </motion.h2>

        <motion.p
          className="section-description"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Behind every great design is an even greater story. Every design has a starting point, and for truly impactful visuals, it's the narrative that guides the creative process.
        </motion.p>

        <motion.div
          className="projects-grid"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              whileHover={{ scale: 1.02, y: -4 }}
            >
              <div className="project-image-wrapper">
                <img src={project.image} alt={project.title} className="project-image" />
                <div className="project-overlay">
                  <button className="project-view-button">
                    <ArrowUpRight size={20} />
                  </button>
                </div>
              </div>
              <div className="project-info">
                <div className="project-meta">
                  <span className="project-category">{project.category}</span>
                  <span className="project-date">{project.date}</span>
                </div>
                <h3 className="project-title">{project.title}</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
