import React from 'react';
import './LandingCoverContentText.css';

const LandingCoverContentText = (props) => (
  <h1 className="LandingCoverContentText">
    { props.children }
  </h1>
);

export default LandingCoverContentText;
