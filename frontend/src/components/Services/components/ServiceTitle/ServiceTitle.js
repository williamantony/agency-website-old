import React from 'react';
import './ServiceTitle.css';

const ServiceTitle = (props) => (
  <div className="ServiceTitle">
    <h2 className="ServiceTitle__title">{ props.children }</h2>
  </div>
);
    

export default ServiceTitle;
