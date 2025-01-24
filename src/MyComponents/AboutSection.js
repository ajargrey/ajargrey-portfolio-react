import React from 'react';
import './AboutSection.css';

const AboutSection = ({ title, content }) => {
  return (
    <div className="about-section">
      <h2 className="about-title">{title}</h2>
      <div className="about-content">
        {content.map((paragraph, index) => (
          <p key={index} className="about-paragraph">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
};

export default AboutSection;