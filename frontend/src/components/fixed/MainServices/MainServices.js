import React from 'react';
import './MainServices.css';
import MainServicesItem from './components/MainServicesItem/MainServicesItem';

const MainServices = (props) => {
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

  return (
    <div className="MainServices">
      {
        services.map((service, index) => (
          <MainServicesItem
            key={index}
            id={service.id}
            name={service.name}
            route={service.route}
            description={service.description}
          />
        ))
      }
      
    </div>
  );
};

export default MainServices;
