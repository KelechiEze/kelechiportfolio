import { motion } from 'framer-motion';
import { X, Linkedin, Instagram, Music2, ArrowUpRight } from 'lucide-react';
import './ProfileCard.css';

interface ProfileCardProps {
  isVisible?: boolean;
}

const ProfileCard = ({ isVisible = true }: ProfileCardProps) => {
  // Image path defined inside the component
  const profileImage = '/eze.png'; // Make sure this image is in your public folder

  return (
    <motion.aside
      className={`profile-card ${!isVisible ? 'profile-card-hidden' : ''}`}
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="profile-card-container">
        {/* Status Badge */}
        <div className="status-badge">
          <span className="status-dot"></span>
          <span className="status-text">Available for multiple projects</span>
        </div>

        {/* Profile Image */}
        <div className="profile-image-wrapper">
          <img src={profileImage} alt="Jayden" className="profile-image" />
          <div className="profile-name">Kelechi Eze</div>
        </div>

        {/* Contact Info */}
        <div className="contact-info">
          <div className="contact-item">
            <span className="contact-label">Email</span>
            <a href="mailto:kelechieze2000@gmail.com" className="contact-value">
              Kelechieze2000@gmail.com
            </a>
          </div>
          <div className="contact-item">
            <span className="contact-label">Based in</span>
            <span className="contact-value">Lagos State, Nigeria</span>
          </div>
        </div>

        {/* Social Icons */}
        <div className="social-icons">
          <a href="https://x.com/babylee_the543" className="social-icon" aria-label="X (Twitter)">
            <X size={18} />
          </a>
          <a href="https://www.linkedin.com/in/kelechi-joseph-934449340/" className="social-icon" aria-label="LinkedIn">
            <Linkedin size={18} />
          </a>
          <a href="#" className="social-icon" aria-label="Instagram">
            <Instagram size={18} />
          </a>
          <a href="#" className="social-icon" aria-label="TikTok">
            <Music2 size={18} />
          </a>
        </div>

        {/* CTA Button */}
        <motion.button
          className="cta-button"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <span>Get Started</span>
          <div className="arrow-circle">
            <ArrowUpRight size={16} />
          </div>
        </motion.button>
      </div>
    </motion.aside>
  );
};

export default ProfileCard;