import React from 'react';
import Section from '../../reusable/Section/Section';
import LandingServicesDesign from './LandingServicesDesign/LandingServicesDesign';
import LandingServicesStrategy from './LandingServicesStrategy/LandingServicesStrategy';
import LandingServicesIntro from './LandingServicesIntro/LandingServicesIntro';

const LandingServices = (props) => {
  return (
    <React.Fragment>
      <Section bg="#fff" padding="100px 50px 100px 50px">
        <LandingServicesIntro />
      </Section>      
      <Section bg="#f5f5f5" padding="100px 50px 100px 50px">
        <LandingServicesDesign />
      </Section>
      <Section bg="#fff" padding="100px 50px">
        <LandingServicesStrategy />
      </Section>
    </React.Fragment>
  );
};

export default LandingServices;
