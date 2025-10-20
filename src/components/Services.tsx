import { motion } from 'framer-motion';
import { Sparkles, PenTool, Layout, Megaphone } from 'lucide-react';
import './Services.css';

const services = [
  {
    icon: Sparkles,
    title: 'Brand Strategy',
    description: 'Crafting unique brand identities that resonate with your target audience.',
  },
  {
    icon: PenTool,
    title: 'UI/UX Design',
    description: 'Creating intuitive and beautiful interfaces that users love.',
  },
  {
    icon: Layout,
    title: 'Web Development',
    description: 'Building responsive, performant websites with modern technologies.',
  },
  {
    icon: Megaphone,
    title: 'Digital Marketing',
    description: 'Strategic campaigns that drive engagement and conversions.',
  },
];

const Services = () => {
  return (
    <section id="services" className="services-section">
      <div className="services-content">
        <motion.div
          className="section-label"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          • Services
        </motion.div>

        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          What I Offer
        </motion.h2>

        <motion.div
          className="services-grid"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="service-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              whileHover={{ scale: 1.02, y: -4 }}
            >
              <div className="service-icon">
                <service.icon size={24} />
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
