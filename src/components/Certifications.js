import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';

const certs = [
  'Java Fundamentals – Scaler Technologies',
  'SQL Basics – HackerRank',
  'Python for Data Science',
  'MATLAB Onramp – MathWorks',
  'NPTEL: Microsensors and Nanosensors (66%)',
  'Crisis Communication – Saylor Academy (90%)',
  'Business Communication – HP LIFE',
];

const Certifications = () => (
  <Container id="certifications" className="py-5">
    <h2 className="text-center mb-4" data-aos="fade-up">Certifications</h2>
    <Row>
      {certs.map((cert, i) => (
        <Col md={4} key={i} data-aos="zoom-in" className="mb-4">
          <Card className="h-100 shadow">
            <Card.Body>
              <Card.Text>{cert}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
);

export default Certifications;
