import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { FaReact, FaJava, FaJs, FaBootstrap } from "react-icons/fa";
import "./Home.css"; // Home CSS for animations

const words = [
  "Full Stack Developer",
  "React Enthusiast",
  "Java Lover",
  "UI/UX Designer",
  "Problem Solver",
];

export default function Home() {
  const [currentWord, setCurrentWord] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  // Typing effect for hero subtitle
  useEffect(() => {
    const typingSpeed = deleting ? 50 : 150;
    const timeout = setTimeout(() => {
      let fullWord = words[wordIndex];
      if (!deleting) {
        setCurrentWord(fullWord.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
        if (charIndex + 1 === fullWord.length) setDeleting(true);
      } else {
        setCurrentWord(fullWord.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
        if (charIndex - 1 === 0) {
          setDeleting(false);
          setWordIndex((wordIndex + 1) % words.length);
        }
      }
    }, typingSpeed);
    return () => clearTimeout(timeout);
  }, [charIndex, deleting, wordIndex]);

  return (
    <section
      id="home"
      className="d-flex align-items-center hero-section"
      style={{ minHeight: "100vh", position: "relative" }}
    >
      {/* Floating tech icons */}
      <div className="floating-icons">
        <FaReact className="icon react" />
        <FaJava className="icon java" />
        <FaJs className="icon js" />
        <FaBootstrap className="icon bootstrap" />
      </div>

      <Container className="text-center">
        <h1 className="display-4 fw-bold hero-title" data-aos="fade-up">
          Hey, I'm <span className="accent-text">Sanjay</span>
        </h1>

        <h2
          className="mt-3 hero-subtitle"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <span className="typed-word">{currentWord}</span>
          <span className="cursor">|</span>
        </h2>

        <p
          className="lead mt-3 hero-description"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          Building modern web apps with React, Java & Bootstrap • UI/UX Designer
        </p>

        {/* Expanded Portfolio History */}
        <div
          className="hero-history mt-5 text-start mx-auto"
          style={{ maxWidth: "700px" }}
        >
          <h4 data-aos="fade-up" data-aos-delay="600">💻 My Journey</h4>
          <ul>
            <li data-aos="fade-up" data-aos-delay="700">
              Started coding in Java at 16, building desktop applications.
            </li>
            <li data-aos="fade-up" data-aos-delay="800">
              Explored Web Development with HTML, CSS, JS, and Bootstrap.
            </li>
            <li data-aos="fade-up" data-aos-delay="900">
              Learned React for dynamic, responsive single-page applications.
            </li>
            <li data-aos="fade-up" data-aos-delay="1000">
              Built projects including Portfolio Website & Document Forgery Detector.
            </li>
            <li data-aos="fade-up" data-aos-delay="1100">
              Achieved certifications in Java, Data Structures & Algorithms.
            </li>
            <li data-aos="fade-up" data-aos-delay="1200">
              Passionate about creating beautiful UIs and scalable backend systems.
            </li>
          </ul>
        </div>

        <div
          className="mt-4 hero-buttons"
          data-aos="fade-up"
          data-aos-delay="1400"
        >
          <a href="#projects" className="btn-glow hover-lift me-3">
            View Projects
          </a>
          <a href="#contact" className="btn-outline-glow hover-lift">
            Contact Me
          </a>
        </div>
      </Container>
    </section>
  );
}
