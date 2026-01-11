import React from 'react';
import { Container, Row, Col, Badge } from 'react-bootstrap';

const SkillCategory = ({ title, items }) => (
  <Col md={4} sm={6} className="mb-4" data-aos="fade-up">
    <div className="skill-category glass-panel h-100 p-4 rounded-4 hover-lift">
      <h5 className="mb-3 fw-semibold">{title}</h5>

      <div className="d-flex flex-wrap gap-2">
        {items.map((item) => (
          <Badge
            key={item}
            bg=""
            className="skill-item px-3 py-2 rounded-pill"
          >
            {item}
          </Badge>
        ))}
      </div>
    </div>
  </Col>
);

const Skills = () => (
  <section id="skills" className="py-5 skills">
    <Container>
      <h2 className="section-title text-center mb-5">
        Skills &amp; Technologies
      </h2>

      <Row>
        <SkillCategory
          title="Frontend"
          items={['HTML5', 'CSS3', 'JavaScript', 'React', 'Vue.js', 'TypeScript']}
        />
        <SkillCategory
          title="Backend"
          items={['Node.js', 'Python', 'Express', 'Django', 'PostgreSQL', 'MongoDB']}
        />
        <SkillCategory
          title="Tools & Others"
          items={['Git', 'Docker', 'AWS', 'Figma', 'Webpack', 'Jest']}
        />
      </Row>
    </Container>
  </section>
);

export default Skills;
