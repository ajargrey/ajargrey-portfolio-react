import React from 'react';
import SectionHeader from './SectionHeader';
import ProjectCard from './ProjectCard';

const ProfessionalProjects = () => {
  return (
    <div>
      <SectionHeader text="Professional Projects" />
      <ProjectCard
        title="GRAND THEFT AUTO VI"
        subtitle=""
        videoUrl="https://www.youtube.com/embed/QdBZY2fkU-0"
        description={
          <div>
            <p>
              This is a <strong>bold</strong> and <em>italic</em> description example.
            </p>
            <ul>
              <li>Point 1</li>
              <li>Point 2</li>
            </ul>
          </div>
        }
        details={[
          { label: 'Position', value: <strong>Associate AI/Gameplay Programmer</strong> },
          { label: 'Company', value: <strong>Rockstar Games</strong> },
          { label: 'Team', value: <strong>Vehicles AI</strong> },
          { label: 'Engine', value: <strong>RAGE/C++</strong> },
          { label: 'Duration', value: <>2022-2023<strong>*</strong></> },
        ]}
      />
    </div>
  );
};

export default ProfessionalProjects;