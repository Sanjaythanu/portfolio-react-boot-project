import React from "react";
import { Container, Row, Col, Badge } from "react-bootstrap";

const certifications = [
  { name: "Java Programming", issuer: "XYZ Platform", year: "2024" },
  { name: "Data Structures & Algorithms", issuer: "ABC Platform", year: "2024" },
  { name: "Full Stack Development", issuer: "Online Bootcamp", year: "2025" },
];

const Certifications = () => (
  <section id="certifications" className="py-5">
    <Container>
      <div className="text-center mb-5" data-aos="fade-up">
        <p className="section-title mb-1">Certifications</p>
        <h2 className="section-heading">
          <span>What I’ve achieved</span>
        </h2>
      </div>

      <Row className="g-4">
        {certifications.map((cert, i) => (
          <Col md={6} lg={4} key={i} data-aos="flip-left" data-aos-delay={i * 200}>
            <div className="glass-panel p-4 d-flex flex-column justify-content-between align-items-start h-100 hover-lift cert-card">
              <div>
                <h5 className="mb-2 fw-semibold">{cert.name}</h5>
                <small className="text-muted">{cert.issuer}</small>
              </div>

              <Badge bg="warning" text="dark" className="px-3 py-2 rounded-pill mt-3 cert-badge">
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
