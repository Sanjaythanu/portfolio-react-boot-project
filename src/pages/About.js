import React from 'react';
import { Container, Row, Col, ProgressBar } from 'react-bootstrap';

const skills = [
  { name: 'Java', value: 85 },
  { name: 'React', value: 80 },
  { name: 'JavaScript', value: 75 },
  { name: 'DSA', value: 90 },
];

const About = () => (
  <section id="about" className="py-5" style={{background: '#1e1e2f', color:'#fff'}}>
    <Container>
      <h2 className="text-center mb-4" data-aos="fade-up">About Me</h2>
      <Row className="mb-4">
        <Col md={6} data-aos="fade-right">
          <p>
            I'm an Electronics & Communication Engineering student passionate about coding, software development,
            and building interactive web applications. Strong expertise in Java, React, and problem-solving.
          </p>
        </Col>
        <Col md={6} data-aos="fade-left">
          {skills.map((skill, idx) => (
            <div key={idx} className="mb-3">
              <h5>{skill.name}</h5>
              <ProgressBar now={skill.value} label={`${skill.value}%`} animated striped />
            </div>
          ))}
        </Col>
      </Row>
    </Container>
  </section>
);

export default About;
