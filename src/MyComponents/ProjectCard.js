import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ title, subtitle, videoUrl, description, details }) => {
  return (
    <div className="project-card">
      {/* Title with Optional Subtitle */}
      <h2>
        {title}
        {subtitle && <span className="project-subtitle">{subtitle}</span>}
      </h2>

      <div className="project-content">
        {/* Responsive Video */}
        <div className="project-video">
          <div className="video-wrapper">
            <iframe
              src={videoUrl}
              title={title}
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Description and Details */}
        <div className="project-info">
          <div className="project-description">
            {description} {/* This supports JSX content now */}
          </div>
          <hr className="project-divider" />
          <div className="project-details">
            {details && (
              <ul>
                {details.map((detail, index) => (
                  <li key={index}>
                    <span className="label">{detail.label}:</span>
                    <span className="value">{detail.value}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;