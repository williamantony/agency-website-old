import React from 'react';
import './ServiceDescription.css';

const ServiceDescription = (props) => (
  <div className="ServiceDescription">
    <div className="ServiceDescription__text">{ props.children }</div>
  </div>
);

export default ServiceDescription;
