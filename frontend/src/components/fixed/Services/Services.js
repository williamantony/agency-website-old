import React, { Component } from 'react';
import './Services.css';
import MainServices from '../MainServices/MainServices';

class Services extends Component {

  render() {
    return (
      <div className="Services">
        <div className="Services__text">
          <div className="Services__text__title">Overview</div>
          <div className="Services__text__description">
            We are a creative website development company, passionate about helping businesses grow.
            We take pride in watching the growth of our clients.

            {/* We develop cross-platform applications that are optimized 
            for user interactions to reduce the gap between you and your audience. */}
          </div>

          <div className="Services__text__links">
            <div className="Services__text__links__item Services__text__links__item--getquote">
              <div className="Services__text__links__item__text">Request Custom Quote</div>
              <div className="Services__text__links__item__icon" />
            </div>
            {/* <div className="Services__text__links__item">
              <div className="Services__text__links__item__text">See Pricing & Packages</div>
              <div className="Services__text__links__item__icon" />
            </div> */}
          </div>

        </div>
        <div className="Services__list">
          <MainServices />
        </div>
      </div>
    );
  }

}

export default Services;
