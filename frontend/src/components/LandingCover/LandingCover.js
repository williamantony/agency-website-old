import React from 'react';
import './LandingCover.css';
import LandingCoverBackground from './components/LandingCoverBackground/LandingCoverBackground';
import LandingCoverContent from './components/LandingCoverContent/LandingCoverContent';

const LandingCover = () => (
  <section className="LandingCover">
    <LandingCoverBackground />
    <LandingCoverContent />
  </section>
);

export default LandingCover;
