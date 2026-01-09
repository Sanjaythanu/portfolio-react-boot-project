import React from 'react';
import { Card } from 'react-bootstrap';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ project }) => (
  <Card
    className="h-100 shadow"
    style={{ transition: 'all 0.3s', cursor: 'pointer', background:'#222', color:'#fff' }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = 'scale(1.05)';
      e.currentTarget.style.boxShadow = '0 0 20px #ffd700';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = 'scale(1)';
      e.currentTarget.style.boxShadow = '0 0 10px #000';
    }}
  >
    <Card.Body>
      <Card.Title>{project.title}</Card.Title>
      <Card.Text>{project.description}</Card.Text>
    </Card.Body>
    <Card.Footer className="d-flex justify-content-between">
      <a href={project.github || '#'} target="_blank" rel="noreferrer"><FaGithub /></a>
      <a href={project.link || '#'} target="_blank" rel="noreferrer"><FaExternalLinkAlt /></a>
    </Card.Footer>
  </Card>
);

export default ProjectCard;
