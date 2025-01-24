import React from 'react';
import './ContactSection.css';

const ContactSection = ({ message, email, buttonText, buttonLink }) => {
  return (
    <div className="contact-section">
      <p className="contact-message">{message}</p>
      <p className="contact-email">{email}</p>
      <p className="contact-or">or</p>
      <a href={buttonLink} target="_blank" rel="noopener noreferrer" className="contact-button">
        {buttonText}
      </a>
    </div>
  );
};

export default ContactSection;