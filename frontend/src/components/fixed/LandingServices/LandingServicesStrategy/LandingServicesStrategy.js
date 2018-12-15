import React from 'react';
import LandingServicesSection from '../component/LandingServicesSection/LandingServicesSection';

const LandingServicesStrategy = (props) => {
  const services = [    
    {
      id: 'branding',
      name: 'Branding',
      route: '/services/branding',
      description: 'We apply branding strategies to improve your sales and create a long lasting impression '+
        'in the minds of your target audience. ',
    },
    {
      id: 'marketing',
      name: 'Marketing',
      route: '/services/seo',
      description: 'We apply branding strategies to improve your sales and create a long lasting impression '+
        'in the minds of your target audience. ',
    },
  ];

  const summary = {
    title: `Identity & Strategy`,
    description: `
      We are a creative website development company, passionate about helping businesses grow.
      We take pride in watching the growth of our clients.
    `,
  };

  return (
    <LandingServicesSection align="right" summary={summary} services={services} />
  );
};

export default LandingServicesStrategy;
