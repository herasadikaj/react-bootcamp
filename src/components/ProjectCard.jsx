import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function ProjectCard({ id, image, title, description, category, onShowModal }) {
  return (
    <Card className="project-card">
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title><strong>{title}</strong></Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Text className="category">{category}</Card.Text>
      </Card.Body>
      <Card.Body>
        <Link className="card-link" onClick={() => onShowModal(id)}>
          View Project
        </Link>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;
