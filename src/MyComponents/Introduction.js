import React from 'react';
import './Introduction.css';

const Introduction = () => {
  return (
    <div className="introduction">
      {/* Introductory Greeting */}
      <p className="large">
        <span style={{ color: '#e63946', fontWeight: 'bold' }}>Cześć!</span>{' '}
        I'm Ajay, an{' '}
        <span style={{ color: '#e63946' }}>AI & Gameplay</span> Engineer
      </p>

      {/* Passion Section */}
      <p className="medium">
        I love <strong>C++</strong> and <strong>Unreal Engine</strong>
      </p>

      {/* Coding Philosophy */}
      <p className="medium">
        I write <strong>readable</strong>, <strong>performant</strong> code. I enjoy creating{' '}
        <strong>compelling</strong> gameplay systems while <strong>learning</strong> from the <strong>best around</strong> me.
      </p>

      {/* Projects Intro */}
      <p className="small">
        Below you'll find some of the <strong>projects</strong> I've been working on lately.
      </p>
    </div>
  );
};

export default Introduction;