import React, { Component } from 'react';
import './CrossPlatform.css';
import CrossPlatformItem from './components/CrossPlatformItem/CrossPlatformItem';

class CrossPlatform extends Component {

  render() {
    return (
      <div className="CrossPlatform">
        <div className="CrossPlatform__title">Cross Platform</div>
        <div className="CrossPlatform__subtitle">
          We understand that every business is unique and have different&nbsp;needs. 
          We are experts at building applications to fits your desired platform or deployment environment.
        </div>
        <div className="CrossPlatform__platforms">
          <CrossPlatformItem name="Windows" />
          <CrossPlatformItem name="iOs" />
          <CrossPlatformItem name="Android" />
          <CrossPlatformItem name="Linux" />
        </div>
      </div>
    );
  }

}

export default CrossPlatform;
