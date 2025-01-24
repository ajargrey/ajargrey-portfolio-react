import React from 'react'
import WebsiteHeader from './WebsiteHeader'
import Introduction from './Introduction'
import ProfessionalProjects from './ProfessionalProjects';
import PersonalProjects from './PersonalProjects';
import OldProjects from './OldProjects';
import SkillBarHolder from './SkillBarHolder';
import AboutSection from './AboutSection';
import ContactSection from './ContactSection';


export default function ContentHolder() {

  const aboutContent = [
    "I am a passionate programmer with immense love for artificial intelligence and video games.",
    "As much as I like creating fantasy worlds, I also like figuring out how the real world works, understanding how different pieces fit together in the cosmos, what drives creatures to act a certain way, and why nature behaves the way it does.",
    "I am fond of reading hard science fiction and fantasy.",
    "When I'm not immersed in code or stories, you'll likely find me hiking."
  ];

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
          <AboutSection title="About Me" content={aboutContent} />
          <ContactSection
            message="Feel free to send me a message relating anything that might pique your interest."
            email="ajargrey@gmail.com"
            buttonText="LinkedIn"
            buttonLink="https://linkedin.com/in/ajargrey"
          />
        </div>
      </div>
    </div>
  );
}
