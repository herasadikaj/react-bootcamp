import React from "react";
import "./website.css";

const ProjectModal = ({ show, handleClose, project }) => {
  if (!show) {
    return null; 
  }

  return (
    <div className="popup-overlay">
      <div className="popup-container">
        <div className="popup-header">
          <h2 className="popup-title">{project.title}</h2>
          <button className="close-btn" onClick={handleClose}>
            &times;
          </button>
        </div>
        <div className="popup-body">
          <img src={project.image} alt={project.title} className="popup-img" />
          <p><strong>More info:<br/> </strong>{project.info}</p>
          <p><strong>Repository:</strong> <a href={project.repository} target="_blank" rel="noopener noreferrer">{project.repository}</a></p>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
