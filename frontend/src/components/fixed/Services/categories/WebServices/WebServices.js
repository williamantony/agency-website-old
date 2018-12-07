import React, { Component } from 'react';
import './WebServices.css';
import ServiceTitle from '../../components/ServiceTitle/ServiceTitle';
import ServiceDescription from '../../components/ServiceDescription/ServiceDescription';
import Slider from '../../../../reusable/Slider/Slider';
import ServiceItem from '../../components/ServiceItem/ServiceItem';

class WebServices extends Component {

  render() {

    const serviceTypes = [
      {
        name: 'commercial',
        title: 'Commercial',
        description: '',
      },
      {
        name: 'ecommerce',
        title: 'Online Shopping',
        description: '',
      },
      {
        name: 'wordpress',
        title: 'Wordpress CMS',
        description: '',
      },
      {
        name: 'database',
        title: 'Database Driven',
        description: '',
      },
      {
        name: 'payment',
        title: 'Accept Payment',
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
