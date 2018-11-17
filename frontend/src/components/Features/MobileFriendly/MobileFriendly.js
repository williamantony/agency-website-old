import React, { Component } from 'react';
import './MobileFriendly.css';
import MockupPhone from '../../MockupPhone/MockupPhone';
import SectionIcon from '../../SectionIcon/SectionIcon';
import SectionTitle from '../../SectionTitle/SectionTitle';
import SectionDescription from '../../SectionDescription/SectionDescription';
import SectionSummary from '../../SectionSummary/SectionSummary';

class MobileFriendly extends Component {

  render() {
    return (
      <div className="MobileFriendly">
        <div className="MobileFriendly__bg" />
        <MockupPhone />
        <div className="MobileFriendly__content">
          <SectionSummary>
            <SectionIcon icon="mobile-friendly" />
            <SectionTitle title="Mobile Friendly" />
            <SectionDescription>
              Nowadays, most people are using mobile devices for browsing as opposed to using desktop computers. 
              Therefore, it is important to serve your website in a mobile-friendly format.
            </SectionDescription>
          </SectionSummary>
        </div>
      </div>
    );
  }

}

export default MobileFriendly;
