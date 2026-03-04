import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import './Pricing.css';

const Pricing = () => {
  const [activePlan, setActivePlan] = useState<'standard' | 'premium'>('standard');

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="pricing" className="pricing-section">
      <div className="pricing-content">
        <motion.div
          className="section-label"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          • Pricing
        </motion.div>

        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          My Pricing
        </motion.h2>

        <motion.div
          className="plan-tabs"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <button
            className={`plan-tab ${activePlan === 'standard' ? 'plan-tab-active' : ''}`}
            onClick={() => setActivePlan('standard')}
          >
            Standard Plan
          </button>
          <button
            className={`plan-tab ${activePlan === 'premium' ? 'plan-tab-active' : ''}`}
            onClick={() => setActivePlan('premium')}
          >
            Premium Plan
          </button>
        </motion.div>

        <motion.div
          className="pricing-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="pricing-header">
            <h3 className="plan-name">
              • {activePlan === 'standard' ? 'Standard Plan' : 'Premium Plan'}
            </h3>
            <p className="plan-subtitle">
              {activePlan === 'standard'
                ? 'Have design ready to build? Or small budget?'
                : 'Need full-service design and development?'}
            </p>
          </div>

          <div className="pricing-amount">
            <span className="price">${activePlan === 'standard' ? '250' : '550'}</span>
            <span className="price-unit">/project </span>
          </div>

          <ul className="features-list">
            {activePlan === 'standard' ? (
              <>
                <li>Need your wireframe</li>
                <li>Design with Figma, Framer</li>
                <li>Implement with Webflow, React, WordPress, Laravel/PHP</li>
                <li>Remote/Online</li>
                <li>Work in business days, no weekend.</li>
                <li>Support 6 months</li>
              </>
            ) : (
              <>
                <li>Full design consultation</li>
                <li>Custom UI/UX design in Figma</li>
                <li>Advanced development with React, Next.js</li>
                <li>Priority support & revisions</li>
                <li>24/7 availability</li>
                <li>12 months support & maintenance</li>
                <li>SEO optimization included</li>
              </>
            )}
          </ul>

          <motion.button
            className="get-started-button"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={scrollToContact}
          >
            <span>Get Started</span>
            <div className="arrow-icon">
              <ArrowUpRight size={18} />
            </div>
          </motion.button>

          <motion.button
            className="custom-quote-button"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={scrollToContact}
          >
            <span>Custom Quote</span>
            <div className="arrow-icon-dark">
              <ArrowUpRight size={18} />
            </div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;