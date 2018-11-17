import React, { Component } from 'react';
import './CrossPlatform.css';
import SectionIcon from '../../SectionIcon/SectionIcon';
import SectionTitle from '../../SectionTitle/SectionTitle';
import SectionDescription from '../../SectionDescription/SectionDescription';
import PopularPlatforms from './components/PopularPlatforms/PopularPlatforms';
import SectionSummary from '../../SectionSummary/SectionSummary';

class CrossPlatform extends Component {

  render() {
    return (
      <div className="CrossPlatform">
        <SectionSummary align="center">
          <SectionIcon icon="cross-platform" />
          <SectionTitle title="Cross Platform" />
          <SectionDescription>
            We understand that every business is unique and have different&nbsp;needs. 
            We are experts at building applications to fits your desired platform or deployment environment.
          </SectionDescription>
        </SectionSummary>
        {/* <PopularPlatforms /> */}
      </div>
    );
  }

}

export default CrossPlatform;
