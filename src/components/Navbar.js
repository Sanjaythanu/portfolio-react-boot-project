import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";

export default function MyNavbar({ toggleTheme }) {
  return (
    <Navbar
      expand="lg"
      fixed="top"
      className="glass shadow-sm"
      style={{ backdropFilter: "blur(18px)" }}
    >
      <Container>
        {/* Brand */}
        <Navbar.Brand
          href="#home"
          className="fw-bold d-flex align-items-center gap-2"
        >
          <span
            style={{
              width: "32px",
              height: "32px",
              borderRadius: "50%",
              background:
                "linear-gradient(135deg, var(--accent), var(--accent2))",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              fontWeight: "700",
            }}
          >
            S
          </span>
          <span>Sanjay.dev</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-navbar" />

        <Navbar.Collapse id="main-navbar">
          {/* Links */}
          <Nav className="ms-auto align-items-lg-center gap-lg-3">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>

            {/* Theme Toggle */}
            <Button
              onClick={toggleTheme}
              variant="warning"
              className="rounded-pill px-3 ms-lg-3 mt-3 mt-lg-0"
            >
              🌗
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
