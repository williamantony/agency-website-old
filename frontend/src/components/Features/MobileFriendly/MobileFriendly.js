import React, { Component } from 'react';
import './MobileFriendly.css';
import MockupPhone from '../../MockupPhone/MockupPhone';

class MobileFriendly extends Component {

  render() {
    return (
      <div className="MobileFriendly">
        <div className="MobileFriendly__bg" />
        <MockupPhone />
        <div className="MobileFriendly__content">
          <div className="MobileFriendly__icon" />
          <div className="MobileFriendly__title">Mobile Friendly</div>
          <div className="MobileFriendly__subtitle">
            Nowadays, most people are using mobile devices for browsing as opposed to using desktop computers. 
            Therefore, it is important to serve your website in a mobile-friendly format.
          </div>
        </div>
      </div>
    );
  }

}

export default MobileFriendly;
