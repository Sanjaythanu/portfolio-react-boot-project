import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from '../components/ProjectCard';
import projects from '../data/projects';

const Projects = () => (
  <section id="projects" className="py-5" style={{background: '#121212', color:'#fff'}}>
    <Container>
      <h2 className="text-center mb-4" data-aos="fade-up">Projects</h2>
      <Row>
        {projects.map((proj, idx) => (
          <Col md={4} key={idx} data-aos="zoom-in" className="mb-4">
            <ProjectCard project={proj} />
          </Col>
        ))}
      </Row>
    </Container>
  </section>
);

export default Projects;
