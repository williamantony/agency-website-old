import React, { Component } from 'react';
import './AppServices.css';
import ServiceTitle from '../../components/ServiceTitle/ServiceTitle';
import ServiceDescription from '../../components/ServiceDescription/ServiceDescription';
import Slider from '../../../../reusable/Slider/Slider';

class AppServices extends Component {

  render() {

    const services = [
      {
        title: 'Cloud',
        description: '',
      },
      {
        title: 'Mobile',
        description: '',
      },
      {
        title: 'Desktop',
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

    const slides = services.map((service) => (
      <div>{ service.title }</div>
    ));

    return (
      <div className="AppServices">
        <ServiceTitle title="Applications" subtitle="Development" />
        <ServiceDescription>
          We create user friendly, secure & high performance websites 
          using the latest in web technologies to help you succeed.
        </ServiceDescription>

        <Slider slides={slides} />
      </div>
    );
  }

}

export default AppServices;
