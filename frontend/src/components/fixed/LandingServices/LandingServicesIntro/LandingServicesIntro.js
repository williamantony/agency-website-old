import React, { Component } from 'react';
import './LandingServicesIntro.css';

class LandingServicesIntro extends Component {

  render() {
    return (
      <div className="LandingServicesIntro">
        <div className="LandingServicesIntro__title">
          Services Offered
        </div>
        <div className="LandingServicesIntro__text">
          We create internet-based solutions<br/>
          <span className="desc">to help you reach your goals in business.</span>
        </div>
        <div className="LandingServicesIntro__sections">
          <div className="LandingServicesIntro__sections__item">
            <div className="LandingServicesIntro__sections__item__icon LandingServicesIntro__sections__item__icon--web" />
            <div className="LandingServicesIntro__sections__item__text">
              <div className="LandingServicesIntro__sections__item__text__title">Setup Business</div>
              <div className="LandingServicesIntro__sections__item__text__name">Website Development</div>
              <div className="LandingServicesIntro__sections__item__text__name">Logo Design</div>
            </div>
          </div>
          <div className="LandingServicesIntro__sections__item">
            <div className="LandingServicesIntro__sections__item__icon LandingServicesIntro__sections__item__icon--target" />
            <div className="LandingServicesIntro__sections__item__text">
              <div className="LandingServicesIntro__sections__item__text__title">Promote your business</div>
              <div className="LandingServicesIntro__sections__item__text__name">Search Engine Optimization</div>
              <div className="LandingServicesIntro__sections__item__text__name">Online Marketing</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default LandingServicesIntro;
