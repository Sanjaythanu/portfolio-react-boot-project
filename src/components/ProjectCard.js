import React from "react";
import { Card, Button, Badge } from "react-bootstrap"; // you must import these

export default function ProjectCard({ project }) {
  return (
    <Card className="glass h-100 hover-lift" data-aos="fade-up">
      <Card.Body>
        <Card.Title>{project.title}</Card.Title>
        <Card.Text>{project.description}</Card.Text>

        <div className="mb-3">
          {project.tags.map((t) => (
            <Badge key={t} bg="" className="me-1 glass">
              {t}
            </Badge>
          ))}
        </div>

        <Button size="sm" className="btn-glow me-2" href={project.github} target="_blank">
          GitHub
        </Button>
        <Button size="sm" variant="outline-secondary" href={project.link} target="_blank">
          Live
        </Button>
      </Card.Body>
    </Card>
  );
}
