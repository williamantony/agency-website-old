import React, { Component } from 'react';
import './WebServices.css';
import ServiceTitle from '../../components/ServiceTitle/ServiceTitle';
import ServiceDescription from '../../components/ServiceDescription/ServiceDescription';
import Slider from '../../../Slider/Slider';
import ServiceItem from '../../components/ServiceItem/ServiceItem';

class WebServices extends Component {

  render() {

    const serviceTypes = [
      {
        name: 'ecommerce',
        title: 'E-Commerce',
        description: '',
      },
      {
        name: 'business',
        title: 'Business',
        description: '',
      },
      {
        name: 'professionals',
        title: 'Professionals',
        description: '',
      },
      {
        name: 'service_provider',
        title: 'Service Providers',
        description: '',
      },
      {
        name: 'startup',
        title: 'Start-Up',
        description: '',
      },
      {
        name: 'personal',
        title: 'Personal',
        description: '',
      },
      {
        name: 'portfolio',
        title: 'Portfolio',
        description: '',
      },
      {
        name: 'online_profile',
        title: 'Online Profile',
        description: '',
      },
    ];
    
    const slides = serviceTypes.map((service, index) => (
      <ServiceItem {...service} />
    ));

    return (
      <div className="WebServices">
        <ServiceTitle title="Website Design" subtitle="Design & Development"/>
        <ServiceDescription>
          We create user friendly, secure & high performance websites 
          using the latest in web technologies to help you succeed.
        </ServiceDescription>
        
        <Slider slides={slides} />
      </div>
    );
  }

}

export default WebServices;
