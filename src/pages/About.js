import React from "react";
import { Container, Row, Col, Badge } from "react-bootstrap";
import { FaJava, FaReact, FaNode, FaDatabase, FaGitAlt, FaJs } from "react-icons/fa";
import "./About.css"; // We'll create this for animations and styling

const skills = [
  { name: "Java", icon: <FaJava /> },
  { name: "React", icon: <FaReact /> },
  { name: "Node.js", icon: <FaNode /> },
  { name: "SQL", icon: <FaDatabase /> },
  { name: "Git", icon: <FaGitAlt /> },
  { name: "JavaScript", icon: <FaJs /> },
  { name: "C", icon: null },
  { name: "C++", icon: null },
  { name: "MERN Stack", icon: null },
];

export default function About() {
  return (
    <section id="about" className="py-5">
      <Container>
        <div className="text-center mb-5" data-aos="fade-up">
          <p className="section-title mb-1">About Me</p>
          <h2 className="section-heading">
            <span>My Coding Journey & Skills</span>
          </h2>
        </div>

        {/* Journey Section */}
        <Row className="mb-5">
          <Col md={6} data-aos="fade-right">
            <div className="glass p-4 hover-lift">
              <h4 className="mb-3">My Journey 🚀</h4>
              <p>
                I started coding back in college and quickly fell in love with building
                web applications. Since then, I have participated in many online competitions 
                including <strong>Yugam '24</strong> and <strong>Digitrix</strong>, 
                sharpening my skills and learning from real challenges.
              </p>
              <p>
                Along the way, I've mastered several tech stacks and completed multiple 
                personal projects, turning ideas into usable, responsive applications.
              </p>
            </div>
          </Col>

          <Col md={6} data-aos="fade-left">
            <div className="glass p-4 hover-lift">
              <h4 className="mb-3">Achievements 🏆</h4>
              <ul style={{ paddingLeft: "1.2rem", color: "var(--text)" }}>
                <li>Completed certifications: Java Programming, DSA, Scaler courses</li>
                <li>Practiced Data Structures & Algorithms extensively on LeetCode</li>
                <li>Regularly push code to GitHub and maintain projects</li>
              </ul>
              <p className="mt-3"><strong>Motto:</strong> Always learning new things and tech</p>
            </div>
          </Col>
        </Row>

        {/* Skills Section */}
        <Row data-aos="fade-up" className="g-3">
          <Col md={12}>
            <h4 className="mb-4 text-center">Tech Skills 💻</h4>
          </Col>
          {skills.map((skill) => (
            <Col md={4} sm={6} key={skill.name} data-aos="zoom-in" className="d-flex justify-content-center">
              <Badge className="skill-badge hover-lift p-3 glass-panel d-flex align-items-center gap-2">
                {skill.icon && <span style={{ fontSize: "1.5rem" }}>{skill.icon}</span>}
                {skill.name}
              </Badge>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
