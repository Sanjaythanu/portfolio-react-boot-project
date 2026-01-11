import React from 'react';
import { Card, Badge } from 'react-bootstrap';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ project }) => (
  <Card
    className="h-100 glass-panel hover-lift"
    style={{ cursor: 'pointer' }}
  >
    <Card.Body>
      <Card.Title className="mb-2">{project.title}</Card.Title>
      <Card.Text className="mb-3" style={{ color: 'var(--subtle-text)' }}>
        {project.description}
      </Card.Text>

      {project.tags && (
        <div className="d-flex flex-wrap gap-2 mb-2">
          {project.tags.map((tag) => (
            <Badge
              key={tag}
              bg=""
              style={{
                backgroundColor: 'var(--accent-soft)',
                fontSize: '0.75rem',
              }}
            >
              {tag}
            </Badge>
          ))}
        </div>
      )}
    </Card.Body>

    <Card.Footer className="border-0 bg-transparent d-flex justify-content-between align-items-center">
      <small style={{ color: 'var(--subtle-text)' }}>{project.stack}</small>
      <div className="d-flex gap-3">
        <a
          href={project.github || '#'}
          target="_blank"
          rel="noreferrer"
          className="text-reset"
        >
          <FaGithub />
        </a>
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="text-reset"
          >
            <FaExternalLinkAlt />
          </a>
        )}
      </div>
    </Card.Footer>
  </Card>
);

export default ProjectCard;
