import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import './Projects.css';

const projects = [
  {
    id: 1,
    title: 'Elite Gaming',
    category: 'Gaming Platform',
    date: 'May 2024',
    description: 'Gaming',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&q=80', // Gaming setup image
    link: 'https://elitegamerz.netlify.app/', // Replace with actual link
  },
  {
    id: 2,
    title: 'Cinema Stream',
    category: 'Movie Streaming',
    date: 'Apr 2024',
    description: 'Movies',
    image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&q=80', // Cinema/movies image
    link: 'https://cinemastreamz.netlify.app/', // Replace with actual link
  },
  {
    id: 3,
    title: 'Aerologistics',
    category: 'Aviation Logistics',
    date: 'Mar 2024',
    description: 'Aerologistics',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80', // Aviation/airplane image
    link: 'https://aerologistics.netlify.app/', // Replace with actual link
  },
  {
    id: 4,
    title: 'LogiExpress',
    category: 'Logistics Express',
    date: 'Feb 2024',
    description: 'Logistics Express',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80', // Logistics/delivery image
    link: 'https://logixpres.netlify.app/', // Replace with actual link
  },
];

const Projects = () => {
  const handleProjectClick = (link: string) => {
    window.open(link, '_blank', 'noopener noreferrer');
  };

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
          Behind every great project is an even greater story. Every application has a starting point, 
          and for truly impactful digital experiences, it's the user needs that guide the development process.
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
              onClick={() => handleProjectClick(project.link)}
              style={{ cursor: 'pointer' }}
            >
              <div className="project-image-wrapper">
                <img src={project.image} alt={project.title} className="project-image" />
                <div className="project-overlay">
                  <button 
                    className="project-view-button"
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent triggering the card's onClick
                      handleProjectClick(project.link);
                    }}
                    aria-label={`View ${project.title} project`}
                  >
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
                <p className="project-description">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;