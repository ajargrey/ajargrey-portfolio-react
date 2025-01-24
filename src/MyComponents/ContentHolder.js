import React from 'react'
import WebsiteHeader from './WebsiteHeader'
import Introduction from './Introduction'
import ProfessionalProjects from './ProfessionalProjects';
import PersonalProjects from './PersonalProjects';


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
        </div>
      </div>
    </div>
  );
}
