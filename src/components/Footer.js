import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => (
  <footer className="py-3 mt-4">
    <Container className="text-center">
      <small style={{ color: 'var(--subtle-text)' }}>
        © {new Date().getFullYear()} Sanjay Sri Thanu Malaiyaan C · Built with
        React & Bootstrap
      </small>
    </Container>
  </footer>
);

export default Footer;
