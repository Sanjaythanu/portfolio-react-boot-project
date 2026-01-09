import React from 'react';
import { Navbar as BSNavbar, Container, Nav, Button } from 'react-bootstrap';
import { FaMoon, FaSun } from 'react-icons/fa';

const Navbar = ({ darkMode, toggleDarkMode }) => {
  return (
    <BSNavbar
      collapseOnSelect
      expand="lg"
      bg={darkMode ? 'dark' : 'light'}
      variant={darkMode ? 'dark' : 'light'}
      sticky="top"
    >
      <Container>
        <BSNavbar.Brand href="#home">Sanjay Sri Thanu Malaiyaan C</BSNavbar.Brand>
        <BSNavbar.Toggle aria-controls="responsive-navbar-nav" />
        <BSNavbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <Button
              variant={darkMode ? 'light' : 'dark'}
              onClick={toggleDarkMode}
              className="ms-2"
            >
              {darkMode ? <FaSun /> : <FaMoon />}
            </Button>
          </Nav>
        </BSNavbar.Collapse>
      </Container>
    </BSNavbar>
  );
};

export default Navbar;
