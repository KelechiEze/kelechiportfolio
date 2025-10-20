// components/GSAPAnimator.jsx
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const GSAPAnimator = () => {
  const comp = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade in up animation for sections
      gsap.utils.toArray('.gsap-fade-in').forEach(element => {
        gsap.fromTo(element, 
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: element,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });

      // Slide in left animation
      gsap.utils.toArray('.gsap-slide-in-left').forEach(element => {
        gsap.fromTo(element,
          { opacity: 0, x: -50 },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: element,
              start: "top 80%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });

      // Slide in right animation
      gsap.utils.toArray('.gsap-slide-in-right').forEach(element => {
        gsap.fromTo(element,
          { opacity: 0, x: 50 },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: element,
              start: "top 80%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });

      // Scale in animation
      gsap.utils.toArray('.gsap-scale-in').forEach(element => {
        gsap.fromTo(element,
          { opacity: 0, scale: 0.9 },
          {
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: element,
              start: "top 80%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });

      // Stagger animation for lists
      gsap.utils.toArray('.stagger-container').forEach(container => {
        const items = container.querySelectorAll('.stagger-item');
        gsap.fromTo(items,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: container,
              start: "top 70%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });

    }, comp);

    return () => ctx.revert();
  }, []);

  return <div ref={comp} />;
};

export default GSAPAnimator;