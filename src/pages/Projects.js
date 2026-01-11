import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects";

export default function Projects() {
  return (
    <section id="projects">
      <Container>
        <h2 className="section-title">Projects</h2>
        <Row>
          {projects.map((p) => (
            <Col md={6} lg={4} key={p.title} data-aos="zoom-in">
              <ProjectCard project={p} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
