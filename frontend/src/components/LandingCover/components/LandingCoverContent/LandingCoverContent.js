import React from 'react';
import './LandingCoverContent.css';
import LandingCoverButton from '../LandingCoverButton/LandingCoverButton';
import LandingCoverContentText from '../LandingCoverContentText/LandingCoverContentText';

const LandingCoverContent = () => (
  <div className="LandingCoverContent">
    <div className="LandingCoverContent__wrapper">
      <div className="LandingCoverContent__block">
        <LandingCoverContentText>
          Software Development
          <br/>focused on User Experience
        </LandingCoverContentText>
        <LandingCoverButton>
          Get Instant Quote
        </LandingCoverButton>
      </div>
    </div>
  </div>
);

export default LandingCoverContent;
