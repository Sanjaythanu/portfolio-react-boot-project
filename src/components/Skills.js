import React from 'react';
import { Container, ProgressBar } from 'react-bootstrap';

const skills = [
  { name: 'Python', value: 75 },
  { name: 'SQL', value: 70 },
  { name: 'Cloud & DevOps', value: 65 },
];

const Skills = () => (
  <section id="skills">
    <Container>
      <div className="text-center mb-4" data-aos="fade-up">
        <p className="section-title mb-1">Skills</p>
        <h2 className="section-heading">
          <span>Tech stack</span>
        </h2>
      </div>
      {skills.map((skill, i) => (
        <div key={i} data-aos="fade-right" className="mb-3">
          <div className="d-flex justify-content-between mb-1">
            <span className="fw-semibold">{skill.name}</span>
            <span className="text-muted">{skill.value}%</span>
          </div>
          <ProgressBar
            now={skill.value}
            label={`${skill.value}%`}
            animated
            striped
            variant="warning"
          />
        </div>
      ))}
    </Container>
  </section>
);

export default Skills;
