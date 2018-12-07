import React from 'react';
import './LandingCoverButton.css';

const LandingCoverButton = (props) => (
  <button className="LandingCoverButton">
    { props.children }
  </button>
);

export default LandingCoverButton;
