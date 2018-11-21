import React, { Component } from 'react';
import './WebFeatures.css';
import ServiceFeatures from '../../components/ServiceFeatures/ServiceFeatures';

class WebFeatures extends Component {

  render() {

    
    const features = [
      {
        name: 'responsivedesign',
        title: 'Mobile Friendly',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        name: 'searchoptimized',
        title: 'Search Engine Optimized',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        name: 'speedoptimized',
        title: 'Optimized for Speed',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        name: 'securewebsite',
        title: 'Secure with HTTPS',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
    ];

    return (
      <div className="WebFeatures">
        <ServiceFeatures image={'#'} features={features} />
      </div>
    );
  }

}

export default WebFeatures;
