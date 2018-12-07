import React from 'react';
import './ServiceFeatures.css';
import ServiceFeatureIcon from './components/ServiceFeatureIcon/ServiceFeatureIcon';

const ServiceFeatures = (props) => {
  return (
    <div className="ServiceFeatures" data-image-align={props.align || 'left'}>
      <div className="ServiceFeatures__image" />
      <div className="ServiceFeatures__content">
        {
          props.features.map((feature) => (
            <div className="ServiceFeatures__feature" key={feature.name}>
              <ServiceFeatureIcon name={feature.name} />
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
