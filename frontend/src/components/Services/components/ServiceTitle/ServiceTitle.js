import React from 'react';
import './ServiceTitle.css';

const ServiceTitle = (props) => (
  <div className="ServiceTitle">
    <h2 className="ServiceTitle__text">
      <span className="ServiceTitle__text__shadow">{ props.titleShadow }</span>
      <span className="ServiceTitle__text__title">{ props.title }</span>
    </h2>
  </div>
);

export default ServiceTitle;
