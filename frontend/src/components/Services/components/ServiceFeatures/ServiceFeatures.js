import React from 'react';
import './ServiceFeatures.css';

const ServiceFeatures = (props) => {
  return (
    <div className="ServiceFeatures" data-image-align={props.align || 'left'}>
      <div className="ServiceFeatures__image" />
      <div className="ServiceFeatures__content">
        { 
          props.features.map((feature, index) => (
            <div className="ServiceFeatures__feature" key={index}>
              <div className="ServiceFeatures__feature__icon" />
              <div className="ServiceFeatures__feature__title">{ feature.title }</div>
              <div className="ServiceFeatures__feature__description">{ feature.description }</div>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default ServiceFeatures;
