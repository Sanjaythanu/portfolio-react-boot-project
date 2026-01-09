import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Contact = () => (
  <section id="contact" className="py-5" style={{background:'#1e1e2f', color:'#fff'}}>
    <Container>
      <h2 className="text-center mb-4" data-aos="fade-up">Contact Me</h2>
      <Form data-aos="fade-up" className="mx-auto" style={{ maxWidth: '500px' }}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Button variant="warning" type="submit">Send</Button>
      </Form>
      <div className="text-center mt-4">
        <a href="https://github.com/Sanjaythanu" target="_blank" rel="noreferrer" className="me-3"><FaGithub size={30} /></a>
        <a href="https://www.linkedin.com/in/sanjay-sri-thanu-malaiyaan-c-9ab237330/" target="_blank" rel="noreferrer" className="me-3"><FaLinkedin size={30} /></a>
        <a href="mailto:sanjaychittu2005@gmail.com" target="_blank" rel="noreferrer"><FaEnvelope size={30} /></a>
      </div>
    </Container>
  </section>
);

export default Contact;
