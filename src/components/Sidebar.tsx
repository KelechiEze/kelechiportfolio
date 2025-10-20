import { useState } from 'react';
import { motion } from 'framer-motion';
import { Home, Menu, Layers, FileText, Tag, MessageCircle, Mail, Link, X } from 'lucide-react';
import './Sidebar.css';

const navItems = [
  { id: 'home', icon: Home, label: 'Home' },
  { id: 'about', icon: Menu, label: 'About' },
  { id: 'skills', icon: Layers, label: 'Skills' },
  { id: 'projects', icon: FileText, label: 'Projects' },
  { id: 'services', icon: Tag, label: 'Services' },
  { id: 'testimonials', icon: MessageCircle, label: 'Testimonials' },
  { id: 'pricing', icon: Tag, label: 'Pricing' },
  { id: 'contact', icon: Mail, label: 'Contact' },
];

const Sidebar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(sectionId);
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      {/* Desktop Sidebar - Fixed on desktop only */}
      <motion.nav
        className="sidebar-desktop"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="sidebar-container">
          {navItems.map((item, index) => (
            <motion.button
              key={item.id}
              className={`nav-icon ${activeSection === item.id ? 'nav-icon-active' : ''}`}
              onClick={() => scrollToSection(item.id)}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label={item.label}
            >
              <item.icon size={20} />
              <span className="nav-tooltip">{item.label}</span>
            </motion.button>
          ))}
        </div>
      </motion.nav>

      {/* Mobile Hamburger - Fixed on mobile */}
      <motion.button
        className="hamburger-button"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        aria-label="Toggle menu"
      >
        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </motion.button>

      {/* Mobile Menu - Fixed overlay */}
      {mobileMenuOpen && (
        <motion.div
          className="mobile-menu"
          initial={{ opacity: 0, x: '100%' }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: '100%' }}
          transition={{ duration: 0.3 }}
        >
          <div className="mobile-menu-content">
            {navItems.map((item) => (
              <button
                key={item.id}
                className={`mobile-nav-item ${activeSection === item.id ? 'mobile-nav-item-active' : ''}`}
                onClick={() => scrollToSection(item.id)}
              >
                <item.icon size={20} />
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Sidebar;