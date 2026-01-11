import React from 'react';
import { Container, Button, Row, Col, Badge } from 'react-bootstrap';
import { FaDownload, FaGithub, FaLinkedin } from 'react-icons/fa';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import heroImage from '../assets/hero.png';

const Home = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <section id="home" style={{ position: 'relative', minHeight: '100vh' }}>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fpsLimit: 60,
          fullScreen: { enable: false },
          style: { position: 'absolute', inset: 0 },
          particles: {
            number: { value: 45, density: { enable: true, area: 900 } },
            color: { value: ['#ffffff', '#facc15', '#38bdf8'] },
            links: {
              enable: true,
              distance: 140,
              color: '#64748b',
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: true,
              speed: 1.2,
              outModes: 'bounce',
            },
            opacity: { value: 0.5 },
            size: { value: { min: 1, max: 4 } },
          },
          interactivity: {
            events: {
              onHover: { enable: true, mode: 'repulse' },
              onClick: { enable: true, mode: 'push' },
            },
            modes: {
              repulse: { distance: 120 },
              push: { quantity: 2 },
            },
          },
        }}
      />

      <Container
        className="d-flex align-items-center"
        style={{ position: 'relative', zIndex: 1, minHeight: '100vh' }}
      >
        <Row className="w-100 gy-4 align-items-center">
          <Col
            lg={7}
            data-aos="fade-right"
            data-aos-delay="150"
            className="text-center text-lg-start"
          >
            <p className="section-title mb-1">Welcome to my space</p>
            <h1 className="fw-bold display-5 mb-2">
              Hello, <span style={{ color: 'var(--accent)' }}>I'm Sanjay</span>
            </h1>
            <p className="lead mb-3" style={{ color: 'var(--subtle-text)' }}>
              Full Stack Developer, AI Enthusiast, and Cloud Innovator crafting
              performant and delightful web experiences.
            </p>

            <div className="d-flex flex-wrap gap-2 justify-content-center justify-content-lg-start mb-3">
              <Badge bg="" style={{ backgroundColor: 'var(--accent-soft)' }}>
                Java & React
              </Badge>
              <Badge bg="" style={{ backgroundColor: 'var(--accent-soft)' }}>
                Problem Solving
              </Badge>
              <Badge bg="" style={{ backgroundColor: 'var(--accent-soft)' }}>
                Cloud & APIs
              </Badge>
            </div>

            <div className="d-flex flex-wrap gap-3 justify-content-center justify-content-lg-start">
              <Button
                href="/resume.pdf"
                download
                variant="warning"
                className="btn-pill hover-lift"
              >
                <FaDownload className="me-2" />
                Download Resume
              </Button>

              <div className="d-flex align-items-center gap-3">
                <a
                  href="https://github.com/Sanjaythanu"
                  target="_blank"
                  rel="noreferrer"
                  className="text-decoration-none text-reset hover-lift"
                >
                  <FaGithub size={26} />
                </a>
                <a
                  href="https://www.linkedin.com/in/sanjay-sri-thanu-malaiyaan-c-9ab237330/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-decoration-none text-reset hover-lift"
                >
                  <FaLinkedin size={26} color="#0A66C2" />
                </a>
              </div>
            </div>
          </Col>

          <Col
            lg={5}
            className="d-flex justify-content-center"
            data-aos="fade-left"
            data-aos-delay="250"
          >
            <div className="position-relative">
              <div
                className="position-absolute rounded-circle"
                style={{
                  inset: '-10%',
                  background:
                    'radial-gradient(circle, var(--accent-soft), transparent 60%)',
                  filter: 'blur(4px)',
                }}
              />
              <img
                src={heroImage}
                alt="Sanjay"
                className="img-fluid rounded-circle shadow-lg"
                style={{
                  maxWidth: '280px',
                  border: '4px solid var(--accent)',
                  transform: 'translateY(0)',
                  transition: 'transform 0.35s ease',
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = 'translateY(-8px)')
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = 'translateY(0)')
                }
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Home;
