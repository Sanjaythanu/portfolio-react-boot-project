import React from 'react';
import { Container, Row, Col, Badge } from 'react-bootstrap';

const certifications = [
  {
    name: 'Java Programming',
    issuer: 'XYZ Platform',
    year: '2024',
  },
  {
    name: 'Data Structures & Algorithms',
    issuer: 'ABC Platform',
    year: '2024',
  },
];

const Certifications = () => (
  <section id="certifications">
    <Container>
      <div className="text-center mb-4" data-aos="fade-up">
        <p className="section-title mb-1">Certifications</p>
        <h2 className="section-heading">
          <span>What I&apos;ve achieved</span>
        </h2>
      </div>
      <Row className="gy-3">
        {certifications.map((cert, i) => (
          <Col md={6} key={i} data-aos="fade-up">
            <div className="glass-panel p-3 d-flex justify-content-between align-items-center">
              <div>
                <h5 className="mb-1">{cert.name}</h5>
                <small style={{ color: 'var(--subtle-text)' }}>
                  {cert.issuer}
                </small>
              </div>
              <Badge bg="warning" text="dark">
                {cert.year}
              </Badge>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  </section>
);

export default Certifications;
