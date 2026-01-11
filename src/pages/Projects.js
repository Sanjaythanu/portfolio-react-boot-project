import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from '../components/ProjectCard';
import projects from '../data/projects';

const Projects = () => (
  <section id="projects">
    <Container>
      <div className="text-center mb-4" data-aos="fade-up">
        <p className="section-title mb-1">Things I&apos;ve built</p>
        <h2 className="section-heading">
          <span>Featured Projects</span>
        </h2>
      </div>
      <Row className="gy-4">
        {projects.map((proj, idx) => (
          <Col md={6} lg={4} key={idx} data-aos="zoom-in-up">
            <ProjectCard project={proj} />
          </Col>
        ))}
      </Row>
    </Container>
  </section>
);

export default Projects;
