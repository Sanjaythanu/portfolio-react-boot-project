import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { FaDownload } from 'react-icons/fa';
import Particles from 'react-tsparticles';
import { loadFull } from "tsparticles";
import heroImage from '../assets/hero.png'; // make sure this exists

const Home = () => {
  const particlesInit = async (main) => { await loadFull(main); };

  return (
    <section
      id="home"
      style={{
        position: 'relative',
        height: '100vh',
        background: 'linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)',
        overflow: 'hidden',
      }}
    >
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fpsLimit: 60,
          particles: {
            number: { value: 40 },
            color: { value: ["#ffffff", "#ffd700", "#00ffff"] },
            shape: { type: "circle" },
            opacity: { value: 0.6 },
            size: { value: { min: 2, max: 5 } },
            move: { enable: true, speed: 1, outModes: "bounce" },
          },
          interactivity: { events: { onHover: { enable: true, mode: "repulse" } } },
        }}
        style={{ position: 'absolute', top:0, left:0, width:'100%', height:'100%' }}
      />

      <Container
        className="d-flex flex-column flex-lg-row align-items-center justify-content-between"
        style={{ position: 'relative', zIndex: 1, height: '100%' }}
      >
        <div style={{ color: '#fff' }} className="text-center text-lg-start">
          <h1 style={{ fontSize: '3rem', fontWeight: '700', lineHeight: '1.2' }}>
            Hello, I'm <span style={{ color: '#ffd700', textShadow: '0 0 15px #ffd700' }}>Sanjay</span>
          </h1>
          <p style={{ fontSize: '1.2rem', marginTop: '0.5rem', color: '#e0e0e0' }}>
            Full Stack Developer | AI Enthusiast | Cloud & Web Innovator
          </p>
          <Button
            href="/resume.pdf"
            download
            variant="warning"
            className="mt-3 shadow"
            style={{ fontWeight: '600', padding: '0.75rem 1.5rem' }}
          >
            <FaDownload className="me-2" /> Download Resume
          </Button>
        </div>

        <div>
          <img
            src={heroImage}
            alt="Hero"
            className="img-fluid rounded-circle shadow"
            style={{
              maxWidth: '300px',
              transition: 'transform 0.3s',
              border: '4px solid #ffd700',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          />
        </div>
      </Container>
    </section>
  );
};

export default Home;
