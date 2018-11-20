import React, { Component } from 'react';
import './MarketingServices.css';
import ServiceTitle from '../../components/ServiceTitle/ServiceTitle';
import ServiceDescription from '../../components/ServiceDescription/ServiceDescription';
import ServiceCategories from '../../components/ServiceCategories/ServiceCategories';

class MarketingServices extends Component {

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
        name: 'searchoptimization',
        title: 'Search Engine Optimization'
      },
      {
        name: 'searchmarketing',
        title: 'Search Engine Marketing'
      },
      {
        name: 'locallistings',
        title: 'Local Listings'
      },
      {
        name: 'socialmediamarketing',
        title: 'Social Media Marketing'
      },
      {
        name: 'socialmediamanagement',
        title: 'Social Media Management'
      },
      {
        name: 'designformarketing',
        title: 'Design for Marketing'
      },
    ];

    return (
      <div className="MarketingServices">
        <ServiceTitle title="Marketing" subtitle="Services"/>
        <ServiceDescription>
          We create user friendly, secure & high performance websites 
          using the latest in web technologies to help you succeed.
        </ServiceDescription>
        <ServiceCategories categories={categories} />
      </div>
    );
  }

}

export default MarketingServices;
