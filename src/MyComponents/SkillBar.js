import React from 'react';
import './SkillBar.css';

const SkillBar = ({ title, items, backgroundColor }) => {
  return (
    <div
      className="category-display"
      style={{ backgroundColor: backgroundColor || '#ffffff' }}
    >
      <h2 className="category-title">{title}</h2>
      <div className="category-items">
        {items.map((item, index) => (
          <div key={index} className="category-item">
            <img
              src={item.imageSrc}
              alt={item.altText}
              className="category-icon"
            />
            {item.label && <p className="category-label">{item.label}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillBar;