import React from 'react';
import { Container, Row, Col, ProgressBar } from 'react-bootstrap';

const skills = [
  { name: 'Java', value: 90 },
  { name: 'React', value: 85 },
  { name: 'JavaScript', value: 80 },
  { name: 'DSA', value: 90 },
];

const About = () => (
  <section id="about">
    <Container>
      <Row className="align-items-center gy-4">
        <Col md={6} data-aos="fade-right">
          <p className="section-title mb-1">About</p>
          <h2 className="section-heading">
            <span>Who am I?</span>
          </h2>
          <p style={{ color: 'var(--subtle-text)' }} className="mt-3">
            Electronics & Communication Engineering student with strong focus on
            modern web technologies, clean code, and scalable architecture.
          </p>
          <p style={{ color: 'var(--subtle-text)' }}>
            Enjoy solving complex problems, contributing to full stack
            applications, and exploring AI-driven solutions that create real
            impact.
          </p>
        </Col>

        <Col md={6} data-aos="fade-left">
          {skills.map((skill, idx) => (
            <div key={idx} className="mb-3">
              <div className="d-flex justify-content-between mb-1">
                <span className="fw-semibold">{skill.name}</span>
                <span className="text-muted">{skill.value}%</span>
              </div>
              <ProgressBar
                now={skill.value}
                animated
                striped
                variant="warning"
              />
            </div>
          ))}
        </Col>
      </Row>
    </Container>
  </section>
);

export default About;
