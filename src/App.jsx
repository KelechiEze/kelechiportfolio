import { useEffect, useState } from 'react';
import AnimatedBackground from './components/AnimatedBackground';
import ProfileCard from './components/ProfileCard';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Contact from './components/Contact';

const Index = () => {
  const [scrolled, setScrolled] = useState(false);
  const [profileVisible, setProfileVisible] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth <= 800;
      setIsMobile(mobile);
      setProfileVisible(true);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 50);
      
      if (isMobile && scrollPosition > 200) {
        setProfileVisible(false);
      } else if (isMobile && scrollPosition < 100) {
        setProfileVisible(true);
      }
    };

    let ticking = false;
    const optimizedScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', optimizedScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', optimizedScroll);
      window.removeEventListener('resize', checkMobile);
    };
  }, [isMobile]);

  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />
      
      {/* Profile Card - Fixed on left */}
      <div className="fixed left-8 top-1/2 transform -translate-y-1/2 z-50">
        <ProfileCard isVisible={profileVisible} />
      </div>
      
      {/* Sidebar - Fixed on right */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50">
        <Sidebar />
      </div>
      
      {/* Main Content - Centered with proper constraints */}
      <main className="relative z-10 min-h-screen mx-auto">
        <div className="section-content">
          <div className="hero-section w-full">
            <Hero />
          </div>
          <div className="about-section w-full">
            <About />
          </div>
          <div className="skills-section w-full">
            <Skills />
          </div>
          <div className="projects-section w-full">
            <Projects />
          </div>
          <div className="services-section w-full">
            <Services />
          </div>
          <div className="testimonials-section w-full">
            <Testimonials />
          </div>
          <div className="pricing-section w-full">
            <Pricing />
          </div>
          <div className="contact-section w-full">
            <Contact />
          </div>
          
          <footer className="text-center py-8 text-sm text-muted-foreground border-t border-white/10 w-full">
            <p>© 2025 Kelechi Eze. All rights reserved.</p>
          </footer>
        </div>
      </main>
    </div>
  );
};

export default Index;