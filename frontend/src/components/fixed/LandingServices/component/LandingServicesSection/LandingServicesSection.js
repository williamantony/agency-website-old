import React from 'react';
import './LandingServicesSection.css';
import LandingServicesSectionSummary from '../LandingServicesSectionSummary/LandingServicesSectionSummary';
import LandingServicesItem from '../LandingServicesItem/LandingServicesItem';

const LandingServicesSection = (props) => {
  const {
    align,
    summary,
    services,
  } = props;

  return (
    <div className="LandingServicesSection" data-align={align}>
      <div className="LandingServicesSection__summary">
        <LandingServicesSectionSummary summary={summary} />
      </div>
      <div className="LandingServicesSection__content">
        {
          services.map((service, index) => (
            <LandingServicesItem
              key={index}
              id={service.id}
              name={service.name}
              route={service.route}
              description={service.description}
              isOffWhite={align === 'right'}
            />
          ))
        }
      </div>
    </div>
  )
};

export default LandingServicesSection;
