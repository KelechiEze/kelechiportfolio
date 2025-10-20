import { useEffect, useRef } from 'react';
import { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import Particles from "@tsparticles/react";
import type { Container, Engine } from "@tsparticles/engine";
import './AnimatedBackground.css';

const AnimatedBackground = () => {
  const init = useRef(false);

  useEffect(() => {
    if (!init.current) {
      initParticlesEngine(async (engine: Engine) => {
        await loadSlim(engine);
      });
      init.current = true;
    }
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log('Particles loaded', container);
  };

  return (
    <div className="animated-background">
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: "#000000",
            },
          },
          fpsLimit: 120,
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.15,
              width: 0.5,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: true,
              speed: 0.5,
              straight: false,
            },
            number: {
              density: {
                enable: true,
              },
              value: 80,
            },
            opacity: {
              value: 0.2,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 0.5, max: 1.5 },
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
};

export default AnimatedBackground;
