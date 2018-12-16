import React from 'react';
import LandingServicesSection from '../component/LandingServicesSection/LandingServicesSection';

const LandingServicesDesign = (props) => {
  const services = [
    {
      id: 'websites',
      name: 'Websites',
      route: '/services/website-design',
      description: 'We create user friendly, secure & high performance websites '+
        'using the latest in web technologies to help you succeed.',
    },
    {
      id: 'apps',
      name: 'Applications',
      route: '/services/application-development',
      description: 'We develop cross-platform applications that are optimized for user interactions '+
        'to reduce the gap between you and your audience',
    },
  ];

  const summary = {
    title: 'Creative Services',
    description: `
      We are a creative website development company, passionate about helping businesses grow.
      We take pride in watching the growth of our clients.
    `,
  };

  return (
    <LandingServicesSection summary={summary} services={services} />
  )
};

export default LandingServicesDesign;
