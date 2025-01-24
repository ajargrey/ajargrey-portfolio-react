import React from 'react'
import WebsiteHeader from './WebsiteHeader'
import Introduction from './Introduction'
import ProfessionalProjects from './ProfessionalProjects';
import PersonalProjects from './PersonalProjects';
import OldProjects from './OldProjects';
import SkillBarHolder from './SkillBarHolder';


export default function ContentHolder() {
  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div
          className="col-12 col-md-10 col-lg-9"
          style={{
            fontFamily: 'ProximaNovaRegular, sans-serif',
            padding: 0,
          }}
        >
          <WebsiteHeader />
          <Introduction />
          <ProfessionalProjects />
          <PersonalProjects />
          <OldProjects />
          <SkillBarHolder />
        </div>
      </div>
    </div>
  );
}
