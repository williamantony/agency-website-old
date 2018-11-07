import React from 'react';
import './ServiceOptions.css';

const ServiceOptions = (props) => {
  return (
    <div className="ServiceOptions">
      {
        props.options.map((option) => (
          <div className="ServiceOptions__item">

          </div>
        ))
      }
    </div>
  );
}

export default ServiceOptions;
