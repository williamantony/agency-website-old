import React, { Component } from 'react';
import './AppFeatures.css';
import ServiceFeatures from '../../components/ServiceFeatures/ServiceFeatures';

class AppFeatures extends Component {

  render() {
    
    const features = [
      {
        name: 'freshdesign',
        title: 'Fresh & Interactive',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        name: 'customfeatures',
        title: 'Custom Features',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        name: 'crossplatform',
        title: 'Cross Platform',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        name: 'offlinesupport',
        title: 'Offline Support',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
    ];

    return (
      <div className="AppFeatures">
        <ServiceFeatures image={'#'} features={features} align="right" />
      </div>
    );
  }

}

export default AppFeatures;
