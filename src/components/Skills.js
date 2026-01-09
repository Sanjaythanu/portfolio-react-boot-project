import React from 'react';
import { Container, ProgressBar } from 'react-bootstrap';

const skills = [
  { name: 'Java', value: 90 },
  { name: 'DSA', value: 85 },
  { name: 'OOP', value: 80 },
  { name: 'Python', value: 75 },
  { name: 'SQL', value: 70 },
];

const Skills = () => (
  <Container id="skills" className="py-5">
    <h2 className="text-center mb-4" data-aos="fade-up">Skills</h2>
    {skills.map((skill, i) => (
      <div key={i} data-aos="fade-right" className="mb-3">
        <h5>{skill.name}</h5>
        <ProgressBar now={skill.value} label={`${skill.value}%`} animated striped />
      </div>
    ))}
  </Container>
);

export default Skills;
