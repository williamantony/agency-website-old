import React from 'react';
import './ServiceFeatureIcon.css';

const ServiceFeatureIcon = (props) => {
  return (
    <div className="ServiceFeatureIcon">
      <div className="ServiceFeatureIcon__image" data-name={ props.name } />
    </div>
  );
}

export default ServiceFeatureIcon;
