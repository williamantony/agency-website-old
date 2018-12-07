import React, { Component } from 'react';
import './ConsumerTypes.css';
import ServiceDescription from '../Services/components/ServiceDescription/ServiceDescription';
import Slider from '../../reusable/Slider/Slider';
import ServiceItem from '../Services/components/ServiceItem/ServiceItem';
import SectionTitle from '../../reusable/SectionTitle/SectionTitle';

class ConsumerTypes extends Component {

  render() {

    const consumerTypes = [
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
        name: 'church',
        title: 'Churches',
        description: '',
      },
      {
        name: 'nonprofit',
        title: 'Not-for-profit',
        description: '',
      },
      {
        name: 'individuals',
        title: 'Individuals',
        description: '',
      },
    ];

    const slides = consumerTypes.map((service, index) => (
      <ServiceItem {...service} />
    ));

    return (
      <div className="ConsumerTypes">
        <SectionTitle title="Industries" subtitle="Design & Development"/>
        <ServiceDescription>
          We create user friendly, secure & high performance websites 
          using the latest in web technologies to help you succeed.
        </ServiceDescription>
        
        <Slider slides={slides} />
      </div>
    );
  }

}

export default ConsumerTypes;
