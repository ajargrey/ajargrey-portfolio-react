import React from 'react';
import './SectionHeader.css'; // Import the CSS file

const SectionHeader = ({ text }) => {
  return (
    <div className="section-header">
      {text}
    </div>
  );
};

export default SectionHeader;