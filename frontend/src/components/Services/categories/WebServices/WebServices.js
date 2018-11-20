import React, { Component } from 'react';
import './WebServices.css';
import ServiceTitle from '../../components/ServiceTitle/ServiceTitle';
import ServiceDescription from '../../components/ServiceDescription/ServiceDescription';
import Slider from '../../../Slider/Slider';
import ServiceItem from '../../components/ServiceItem/ServiceItem';

class WebServices extends Component {

  render() {

    const services = [
      {
        title: '',
        description: '',
      },
      {
        title: '',
        description: '',
      },
      {
        title: '',
        description: '',
      },
      {
        title: '',
        description: '',
      },
      {
        title: '',
        description: '',
      },
      {
        title: '',
        description: '',
      },
      {
        title: '',
        description: '',
      },
      {
        title: '',
        description: '',
      },
      {
        title: '',
        description: '',
      },
    ];
    
    const slides = services.map((service, index) => (
      <ServiceItem />
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
