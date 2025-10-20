import { motion } from 'framer-motion';
import { Mail, MapPin, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add form submission logic here
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-content">
        <motion.div
          className="section-label"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          • Get In Touch
        </motion.div>

        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Let's Work Together
        </motion.h2>

        <motion.p
          className="contact-description"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Have a project in mind? I'm currently available for select freelance opportunities.
          Let's create something amazing together.
        </motion.p>

        <motion.div
          className="contact-grid"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="contact-info-cards">
            <div className="contact-info-card">
              <Mail size={24} />
              <div>
                <div className="contact-info-label">Email</div>
                <a href="mailto:Kelechieze2000@gmail.com" className="contact-info-value">
                  Kelechieze2000@gmail.com
                </a>
              </div>
            </div>
            <div className="contact-info-card">
              <MapPin size={24} />
              <div>
                <div className="contact-info-label">Location</div>
                <div className="contact-info-value">Lagos State, Nigeria</div>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <input type="text" placeholder="Your Name" className="form-input" required />
              <input type="email" placeholder="Your Email" className="form-input" required />
            </div>
            <input type="text" placeholder="Subject" className="form-input" required />
            <textarea placeholder="Your Message" className="form-textarea" rows={6} required />
            <motion.button
              type="submit"
              className="submit-button"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Send Message</span>
              <Send size={18} />
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
