import React, { Component } from 'react';
import './BrandServices.css';
import ServiceTitle from '../../components/ServiceTitle/ServiceTitle';
import ServiceDescription from '../../components/ServiceDescription/ServiceDescription';
import ServiceCategories from '../../components/ServiceCategories/ServiceCategories';

class BrandServices extends Component {

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
    ];
    
    const features = [
      {
        title: 'Mobile Friendly',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        title: 'Search Engine Optimized',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        title: 'Optimized for Speed',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        title: 'Secure with HTTPS',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
    ];

    const categories = [
      {
        name: 'logodesign',
        title: 'Logo Design'
      },
      {
        name: 'corporateidentity',
        title: 'Corporate Identity'
      },
      {
        name: 'printdesign',
        title: 'Print Design'
      },
    ];

    return (
      <div className="BrandServices">
        <ServiceTitle title="Branding" subtitle="Design & Development"/>
        <ServiceDescription>
          We create user friendly, secure & high performance websites 
          using the latest in web technologies to help you succeed.
        </ServiceDescription>
        <ServiceCategories categories={categories} />
        {/* <ServiceOptions options={services} /> */}
        {/* <ServiceSlider options={services} /> */}
      </div>
    );
  }

}

export default BrandServices;
