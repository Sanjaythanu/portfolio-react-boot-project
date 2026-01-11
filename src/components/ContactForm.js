import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("🔥 Message sent! (hook backend later)");
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Row className="g-3">
        <Col md={6}>
          <Form.Control
            name="name"
            value={form.name}
            onChange={handleChange}
            type="text"
            placeholder="Your Name"
            className="glass-input"
            required
          />
        </Col>

        <Col md={6}>
          <Form.Control
            name="email"
            value={form.email}
            onChange={handleChange}
            type="email"
            placeholder="Your Email"
            className="glass-input"
            required
          />
        </Col>

        <Col md={12}>
          <Form.Control
            name="subject"
            value={form.subject}
            onChange={handleChange}
            type="text"
            placeholder="Subject"
            className="glass-input"
            required
          />
        </Col>

        <Col md={12}>
          <Form.Control
            name="message"
            value={form.message}
            onChange={handleChange}
            as="textarea"
            rows={5}
            placeholder="Your Message"
            className="glass-input"
            required
          />
        </Col>
      </Row>

      <Button
        type="submit"
        variant="warning"
        className="mt-4 px-4 py-2 rounded-pill hover-lift"
      >
        🚀 Send Message
      </Button>
    </Form>
  );
};

export default ContactForm;
