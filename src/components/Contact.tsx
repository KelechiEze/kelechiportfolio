import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, Calendar, Clock } from 'lucide-react';
import './Contact.css';

const Contact = () => {
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
          Let's create something amazing together. Reach out through any of the channels below.
        </motion.p>

        <motion.div
          className="contact-grid"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="contact-cards">
            <motion.div 
              className="contact-card"
              whileHover={{ scale: 1.02, y: -4 }}
              transition={{ duration: 0.2 }}
            >
              <div className="contact-card-icon">
                <Mail size={24} />
              </div>
              <div className="contact-card-content">
                <div className="contact-card-label">Email</div>
                <a href="mailto:Kelechieze2000@gmail.com" className="contact-card-value">
                  Kelechieze2000@gmail.com
                </a>
                <div className="contact-card-note">Response within 24 hours</div>
              </div>
            </motion.div>

            <motion.div 
              className="contact-card"
              whileHover={{ scale: 1.02, y: -4 }}
              transition={{ duration: 0.2 }}
            >
              <div className="contact-card-icon">
                <Phone size={24} />
              </div>
              <div className="contact-card-content">
                <div className="contact-card-label">Phone</div>
                <a href="tel:+2348123456789" className="contact-card-value">
                  +234 916 679 8290
                </a>
                <div className="contact-card-note">Mon-Fri, 9am-6pm WAT</div>
              </div>
            </motion.div>

            <motion.div 
              className="contact-card"
              whileHover={{ scale: 1.02, y: -4 }}
              transition={{ duration: 0.2 }}
            >
              <div className="contact-card-icon">
                <MapPin size={24} />
              </div>
              <div className="contact-card-content">
                <div className="contact-card-label">Location</div>
                <div className="contact-card-value">Lagos State, Nigeria</div>
                <div className="contact-card-note">West African Time (WAT, UTC+1)</div>
              </div>
            </motion.div>

            <motion.div 
              className="contact-card"
              whileHover={{ scale: 1.02, y: -4 }}
              transition={{ duration: 0.2 }}
            >
              <div className="contact-card-icon">
                <Calendar size={24} />
              </div>
              <div className="contact-card-content">
                <div className="contact-card-label">Availability</div>
                <div className="contact-card-value">Open for work</div>
                <div className="contact-card-note">Freelance projects</div>
              </div>
            </motion.div>
          </div>

          <motion.div 
            className="contact-cta"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="cta-title">Ready to start a project?</h3>
            <p className="cta-text">
              Click the email address above to send me a message directly, 
              or use the button below to reach out right now.
            </p>
            <motion.a
              href="mailto:Kelechieze2000@gmail.com"
              className="cta-button"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Send an Email</span>
              <Send size={18} />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;