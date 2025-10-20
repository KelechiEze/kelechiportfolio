import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './Testimonials.css';

const testimonials = [
  {
    id: 1,
    quote: "A little universe of inspiration — where passion meets professionalism and creativity knows no bounds. Exceptional service, stunning products that made me go 'wow' at first glance, and prices that make you smile!",
    author: 'Jayden',
    role: 'CEO of Ayrade Inc.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
  },
  {
    id: 2,
    quote: "Working with this designer was an absolute pleasure. The attention to detail and creative vision transformed our brand completely. Highly recommended for anyone looking for top-tier design work.",
    author: 'Sarah Johnson',
    role: 'Marketing Director',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
  },
  {
    id: 3,
    quote: "Incredible talent and professionalism. The project was delivered on time, exceeded expectations, and the communication throughout was exceptional. Will definitely work together again!",
    author: 'Michael Chen',
    role: 'Startup Founder',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="testimonials-content">
        <motion.div
          className="section-label"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          • Testimonial
        </motion.div>

        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          What Clients Say
        </motion.h2>

        <motion.div
          className="testimonial-container"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className="testimonial-card"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <p className="testimonial-quote">"{testimonials[currentIndex].quote}"</p>
              
              <div className="testimonial-navigation">
                <button className="nav-button" onClick={handlePrevious}>
                  <ChevronLeft size={20} />
                </button>
                <span className="testimonial-counter">
                  {currentIndex + 1} / {testimonials.length}
                </span>
                <button className="nav-button" onClick={handleNext}>
                  <ChevronRight size={20} />
                </button>
              </div>

              <div className="testimonial-author">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].author}
                  className="author-image"
                />
                <div className="author-info">
                  <h4 className="author-name">{testimonials[currentIndex].author}</h4>
                  <p className="author-role">{testimonials[currentIndex].role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
