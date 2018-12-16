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
            {/* <div className="image image--launch"></div> */}
            <div className="LandingServicesIntro__sections__item__text">
              <div className="LandingServicesIntro__sections__item__text__title">Creative</div>
              <div className="LandingServicesIntro__sections__item__text__name">
                Make your brand stand out from your competitors using a unique identity. 
              </div>
            </div>
          </div>
          <div className="LandingServicesIntro__sections__divider">&</div>
          <div className="LandingServicesIntro__sections__item">
            <div className="LandingServicesIntro__sections__item__icon LandingServicesIntro__sections__item__icon--web" />
            <div className="LandingServicesIntro__sections__item__text">
              <div className="LandingServicesIntro__sections__item__text__title">Strategic</div>
              <div className="LandingServicesIntro__sections__item__text__name">
                Websites that are uniquely designed and optimized for conversion. 
              </div>
            </div>
          </div>
        </div>


        {/* <div className="LandingServicesIntro__sections">
          <div className="LandingServicesIntro__sections__item">
            <div className="LandingServicesIntro__sections__item__icon LandingServicesIntro__sections__item__icon--web" />
            <div className="LandingServicesIntro__sections__item__text">
              <div className="LandingServicesIntro__sections__item__text__title">Branding</div>
              <div className="LandingServicesIntro__sections__item__text__name">
                Make your brand stand out from your competitors using a unique identity. 
              </div>
            </div>
          </div>
          <div className="LandingServicesIntro__sections__item">
            <div className="LandingServicesIntro__sections__item__icon LandingServicesIntro__sections__item__icon--web" />
            <div className="LandingServicesIntro__sections__item__text">
              <div className="LandingServicesIntro__sections__item__text__title">Websites</div>
              <div className="LandingServicesIntro__sections__item__text__name">
                Websites that are uniquely designed and optimized for conversion. 
              </div>
            </div>
          </div>
          <div className="LandingServicesIntro__sections__item">
            <div className="LandingServicesIntro__sections__item__icon LandingServicesIntro__sections__item__icon--target" />
            <div className="LandingServicesIntro__sections__item__text">
              <div className="LandingServicesIntro__sections__item__text__title">Search</div>
              <div className="LandingServicesIntro__sections__item__text__name">
                Maintains the reputation and rankings of your website or business profile. 
              </div>
            </div>
          </div>
        </div> */}

      </div>
    );
  }

}

export default LandingServicesIntro;
