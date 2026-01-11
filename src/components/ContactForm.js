import React from 'react';
import { Form, Button } from 'react-bootstrap';

const ContactForm = () => (
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
);

export default ContactForm;
