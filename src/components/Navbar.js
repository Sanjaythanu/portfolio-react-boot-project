import React from 'react';
import {
  Navbar as BSNavbar,
  Container,
  Nav,
  Button,
} from 'react-bootstrap';
import { FaMoon, FaSun } from 'react-icons/fa';

const Navbar = ({ darkMode, toggleDarkMode }) => (
  <BSNavbar
    collapseOnSelect
    expand="lg"
    bg={darkMode ? 'dark' : 'light'}
    variant={darkMode ? 'dark' : 'light'}
    fixed="top"
    className="shadow-sm"
  >
    <Container>
      <BSNavbar.Brand href="#home" className="fw-bold">
        <span style={{ color: 'var(--accent)' }}>{'<'}</span>
        Sanjay
        <span style={{ color: 'var(--accent)' }}>{'/>'}</span>
      </BSNavbar.Brand>

      <BSNavbar.Toggle aria-controls="nav" />

      <BSNavbar.Collapse id="nav">
        <Nav className="ms-auto align-items-lg-center gap-lg-2">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#projects">Projects</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>

          <Button
            variant={darkMode ? 'outline-light' : 'outline-dark'}
            onClick={toggleDarkMode}
            className="ms-lg-3 d-flex align-items-center"
            size="sm"
          >
            {darkMode ? <FaSun className="me-1" /> : <FaMoon className="me-1" />}
            {darkMode ? 'Light' : 'Dark'}
          </Button>
        </Nav>
      </BSNavbar.Collapse>
    </Container>
  </BSNavbar>
);

export default Navbar;
