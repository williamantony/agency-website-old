import React, { Component } from 'react';
import './WebServiceSection.css';
import WebServiceSectionFeatures from './components/WebServiceSectionFeatures/WebServiceSectionFeatures';

class WebServiceSection extends Component {

  render() {
    return (
      <div className="WebServiceSection">
        <div className="WebServiceSection__image" />
        <div className="WebServiceSection__content">
          <WebServiceSectionFeatures />
        </div>
      </div>
    );
  }

}

export default WebServiceSection;
