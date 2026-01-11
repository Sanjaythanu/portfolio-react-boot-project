import React, { useRef, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        formRef.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        () => {
          setLoading(false);
          setSent(true);
          formRef.current.reset();
        },
        (error) => {
          setLoading(false);
          alert("Something went wrong 😭");
          console.error(error);
        }
      );
  };

  return (
    <section id="contact" className="py-5 contact">
      <Container>
        <div className="text-center mb-5">
          <p className="section-title mb-1">Contact</p>
          <h2 className="section-heading">
            <span>Let’s build something amazing</span>
          </h2>
        </div>

        <Row className="g-4 align-items-center">
          {/* LEFT */}
          <Col lg={5}>
            <div className="glass-panel p-4 rounded-4 hover-lift">
              <h4 className="mb-3">Let’s work together 🚀</h4>
              <p style={{ color: "var(--subtle)" }}>
                Got a project, startup idea, or want to collab? Drop a message.
              </p>

              <div className="mt-4 d-flex flex-column gap-3">
                <div className="d-flex gap-3">
                  <i className="fas fa-envelope text-warning fs-5" />
                  <span>sanjaychittu2005@gmail.com</span>
                </div>
                <div className="d-flex gap-3">
                  <i className="fas fa-map-marker-alt text-warning fs-5" />
                  <span>Coimbatore, India</span>
                </div>
              </div>
            </div>
          </Col>

          {/* RIGHT */}
          <Col lg={7}>
            <div className="glass-panel p-4 rounded-4 hover-lift">
              <Form ref={formRef} onSubmit={sendEmail}>
                <Row className="g-3">
                  <Col md={6}>
                    <Form.Control
                      type="text"
                      name="user_name"
                      placeholder="Your Name"
                      className="glass-input"
                      required
                    />
                  </Col>

                  <Col md={6}>
                    <Form.Control
                      type="email"
                      name="user_email"
                      placeholder="Your Email"
                      className="glass-input"
                      required
                    />
                  </Col>

                  <Col md={12}>
                    <Form.Control
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      className="glass-input"
                      required
                    />
                  </Col>

                  <Col md={12}>
                    <Form.Control
                      as="textarea"
                      name="message"
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
                  className="mt-4 px-4 py-2 rounded-pill"
                  disabled={loading}
                >
                  {loading ? "Sending..." : "🚀 Send Message"}
                </Button>

                {sent && (
                  <p className="mt-3 text-success">
                    ✅ Message sent successfully!
                  </p>
                )}
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
