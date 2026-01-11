import React from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Contact = () => (
  <section id="contact">
    <Container>
      <div className="text-center mb-4" data-aos="fade-up">
        <p className="section-title mb-1">Contact</p>
        <h2 className="section-heading">
          <span>Let&apos;s connect</span>
        </h2>
        <p style={{ color: 'var(--subtle-text)' }}>
          Open to internships, freelance projects, and collaborations.
        </p>
      </div>

      <Row className="gy-4 justify-content-center">
        <Col md={8} lg={6}>
          <div className="glass-panel p-4" data-aos="fade-up">
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Your name" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="you@example.com" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={4} />
              </Form.Group>
              <Button variant="warning" type="submit" className="btn-pill w-100">
                Send Message
              </Button>
            </Form>
          </div>
        </Col>
      </Row>

      <div
        className="text-center mt-4 d-flex justify-content-center gap-4"
        data-aos="zoom-in"
      >
        <a
          href="https://github.com/Sanjaythanu"
          target="_blank"
          rel="noreferrer"
          className="text-reset hover-lift"
        >
          <FaGithub size={30} />
        </a>
        <a
          href="https://www.linkedin.com/in/sanjay-sri-thanu-malaiyaan-c-9ab237330/"
          target="_blank"
          rel="noreferrer"
          className="text-reset hover-lift"
        >
          <FaLinkedin size={30} />
        </a>
        <a
          href="mailto:sanjaychittu2005@gmail.com"
          target="_blank"
          rel="noreferrer"
          className="text-reset hover-lift"
        >
          <FaEnvelope size={30} />
        </a>
      </div>
    </Container>
  </section>
);

export default Contact;
